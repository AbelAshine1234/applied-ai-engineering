/**
 * Applied AI Engineering — Master Course & 55-Module Production Tracker
 * Complete 16 Phases | 55 Modules | 9-Step Learning Contract | 4 Portfolio Capstones
 */

(function () {
    'use strict';

    const STORAGE_KEY_CHECKPOINTS = 'applied_ai_55_checkpoints_v1';
    const STORAGE_KEY_EXPANDED = 'applied_ai_55_expanded_v1';
    const STORAGE_KEY_MODULES_DONE = 'applied_ai_55_modules_done_v1';

    let checkpointsState = {};
    let modulesDoneState = {};
    let expandedState = {};
    let activeFilter = 'all';
    let searchQuery = '';

    function loadState() {
        try {
            const rawCp = localStorage.getItem(STORAGE_KEY_CHECKPOINTS);
            if (rawCp) checkpointsState = JSON.parse(rawCp);
        } catch (e) { checkpointsState = {}; }

        try {
            const rawDone = localStorage.getItem(STORAGE_KEY_MODULES_DONE);
            if (rawDone) modulesDoneState = JSON.parse(rawDone);
        } catch (e) { modulesDoneState = {}; }

        try {
            const rawExp = localStorage.getItem(STORAGE_KEY_EXPANDED);
            if (rawExp) {
                expandedState = JSON.parse(rawExp);
            } else {
                expandedState = { '01-advanced-python': true };
            }
        } catch (e) {
            expandedState = { '01-advanced-python': true };
        }
    }

    function saveState() {
        try {
            localStorage.setItem(STORAGE_KEY_CHECKPOINTS, JSON.stringify(checkpointsState));
            localStorage.setItem(STORAGE_KEY_MODULES_DONE, JSON.stringify(modulesDoneState));
            localStorage.setItem(STORAGE_KEY_EXPANDED, JSON.stringify(expandedState));
        } catch (e) {}
    }

    // Helper: Module Statistics
    function getModuleStats(mod) {
        let total = 9; // 9 learning contract steps
        let completed = 0;

        for (let i = 1; i <= 9; i++) {
            const key = `mod-${mod.num}-step-${i}`;
            if (checkpointsState[key]) completed++;
        }

        // Also check if manually toggled done
        const isManuallyDone = !!modulesDoneState[`mod-${mod.num}`];
        if (isManuallyDone) completed = total;

        const percentage = Math.round((completed / total) * 100);
        const isCompleted = completed === total;

        return { total, completed, percentage, isCompleted };
    }

    // Helper: Phase Statistics
    function getPhaseStats(phase) {
        let totalMods = phase.modules.length;
        let completedMods = 0;

        phase.modules.forEach(m => {
            const s = getModuleStats(m);
            if (s.isCompleted) completedMods++;
        });

        const percentage = totalMods > 0 ? Math.round((completedMods / totalMods) * 100) : 0;
        const isCompleted = completedMods === totalMods;

        return { totalMods, completedMods, percentage, isCompleted };
    }

    // Helper: Global Statistics
    function getGlobalStats(data) {
        let totalModules = 55;
        let completedModules = 0;
        let completedPhases = 0;
        let totalHours = 0;
        let earnedHours = 0;

        data.phases.forEach(phase => {
            const pStats = getPhaseStats(phase);
            if (pStats.isCompleted) completedPhases++;

            phase.modules.forEach(m => {
                totalHours += m.hours || 0;
                const mStats = getModuleStats(m);
                if (mStats.isCompleted) completedModules++;
                earnedHours += Math.round((m.hours || 0) * (mStats.percentage / 100));
            });
        });

        const overallPercentage = Math.round((completedModules / totalModules) * 100);

        return {
            totalModules,
            completedModules,
            completedPhases,
            totalPhases: data.phases.length,
            totalHours,
            earnedHours,
            overallPercentage
        };
    }

    function renderGlobalStats(data) {
        const stats = getGlobalStats(data);

        const elMasterProg = document.getElementById('stat-total-progress');
        if (elMasterProg) elMasterProg.textContent = `${stats.overallPercentage}%`;

        const elCourseProg = document.getElementById('stat-course-progress');
        if (elCourseProg) elCourseProg.textContent = `${stats.completedModules} / ${stats.totalModules}`;

        const elPhases = document.getElementById('stat-phases-completed');
        if (elPhases) elPhases.textContent = `${stats.completedPhases} / ${stats.totalPhases}`;

        const elHours = document.getElementById('stat-hours');
        if (elHours) elHours.textContent = `${stats.earnedHours}h / ${stats.totalHours}h`;

        const progressBar = document.getElementById('master-progress-fill');
        if (progressBar) progressBar.style.width = `${stats.overallPercentage}%`;

        const progressText = document.getElementById('master-progress-percentage');
        if (progressText) progressText.textContent = `${stats.completedModules} of 55 Modules Completed (${stats.overallPercentage}%)`;

        // Update Phase Quick-Tiles
        data.phases.forEach(phase => {
            const pStats = getPhaseStats(phase);
            const tile = document.getElementById(`quick-tile-${phase.phase_id}`);
            if (tile) {
                tile.className = `phase-quick-tile ${pStats.isCompleted ? 'completed' : ''}`;
                const countSpan = tile.querySelector('.quick-tile-count');
                if (countSpan) countSpan.textContent = `${pStats.completedMods}/${pStats.totalMods}`;
            }
        });
    }

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

    function renderCurriculum(data) {
        const container = document.getElementById('modules-container');
        if (!container) return;

        container.innerHTML = '';

        // If Portfolio Projects tab selected
        if (activeFilter === 'portfolio-projects') {
            renderPortfolioProjectsSection(data.portfolio_projects, container);
            attachEventListeners(data);
            return;
        }

        let renderedAny = false;

        data.phases.forEach(phase => {
            // Filter logic
            if (activeFilter === 'high-priority' && !phase.priority.includes('CRITICAL') && !phase.priority.includes('HIGH')) {
                return;
            }

            if (activeFilter.startsWith('phase-') && activeFilter !== phase.phase_id) {
                return;
            }

            // Filter modules
            const filteredModules = phase.modules.filter(mod => {
                const mStats = getModuleStats(mod);

                if (activeFilter === 'pending' && mStats.isCompleted) return false;
                if (activeFilter === 'completed' && !mStats.isCompleted) return false;

                if (searchQuery.trim() !== '') {
                    const q = searchQuery.toLowerCase();
                    const titleMatch = mod.title.toLowerCase().includes(q);
                    const taskMatch = mod.tasks.toLowerCase().includes(q);
                    const delivMatch = mod.deliverable.toLowerCase().includes(q);
                    const vidMatch = mod.videos && mod.videos.some(v => v.title.toLowerCase().includes(q) || v.instructor.toLowerCase().includes(q));
                    return titleMatch || taskMatch || delivMatch || vidMatch;
                }

                return true;
            });

            if (filteredModules.length === 0) return;

            renderedAny = true;
            const pStats = getPhaseStats(phase);

            const phaseSection = document.createElement('div');
            phaseSection.className = 'phase-section';
            phaseSection.id = `section-${phase.phase_id}`;

            // Phase Banner HTML
            let phaseBannerHTML = `
                <div class="phase-banner">
                    <div class="phase-banner-left">
                        <span class="phase-badge"><i class="${phase.icon}"></i> PHASE ${phase.phase_num}</span>
                        <h2 class="phase-title">${phase.title}</h2>
                        <span class="phase-priority-tag ${phase.priority.includes('CRITICAL') ? 'critical' : ''}">${phase.priority}</span>
                    </div>
                    <div class="phase-banner-right">
                        <div class="phase-stat-text">
                            <span><i class="fa-solid fa-cubes"></i> ${pStats.completedMods} / ${pStats.totalMods} Modules</span>
                            <span><i class="fa-solid fa-chart-line"></i> ${pStats.percentage}%</span>
                        </div>
                        <div class="phase-progress-bar">
                            <div class="phase-progress-fill" style="width: ${pStats.percentage}%"></div>
                        </div>
                    </div>
                </div>
            `;

            // Modules List HTML
            let modulesListHTML = '<div class="phase-modules-list">';

            filteredModules.forEach(mod => {
                const mStats = getModuleStats(mod);
                const isExpanded = !!expandedState[mod.folder];

                // Header
                let modHeaderHTML = `
                    <div class="module-header" data-folder="${mod.folder}">
                        <div class="module-meta-left">
                            <div class="module-num">${mod.num}</div>
                            <div class="module-titles">
                                <div class="module-title-row">
                                    <h3 class="module-name">${mod.title}</h3>
                                    <span class="module-deliverable-badge"><i class="fa-solid fa-box-archive"></i> ${mod.deliverable}</span>
                                </div>
                                <p class="module-desc">${mod.tasks}</p>
                            </div>
                        </div>
                        <div class="module-meta-right">
                            <div class="module-stat-pill">
                                <i class="fa-regular fa-clock"></i> ${mod.hours}h
                            </div>
                            <div class="module-stat-pill">
                                <i class="fa-solid fa-list-check"></i> ${mStats.completed}/${mStats.total}
                            </div>
                            <div class="module-micro-progress">
                                <div class="module-micro-fill" style="width: ${mStats.percentage}%"></div>
                            </div>
                            <label class="module-toggle-complete-pill ${mStats.isCompleted ? 'checked' : ''}" data-mod-num="${mod.num}" title="Mark entire module completed">
                                <input type="checkbox" class="module-master-checkbox" data-mod-num="${mod.num}" ${mStats.isCompleted ? 'checked' : ''}>
                                <span>${mStats.isCompleted ? 'Passed' : 'Mark Done'}</span>
                            </label>
                            <i class="fa-solid fa-chevron-down module-chevron"></i>
                        </div>
                    </div>
                `;

                // 9-Step Learning Contract Checklist HTML
                let contractHTML = `
                    <div class="learning-contract-box">
                        <div class="contract-header">
                            <span class="contract-title"><i class="fa-solid fa-file-signature"></i> 9-Step Learning Contract</span>
                            <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--accent-ice);">All 9 Required to Pass</span>
                        </div>
                        <div class="contract-grid">
                `;

                data.learning_contract.forEach((step, sIdx) => {
                    const stepNum = sIdx + 1;
                    const key = `mod-${mod.num}-step-${stepNum}`;
                    const isChecked = !!checkpointsState[key] || mStats.isCompleted;

                    let stepDetail = step.desc;
                    if (stepNum === 3) stepDetail = mod.tasks;
                    if (stepNum === 4) stepDetail = `Build '${mod.deliverable}'`;

                    contractHTML += `
                        <label class="contract-item ${isChecked ? 'checked' : ''}" data-key="${key}">
                            <input type="checkbox" class="checkpoint-checkbox" data-key="${key}" data-mod-num="${mod.num}" ${isChecked ? 'checked' : ''}>
                            <div class="contract-item-text">
                                <span class="contract-step-name">${step.title}</span>
                                <span class="contract-step-desc">${stepDetail}</span>
                            </div>
                        </label>
                    `;
                });

                contractHTML += `</div></div>`;

                // Video Lectures HTML
                let videosHTML = '';
                if (mod.videos && mod.videos.length > 0) {
                    videosHTML = `
                        <div class="module-videos-box">
                            <span class="section-sub-title"><i class="fa-brands fa-youtube" style="color: #f43f5e;"></i> Recommended Video Lectures</span>
                            <div class="videos-grid">
                    `;
                    mod.videos.forEach(v => {
                        videosHTML += `
                            <div class="video-card">
                                <div class="video-card-header">
                                    <div class="video-title-col">
                                        <h4 class="video-title">${v.title}</h4>
                                        <div class="video-author-row">
                                            <span><i class="fa-solid fa-user-tie"></i> <span class="video-author">${v.instructor}</span> (${v.channel})</span>
                                            <span class="video-duration"><i class="fa-regular fa-clock"></i> ${v.duration}</span>
                                        </div>
                                    </div>
                                    <div class="video-action-buttons">
                                        <button class="btn-play-video" data-title="${v.title}" data-yt="${v.youtube_id}" data-author="${v.instructor}">
                                            <i class="fa-solid fa-play"></i> Watch
                                        </button>
                                    </div>
                                </div>
                            </div>
                        `;
                    });
                    videosHTML += `</div></div>`;
                }

                // Claude Code Review Prompt HTML
                const claudePromptText = `Please review my implementation of Module ${mod.num} (${mod.title}) for the Applied AI Engineering Master Track.\nDeliverable: ${mod.deliverable}\nTasks Covered: ${mod.tasks}\n\nReview criteria:\n1. Architectural soundness: Is this designed for production scale, low latency, and maintainability?\n2. Edge case resilience: Are timeouts, error boundaries, and null cases cleanly handled?\n3. Code quality: Idiomatic Python/AI patterns, strict typing, zero mock shortcuts.\n4. Test coverage: Are unit tests comprehensive with realistic assertions?`;

                let promptHTML = `
                    <div class="claude-prompt-box">
                        <div class="claude-prompt-header">
                            <span><i class="fa-solid fa-robot" style="color: var(--accent-ice);"></i> Claude Code Review Prompt</span>
                            <button class="btn-copy-prompt btn btn-secondary btn-sm" data-prompt="${encodeURIComponent(claudePromptText)}">
                                <i class="fa-regular fa-copy"></i> Copy Prompt
                            </button>
                        </div>
                        <pre class="claude-prompt-code">${claudePromptText}</pre>
                    </div>
                `;

                // Module Action Links (to folder README on GitHub)
                let linksHTML = `
                    <div class="module-footer-links">
                        <a href="https://github.com/AbelAshine1234/applied-ai-engineering/tree/main/${mod.folder}" target="_blank" class="module-link-btn">
                            <i class="fa-solid fa-folder-open"></i> Open ${mod.folder}/ on GitHub
                        </a>
                    </div>
                `;

                // Assemble Card
                modulesListHTML += `
                    <div class="module-card ${mStats.isCompleted ? 'completed' : ''} ${isExpanded ? 'expanded' : ''}" id="card-${mod.folder}">
                        ${modHeaderHTML}
                        <div class="module-body">
                            ${contractHTML}
                            ${videosHTML}
                            ${promptHTML}
                            ${linksHTML}
                        </div>
                    </div>
                `;
            });

            modulesListHTML += '</div>';

            phaseSection.innerHTML = phaseBannerHTML + modulesListHTML;
            container.appendChild(phaseSection);
        });

        // Also append Portfolio Projects Section at bottom if viewing all
        if (activeFilter === 'all' && searchQuery.trim() === '') {
            renderPortfolioProjectsSection(data.portfolio_projects, container);
        }

        if (!renderedAny) {
            container.innerHTML = `
                <div style="text-align: center; padding: 4rem 1rem; color: var(--text-dim); font-family: var(--font-mono);">
                    <i class="fa-solid fa-magnifying-glass" style="font-size: 2.2rem; margin-bottom: 1rem; color: var(--border-accent);"></i>
                    <p>No modules match your current filter and search query.</p>
                </div>
            `;
        }

        attachEventListeners(data);
    }

    // Render Portfolio Projects Section
    function renderPortfolioProjectsSection(projects, container) {
        const sec = document.createElement('div');
        sec.className = 'portfolio-projects-master-section';
        sec.id = 'section-portfolio-projects';

        let cardsHTML = '';
        projects.forEach(p => {
            let featuresHTML = '';
            p.features.forEach((f, fIdx) => {
                const key = `proj-${p.id}-feat-${fIdx}`;
                const isChecked = !!checkpointsState[key];
                featuresHTML += `
                    <label class="project-deliverable-item ${isChecked ? 'checked' : ''}" data-key="${key}">
                        <input type="checkbox" class="checkpoint-checkbox" data-key="${key}" ${isChecked ? 'checked' : ''}>
                        <span class="checkpoint-label">${f}</span>
                    </label>
                `;
            });

            cardsHTML += `
                <div class="portfolio-project-card">
                    <div class="p-card-banner">
                        <span class="p-card-badge">${p.badge}</span>
                        <span class="p-card-modules">Combines Modules ${p.modules_combined}</span>
                    </div>
                    <h3 class="p-card-title">${p.title}</h3>
                    <div class="p-card-features">
                        ${featuresHTML}
                    </div>
                    <div class="p-card-actions">
                        <a href="${p.ref_link}" target="_blank" class="btn btn-secondary btn-sm">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i> Architecture Reference
                        </a>
                    </div>
                </div>
            `;
        });

        sec.innerHTML = `
            <div class="portfolio-master-header">
                <span class="status-text" style="color: var(--accent-amber);"><i class="fa-solid fa-award"></i> FOUR MAJOR PORTFOLIO CAPSTONES</span>
                <h2 style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--text-pure); margin-top: 0.5rem;">
                    Production AI Portfolio Projects
                </h2>
                <p style="color: var(--text-muted); font-size: 1rem; max-width: 820px; margin-top: 0.5rem; line-height: 1.6;">
                    These 4 major applications synthesize all 55 modules into comprehensive production systems. Instead of building isolated toys, you create end-to-end architectures demonstrative of senior applied engineering.
                </p>
            </div>
            <div class="portfolio-cards-grid">
                ${cardsHTML}
            </div>
        `;

        container.appendChild(sec);
    }

    function attachEventListeners(data) {
        // Toggle Module Accordion
        document.querySelectorAll('.module-header').forEach(h => {
            h.addEventListener('click', (e) => {
                if (e.target.closest('.module-toggle-complete-pill')) return;
                const folder = h.getAttribute('data-folder');
                const card = document.getElementById(`card-${folder}`);
                if (!card) return;

                const willExpand = !card.classList.contains('expanded');
                card.classList.toggle('expanded', willExpand);
                expandedState[folder] = willExpand;
                saveState();
            });
        });

        // Checkbox State Change (Individual Contract Steps)
        document.querySelectorAll('.checkpoint-checkbox').forEach(cb => {
            cb.addEventListener('change', () => {
                const key = cb.getAttribute('data-key');
                const isChecked = cb.checked;
                checkpointsState[key] = isChecked;

                const parent = cb.closest('label');
                if (parent) parent.classList.toggle('checked', isChecked);

                const modNum = cb.getAttribute('data-mod-num');
                if (modNum) {
                    // Check if all 9 steps checked
                    let allChecked = true;
                    for (let i = 1; i <= 9; i++) {
                        if (!checkpointsState[`mod-${modNum}-step-${i}`]) {
                            allChecked = false;
                            break;
                        }
                    }
                    modulesDoneState[`mod-${modNum}`] = allChecked;
                }

                saveState();
                renderGlobalStats(data);

                // Update card header stats
                const card = cb.closest('.module-card');
                if (card) {
                    const folder = card.id.replace('card-', '');
                    let targetMod = null;
                    data.phases.forEach(p => {
                        const m = p.modules.find(mod => mod.folder === folder);
                        if (m) targetMod = m;
                    });
                    if (targetMod) {
                        const mStats = getModuleStats(targetMod);
                        const microFill = card.querySelector('.module-micro-fill');
                        if (microFill) microFill.style.width = `${mStats.percentage}%`;

                        const statPills = card.querySelectorAll('.module-stat-pill');
                        if (statPills.length > 1) {
                            statPills[1].innerHTML = `<i class="fa-solid fa-list-check"></i> ${mStats.completed}/${mStats.total}`;
                        }

                        const togglePill = card.querySelector('.module-toggle-complete-pill');
                        if (togglePill) {
                            togglePill.classList.toggle('checked', mStats.isCompleted);
                            togglePill.querySelector('span').textContent = mStats.isCompleted ? 'Passed' : 'Mark Done';
                            togglePill.querySelector('input').checked = mStats.isCompleted;
                        }

                        card.classList.toggle('completed', mStats.isCompleted);
                    }
                }

                // Update phase progress bar
                const phaseSec = cb.closest('.phase-section');
                if (phaseSec) {
                    const phaseId = phaseSec.id.replace('section-', '');
                    const targetPhase = data.phases.find(p => p.phase_id === phaseId);
                    if (targetPhase) {
                        const pStats = getPhaseStats(targetPhase);
                        const pFill = phaseSec.querySelector('.phase-progress-fill');
                        if (pFill) pFill.style.width = `${pStats.percentage}%`;

                        const pTexts = phaseSec.querySelectorAll('.phase-stat-text span');
                        if (pTexts.length > 1) {
                            pTexts[0].innerHTML = `<i class="fa-solid fa-cubes"></i> ${pStats.completedMods} / ${pStats.totalMods} Modules`;
                            pTexts[1].innerHTML = `<i class="fa-solid fa-chart-line"></i> ${pStats.percentage}%`;
                        }
                    }
                }
            });
        });

        // Module Master Checkbox (Mark Entire Module Done / Undone)
        document.querySelectorAll('.module-master-checkbox').forEach(masterCb => {
            masterCb.addEventListener('change', (e) => {
                e.stopPropagation();
                const modNum = masterCb.getAttribute('data-mod-num');
                const isChecked = masterCb.checked;
                modulesDoneState[`mod-${modNum}`] = isChecked;

                // Toggle all 9 steps
                for (let i = 1; i <= 9; i++) {
                    checkpointsState[`mod-${modNum}-step-${i}`] = isChecked;
                }

                saveState();
                renderGlobalStats(data);
                renderCurriculum(data);
            });
        });

        // Video Modal Play Buttons
        document.querySelectorAll('.btn-play-video').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const title = btn.getAttribute('data-title');
                const ytId = btn.getAttribute('data-yt');
                const author = btn.getAttribute('data-author');
                openVideoModal(title, ytId, author);
            });
        });

        // Copy Claude Review Prompt
        document.querySelectorAll('.btn-copy-prompt').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const prompt = decodeURIComponent(btn.getAttribute('data-prompt'));
                navigator.clipboard.writeText(prompt).then(() => {
                    const orig = btn.innerHTML;
                    btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
                    setTimeout(() => { btn.innerHTML = orig; }, 2000);
                });
            });
        });
    }

    function initApp() {
        loadState();

        const data = window.MASTER_55;
        if (!data || !data.phases) {
            console.error('MASTER_55 data not found on window');
            return;
        }

        renderGlobalStats(data);
        renderCurriculum(data);

        // Filter Pills
        document.querySelectorAll('.filter-pill').forEach(pill => {
            pill.addEventListener('click', () => {
                document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                activeFilter = pill.getAttribute('data-filter') || 'all';
                renderCurriculum(data);
            });
        });

        // Phase Quick-Tiles Click
        document.querySelectorAll('.phase-quick-tile').forEach(tile => {
            tile.addEventListener('click', () => {
                const phaseId = tile.getAttribute('data-phase-id');
                // Activate corresponding filter pill
                document.querySelectorAll('.filter-pill').forEach(p => {
                    p.classList.toggle('active', p.getAttribute('data-filter') === phaseId);
                });
                activeFilter = phaseId;
                renderCurriculum(data);

                // Scroll to section
                const targetSec = document.getElementById(`section-${phaseId}`);
                if (targetSec) targetSec.scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Search Input
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                searchQuery = e.target.value;
                renderCurriculum(data);
            });
        }

        // Expand All / Collapse All
        const btnExpandAll = document.getElementById('btn-expand-all');
        if (btnExpandAll) {
            btnExpandAll.addEventListener('click', () => {
                data.phases.forEach(p => {
                    p.modules.forEach(m => { expandedState[m.folder] = true; });
                });
                saveState();
                renderCurriculum(data);
            });
        }

        const btnCollapseAll = document.getElementById('btn-collapse-all');
        if (btnCollapseAll) {
            btnCollapseAll.addEventListener('click', () => {
                expandedState = {};
                saveState();
                renderCurriculum(data);
            });
        }

        // Reset Progress Action
        const btnReset = document.getElementById('btn-reset-progress');
        if (btnReset) {
            btnReset.addEventListener('click', () => {
                if (confirm('Are you sure you want to reset all 55 module progress? This cannot be undone.')) {
                    checkpointsState = {};
                    modulesDoneState = {};
                    saveState();
                    renderGlobalStats(data);
                    renderCurriculum(data);
                }
            });
        }

        // Export Progress
        const btnExport = document.getElementById('btn-export-progress');
        if (btnExport) {
            btnExport.addEventListener('click', () => {
                const exportObj = {
                    checkpoints: checkpointsState,
                    modules_done: modulesDoneState,
                    exported_at: new Date().toISOString()
                };
                const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj, null, 2));
                const a = document.createElement('a');
                a.setAttribute("href", dataStr);
                a.setAttribute("download", "applied_ai_55_progress.json");
                document.body.appendChild(a);
                a.click();
                a.remove();
            });
        }

        // Import Progress
        const importInput = document.getElementById('import-file-input');
        const btnImport = document.getElementById('btn-import-progress');
        if (btnImport && importInput) {
            btnImport.addEventListener('click', () => { importInput.click(); });
            importInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = (event) => {
                    try {
                        const imported = JSON.parse(event.target.result);
                        if (imported && (imported.checkpoints || imported.modules_done)) {
                            checkpointsState = imported.checkpoints || {};
                            modulesDoneState = imported.modules_done || {};
                            saveState();
                            renderGlobalStats(data);
                            renderCurriculum(data);
                            alert('55-module progress successfully restored!');
                        }
                    } catch (err) {
                        alert('Error parsing uploaded progress file.');
                    }
                };
                reader.readAsText(file);
            });
        }

        // Modal Controls
        const modalCloseBtn = document.getElementById('modal-close-btn');
        if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeVideoModal);

        const videoModal = document.getElementById('video-modal');
        if (videoModal) {
            videoModal.addEventListener('click', (e) => {
                if (e.target === videoModal) closeVideoModal();
            });
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeVideoModal();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initApp);
    } else {
        initApp();
    }
})();
