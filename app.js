/**
 * Applied AI Engineering — Interactive Curriculum & Progress Tracker
 * State Management, Live LocalStorage Persistence, In-App Video Modal
 */

(function () {
    'use strict';

    // State Constants
    const STORAGE_KEY_CHECKPOINTS = 'applied_ai_progress_checkpoints_v2';
    const STORAGE_KEY_EXPANDED = 'applied_ai_expanded_modules_v2';

    // State Objects
    let checkpointsState = {};
    let expandedState = {};
    let activeFilter = 'all';
    let searchQuery = '';

    // Load persisted state from localStorage
    function loadState() {
        try {
            const rawCheckpoints = localStorage.getItem(STORAGE_KEY_CHECKPOINTS);
            if (rawCheckpoints) {
                checkpointsState = JSON.parse(rawCheckpoints);
            }
        } catch (e) {
            console.error('Failed to load checkpoints from localStorage', e);
            checkpointsState = {};
        }

        try {
            const rawExpanded = localStorage.getItem(STORAGE_KEY_EXPANDED);
            if (rawExpanded) {
                expandedState = JSON.parse(rawExpanded);
            } else {
                // By default expand first module
                expandedState = { '01-python-ai': true };
            }
        } catch (e) {
            console.error('Failed to load expanded modules state', e);
            expandedState = { '01-python-ai': true };
        }
    }

    // Save state to localStorage
    function saveCheckpointsState() {
        try {
            localStorage.setItem(STORAGE_KEY_CHECKPOINTS, JSON.stringify(checkpointsState));
        } catch (e) {
            console.error('Failed to save checkpoints', e);
        }
    }

    function saveExpandedState() {
        try {
            localStorage.setItem(STORAGE_KEY_EXPANDED, JSON.stringify(expandedState));
        } catch (e) {
            console.error('Failed to save expanded state', e);
        }
    }

    // Calculation Helpers
    function getModuleStats(mod) {
        let total = 0;
        let completed = 0;

        // Video checkpoints
        if (mod.videos) {
            mod.videos.forEach((vid, vidIdx) => {
                if (vid.checkpoints) {
                    vid.checkpoints.forEach((_, cpIdx) => {
                        total++;
                        const cpKey = `cp-${vid.id}-${cpIdx}`;
                        if (checkpointsState[cpKey]) completed++;
                    });
                }
            });
        }

        // Project deliverables
        if (mod.project && mod.project.deliverables) {
            mod.project.deliverables.forEach((_, delIdx) => {
                total++;
                const delKey = `proj-${mod.id}-${delIdx}`;
                if (checkpointsState[delKey]) completed++;
            });
        }

        const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
        const isCompleted = total > 0 && completed === total;

        return { total, completed, percentage, isCompleted };
    }

    function getGlobalStats(curriculum) {
        let totalItems = 0;
        let completedItems = 0;
        let completedModules = 0;
        let totalHours = 0;
        let earnedHours = 0;

        curriculum.forEach(mod => {
            totalHours += mod.hours || 0;
            const stats = getModuleStats(mod);
            totalItems += stats.total;
            completedItems += stats.completed;
            if (stats.isCompleted) completedModules++;
            earnedHours += Math.round((mod.hours || 0) * (stats.percentage / 100));
        });

        const overallPercentage = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

        return {
            totalItems,
            completedItems,
            completedModules,
            totalModules: curriculum.length,
            totalHours,
            earnedHours,
            overallPercentage
        };
    }

    // Render Stats Row
    function renderGlobalStats(curriculum) {
        const stats = getGlobalStats(curriculum);

        document.getElementById('stat-total-progress').textContent = `${stats.overallPercentage}%`;
        document.getElementById('stat-checkpoints').textContent = `${stats.completedItems} / ${stats.totalItems}`;
        document.getElementById('stat-modules').textContent = `${stats.completedModules} / ${stats.totalModules}`;
        document.getElementById('stat-hours').textContent = `${stats.earnedHours}h / ${stats.totalHours}h`;

        // Master Progress Bar
        const progressBar = document.getElementById('master-progress-fill');
        if (progressBar) {
            progressBar.style.width = `${stats.overallPercentage}%`;
        }
        const progressPercentageText = document.getElementById('master-progress-percentage');
        if (progressPercentageText) {
            progressPercentageText.textContent = `${stats.overallPercentage}% Complete`;
        }
    }

    // Video Modal Controller
    function openVideoModal(title, youtubeId, instructor) {
        const modalOverlay = document.getElementById('video-modal');
        const modalTitle = document.getElementById('modal-video-title');
        const modalContainer = document.getElementById('modal-iframe-container');

        if (!modalOverlay || !modalContainer) return;

        modalTitle.textContent = `${title} — ${instructor}`;
        modalContainer.innerHTML = `
            <iframe 
                src="https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0" 
                title="${title}" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
            </iframe>
        `;

        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeVideoModal() {
        const modalOverlay = document.getElementById('video-modal');
        const modalContainer = document.getElementById('modal-iframe-container');

        if (modalOverlay) modalOverlay.classList.remove('active');
        if (modalContainer) modalContainer.innerHTML = '';
        document.body.style.overflow = '';
    }

    // Render Curriculum Modules List
    function renderModules(curriculum) {
        const container = document.getElementById('modules-container');
        if (!container) return;

        container.innerHTML = '';

        // Filter and Search logic
        const filtered = curriculum.filter(mod => {
            const stats = getModuleStats(mod);

            // Filter Pills
            if (activeFilter === 'pending' && stats.isCompleted) return false;
            if (activeFilter === 'completed' && !stats.isCompleted) return false;
            if (activeFilter === 'foundations' && !['01-python-ai', '02-mathematics', '03-machine-learning', '04-deep-learning'].includes(mod.id)) return false;
            if (activeFilter === 'llm' && !['05-transformers', '06-llm-engineering', '07-rag'].includes(mod.id)) return false;
            if (activeFilter === 'agentic' && !['08-ai-agents', '09-mcp', '10-evaluation'].includes(mod.id)) return false;
            if (activeFilter === 'production' && !['11-inference', '12-fine-tuning', '13-voice-ai', '14-ai-security', '15-system-design'].includes(mod.id)) return false;
            if (activeFilter === 'projects' && mod.id !== 'projects') return false;

            // Search Query Filter
            if (searchQuery.trim() !== '') {
                const q = searchQuery.toLowerCase();
                const titleMatch = mod.title.toLowerCase().includes(q);
                const descMatch = mod.summary.toLowerCase().includes(q);
                const skillsMatch = mod.skills && mod.skills.some(s => s.toLowerCase().includes(q));
                const videosMatch = mod.videos && mod.videos.some(v => 
                    v.title.toLowerCase().includes(q) || 
                    v.instructor.toLowerCase().includes(q) ||
                    v.description.toLowerCase().includes(q)
                );
                const projMatch = mod.project && (
                    mod.project.title.toLowerCase().includes(q) ||
                    mod.project.summary.toLowerCase().includes(q)
                );
                return titleMatch || descMatch || skillsMatch || videosMatch || projMatch;
            }

            return true;
        });

        if (filtered.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 3rem 1rem; color: var(--text-dim); font-family: var(--font-mono);">
                    <i class="fa-solid fa-magnifying-glass" style="font-size: 2rem; margin-bottom: 1rem; color: var(--border-accent);"></i>
                    <p>No modules match your current search and filter criteria.</p>
                </div>
            `;
            return;
        }

        filtered.forEach(mod => {
            const stats = getModuleStats(mod);
            const isExpanded = !!expandedState[mod.id];

            const card = document.createElement('div');
            card.className = `module-card ${stats.isCompleted ? 'completed' : ''} ${isExpanded ? 'expanded' : ''}`;
            card.id = `card-${mod.id}`;

            // Header HTML
            let headerHTML = `
                <div class="module-header" data-mod-id="${mod.id}">
                    <div class="module-meta-left">
                        <div class="module-num">${mod.number}</div>
                        <div class="module-titles">
                            <div class="module-title-row">
                                <h3 class="module-name">${mod.title}</h3>
                                <span class="module-badge">${mod.badge}</span>
                            </div>
                            <p class="module-desc">${mod.summary}</p>
                        </div>
                    </div>
                    <div class="module-meta-right">
                        <div class="module-stat-pill">
                            <i class="fa-regular fa-clock"></i> ${mod.hours}h
                        </div>
                        <div class="module-stat-pill">
                            <i class="fa-solid fa-list-check"></i> ${stats.completed}/${stats.total}
                        </div>
                        <div class="module-micro-progress">
                            <div class="module-micro-fill" style="width: ${stats.percentage}%"></div>
                        </div>
                        <i class="fa-solid fa-chevron-down module-chevron"></i>
                    </div>
                </div>
            `;

            // Skills Badges HTML
            let skillsHTML = '<div class="skills-tags-row">';
            if (mod.skills) {
                mod.skills.forEach(s => {
                    skillsHTML += `<span class="skill-tag">${s}</span>`;
                });
            }
            skillsHTML += '</div>';

            // Chapter Mini-Project HTML
            let projectHTML = '';
            if (mod.project) {
                const proj = mod.project;
                let deliverablesHTML = '';
                proj.deliverables.forEach((del, delIdx) => {
                    const delKey = `proj-${mod.id}-${delIdx}`;
                    const isChecked = !!checkpointsState[delKey];
                    deliverablesHTML += `
                        <label class="project-deliverable-item ${isChecked ? 'checked' : ''}" data-key="${delKey}">
                            <input type="checkbox" class="checkpoint-checkbox" data-key="${delKey}" ${isChecked ? 'checked' : ''}>
                            <span class="checkpoint-label">${del}</span>
                        </label>
                    `;
                });

                projectHTML = `
                    <div class="module-project-card">
                        <div class="project-card-header">
                            <span class="project-tag"><i class="fa-solid fa-hammer"></i> ${mod.id === 'projects' ? 'CAPSTONE SPECIFICATION' : 'CHAPTER MINI-PROJECT'}</span>
                            <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--accent-ice);">Mandatory Verification</span>
                        </div>
                        <h4 class="project-title">${proj.title}</h4>
                        <p class="project-summary">${proj.summary}</p>
                        <div class="project-deliverables-box">
                            <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px;">Deliverables & Criteria</span>
                            ${deliverablesHTML}
                        </div>
                    </div>
                `;
            }

            // Video Cards HTML
            let videosHTML = '<div class="videos-grid">';
            if (mod.videos) {
                mod.videos.forEach((vid, vidIdx) => {
                    let checkpointsHTML = '';
                    if (vid.checkpoints) {
                        vid.checkpoints.forEach((cp, cpIdx) => {
                            const cpKey = `cp-${vid.id}-${cpIdx}`;
                            const isChecked = !!checkpointsState[cpKey];
                            checkpointsHTML += `
                                <label class="checkpoint-item ${isChecked ? 'checked' : ''}" data-key="${cpKey}">
                                    <input type="checkbox" class="checkpoint-checkbox" data-key="${cpKey}" ${isChecked ? 'checked' : ''}>
                                    <span class="checkpoint-label">${cp}</span>
                                </label>
                            `;
                        });
                    }

                    videosHTML += `
                        <div class="video-card">
                            <div class="video-card-header">
                                <div class="video-title-col">
                                    <h4 class="video-title">${vidIdx + 1}. ${vid.title}</h4>
                                    <div class="video-author-row">
                                        <span><i class="fa-solid fa-user-tie"></i> <span class="video-author">${vid.instructor}</span> (${vid.channel})</span>
                                        <span class="video-duration"><i class="fa-regular fa-clock"></i> ${vid.duration}</span>
                                    </div>
                                </div>
                                <div class="video-action-buttons">
                                    <button class="btn-play-video" data-title="${vid.title}" data-yt="${vid.youtube_id}" data-author="${vid.instructor}">
                                        <i class="fa-solid fa-play"></i> Watch Lecture
                                    </button>
                                </div>
                            </div>
                            <p class="video-description">${vid.description}</p>
                            <div class="checkpoints-list">
                                <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 2px;">Core Mastery Checkpoints</span>
                                ${checkpointsHTML}
                            </div>
                        </div>
                    `;
                });
            }
            videosHTML += '</div>';

            // Assemble Body
            const bodyHTML = `
                <div class="module-body">
                    ${skillsHTML}
                    ${projectHTML}
                    ${videosHTML}
                </div>
            `;

            card.innerHTML = headerHTML + bodyHTML;
            container.appendChild(card);
        });

        attachEventListeners(curriculum);
    }

    // Attach Interactive Event Listeners
    function attachEventListeners(curriculum) {
        // Toggle Module Expand/Collapse
        document.querySelectorAll('.module-header').forEach(header => {
            header.addEventListener('click', (e) => {
                const modId = header.getAttribute('data-mod-id');
                const card = document.getElementById(`card-${modId}`);
                if (!card) return;

                const willExpand = !card.classList.contains('expanded');
                card.classList.toggle('expanded', willExpand);
                expandedState[modId] = willExpand;
                saveExpandedState();
            });
        });

        // Checkbox State Change
        document.querySelectorAll('.checkpoint-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                const key = checkbox.getAttribute('data-key');
                const isChecked = checkbox.checked;
                checkpointsState[key] = isChecked;

                // Toggle visual label styling
                const parent = checkbox.closest('label');
                if (parent) {
                    parent.classList.toggle('checked', isChecked);
                }

                saveCheckpointsState();
                renderGlobalStats(curriculum);

                // Update micro progress in current module header
                const card = checkbox.closest('.module-card');
                if (card) {
                    const modId = card.id.replace('card-', '');
                    const mod = curriculum.find(m => m.id === modId);
                    if (mod) {
                        const stats = getModuleStats(mod);
                        const microFill = card.querySelector('.module-micro-fill');
                        if (microFill) microFill.style.width = `${stats.percentage}%`;

                        const statPills = card.querySelectorAll('.module-stat-pill');
                        if (statPills.length > 1) {
                            statPills[1].innerHTML = `<i class="fa-solid fa-list-check"></i> ${stats.completed}/${stats.total}`;
                        }

                        card.classList.toggle('completed', stats.isCompleted);
                    }
                }
            });
        });

        // Watch Lecture Button (Opens Modal)
        document.querySelectorAll('.btn-play-video').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const title = btn.getAttribute('data-title');
                const ytId = btn.getAttribute('data-yt');
                const author = btn.getAttribute('data-author');
                openVideoModal(title, ytId, author);
            });
        });
    }

    // Initialize Global App
    function initApp() {
        loadState();

        const curriculum = window.CURRICULUM || [];
        if (curriculum.length === 0) {
            console.error('Curriculum data not found on window.CURRICULUM');
            return;
        }

        renderGlobalStats(curriculum);
        renderModules(curriculum);

        // Filter Pills Click
        document.querySelectorAll('.filter-pill').forEach(pill => {
            pill.addEventListener('click', () => {
                document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                activeFilter = pill.getAttribute('data-filter') || 'all';
                renderModules(curriculum);
            });
        });

        // Search Input Handling
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                searchQuery = e.target.value;
                renderModules(curriculum);
            });
        }

        // Expand All / Collapse All Controls
        const btnExpandAll = document.getElementById('btn-expand-all');
        if (btnExpandAll) {
            btnExpandAll.addEventListener('click', () => {
                curriculum.forEach(m => { expandedState[m.id] = true; });
                saveExpandedState();
                renderModules(curriculum);
            });
        }

        const btnCollapseAll = document.getElementById('btn-collapse-all');
        if (btnCollapseAll) {
            btnCollapseAll.addEventListener('click', () => {
                expandedState = {};
                saveExpandedState();
                renderModules(curriculum);
            });
        }

        // Reset Progress Action
        const btnReset = document.getElementById('btn-reset-progress');
        if (btnReset) {
            btnReset.addEventListener('click', () => {
                if (confirm('Are you sure you want to reset all tracked checkpoints? This action cannot be undone.')) {
                    checkpointsState = {};
                    saveCheckpointsState();
                    renderGlobalStats(curriculum);
                    renderModules(curriculum);
                }
            });
        }

        // Export Progress JSON Action
        const btnExport = document.getElementById('btn-export-progress');
        if (btnExport) {
            btnExport.addEventListener('click', () => {
                const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(checkpointsState, null, 2));
                const downloadAnchor = document.createElement('a');
                downloadAnchor.setAttribute("href", dataStr);
                downloadAnchor.setAttribute("download", "applied_ai_engineering_progress.json");
                document.body.appendChild(downloadAnchor);
                downloadAnchor.click();
                downloadAnchor.remove();
            });
        }

        // Import Progress JSON Action
        const importFileInput = document.getElementById('import-file-input');
        const btnImport = document.getElementById('btn-import-progress');
        if (btnImport && importFileInput) {
            btnImport.addEventListener('click', () => {
                importFileInput.click();
            });

            importFileInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (!file) return;

                const reader = new FileReader();
                reader.onload = (event) => {
                    try {
                        const imported = JSON.parse(event.target.result);
                        if (typeof imported === 'object' && imported !== null) {
                            checkpointsState = imported;
                            saveCheckpointsState();
                            renderGlobalStats(curriculum);
                            renderModules(curriculum);
                            alert('Progress restored successfully from file!');
                        }
                    } catch (err) {
                        alert('Error parsing uploaded JSON progress file.');
                    }
                };
                reader.readAsText(file);
            });
        }

        // Modal Close Button & Backdrop Click
        const modalCloseBtn = document.getElementById('modal-close-btn');
        if (modalCloseBtn) {
            modalCloseBtn.addEventListener('click', closeVideoModal);
        }

        const videoModal = document.getElementById('video-modal');
        if (videoModal) {
            videoModal.addEventListener('click', (e) => {
                if (e.target === videoModal) closeVideoModal();
            });
        }

        // Escape Key Closes Modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeVideoModal();
        });
    }

    // Run on DOM Ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initApp);
    } else {
        initApp();
    }

})();
