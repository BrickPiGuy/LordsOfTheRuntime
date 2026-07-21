// Algorithm Data
const algorithms = [
    {
        number: 1,
        name: "Binary Search",
        concept: "Divide and Conquer",
        complexity: "O(log n)",
        complexityOrder: 1,
        description: "Binary search is one of the clearest demonstrations of how structure can dramatically improve performance. A linear search requires O(n), while binary search requires O(log n). It teaches how to eliminate large portions of a problem space through carefully chosen decisions.",
        application: "Searching sorted database indexes, finding faulty software releases with 'git bisect', determining minimum acceptable configuration, searching timestamps in system logs, finding capacity thresholds in cloud systems. For 1 billion sorted records, only ~30 comparisons are needed.",
        difficulty: "Beginner",
        category: "Search"
    },
    {
        number: 2,
        name: "Quicksort & Merge Sort",
        concept: "Sorting & Tradeoffs",
        complexity: "O(n log n) avg / O(n²) worst",
        complexityOrder: 2,
        description: "Students should understand that there is rarely one universally best algorithm. Quicksort has average time O(n log n) with worst-case O(n²), operates in-place, and is often fast in memory. Merge Sort guarantees O(n log n), is stable, and naturally supports external/distributed sorting. Algorithm selection depends on memory use, input distribution, and stability requirements.",
        application: "Sorting database query results, processing files larger than available memory, organizing telemetry and log data, merge operations in distributed data pipelines, sorting data across multiple machines.",
        difficulty: "Intermediate",
        category: "Sorting"
    },
    {
        number: 3,
        name: "Hashing",
        concept: "Near-Constant-Time Lookup",
        complexity: "O(1) average",
        complexityOrder: 0,
        description: "Hashing enables near-constant-time lookups through clever data distribution. Hash functions map keys to array indices, enabling O(1) average-case retrieval. Collision handling and load factors determine performance. Essential for understanding how modern systems achieve speed at scale.",
        application: "Caches, databases, password storage, blockchains, hash tables, distributed systems, deduplication, and cryptographic applications.",
        difficulty: "Intermediate",
        category: "Data Structures"
    },
    {
        number: 4,
        name: "BFS & DFS",
        concept: "Graph Traversal",
        complexity: "O(V + E)",
        complexityOrder: 3,
        description: "Breadth-First Search and Depth-First Search are fundamental graph traversal algorithms. BFS explores level-by-level from a source, useful for shortest paths in unweighted graphs. DFS explores deeply before backtracking, useful for topological sorting and connectivity. Both are O(V + E) where V is vertices and E is edges.",
        application: "Web crawling, dependency analysis, cybersecurity threat modeling, social network analysis, connected components, cycle detection, and topological sorting.",
        difficulty: "Intermediate",
        category: "Graphs"
    },
    {
        number: 5,
        name: "A* Search",
        concept: "Heuristic Graph Search",
        complexity: "O(b^d) with heuristic",
        complexityOrder: 3,
        description: "A* combines the benefits of Dijkstra's algorithm with heuristic-guided search. It uses f(n) = g(n) + h(n), where g(n) is the cost from start and h(n) is an estimated cost to goal. When the heuristic is admissible, A* finds optimal paths efficiently by exploring fewer nodes than uninformed searches.",
        application: "GPS and route planning, robotics navigation, game pathfinding and NPC movement, autonomous vehicle motion planning, puzzle solving, and real-time systems requiring optimized paths.",
        difficulty: "Advanced",
        category: "Search & Optimization"
    },
    {
        number: 6,
        name: "Union-Find",
        concept: "Dynamic Connectivity",
        complexity: "O(α(n)) amortized",
        complexityOrder: 0,
        description: "Union-Find (Disjoint Set Union) efficiently answers 'are two nodes connected?' and 'connect these two nodes' queries. With path compression and union by rank, operations approach O(1) amortized time. Essential for problems involving equivalence classes and component detection.",
        application: "Network connectivity, image segmentation, clustering algorithms, social network friend groups, detecting cycles in graphs, minimum spanning tree algorithms (Kruskal's), and percolation problems.",
        difficulty: "Intermediate",
        category: "Data Structures"
    },
    {
        number: 7,
        name: "Dynamic Programming",
        concept: "Reusing Overlapping Solutions",
        complexity: "O(states × transitions)",
        complexityOrder: 4,
        description: "Dynamic Programming solves problems by breaking them into overlapping subproblems and caching results. It combines memoization (top-down) or tabulation (bottom-up) to avoid redundant computation. Key: optimal substructure and overlapping subproblems. Transforms exponential algorithms into polynomial time.",
        application: "Sequence alignment (bioinformatics), compiler optimization, resource allocation and scheduling, knapsack problems, longest common subsequence, and cryptocurrency transaction optimization.",
        difficulty: "Advanced",
        category: "Optimization"
    },
    {
        number: 8,
        name: "PageRank",
        concept: "Iterative Graph Ranking",
        complexity: "O(iterations × E)",
        complexityOrder: 4,
        description: "PageRank models the web as a directed graph where nodes are pages and edges are links. It iteratively computes importance scores based on incoming links and their importance. The algorithm models random web surfing and converges to a steady-state distribution representing page importance.",
        application: "Search engine ranking, recommendation systems, influence analysis in social networks, citation networks, and biological network analysis.",
        difficulty: "Advanced",
        category: "Graphs & ML"
    },
    {
        number: 9,
        name: "Gradient Descent & Adam",
        concept: "Numerical Optimization",
        complexity: "O(iterations × params)",
        complexityOrder: 4,
        description: "Gradient Descent iteratively moves in the direction of steepest descent (negative gradient) to minimize a loss function. Adam combines adaptive learning rates with momentum, converging faster for many problems. Foundation for training neural networks and modern ML. Understanding learning rates, momentum, and convergence is critical.",
        application: "Machine learning model training, neural network optimization, deep learning, parameter tuning, and large-scale optimization problems in production systems.",
        difficulty: "Advanced",
        category: "Machine Learning"
    },
    {
        number: 10,
        name: "Scaled Dot-Product Attention",
        concept: "Relevance-Weighted Information Retrieval",
        complexity: "O(n²d) for sequence",
        complexityOrder: 5,
        description: "Attention mechanisms compute weighted sums of values based on query-key relevance. Scaled dot-product attention divides similarity scores by √d to stabilize gradients. Core component of transformer architectures. Enables models to focus on relevant information in sequences of arbitrary length.",
        application: "Transformers and large language models, machine translation, image recognition, time-series forecasting, and any sequence-to-sequence modeling task. Foundation for modern NLP breakthroughs.",
        difficulty: "Advanced",
        category: "Deep Learning"
    }
];

// Rich-card template content for all 10 algorithms
const richAlgorithmDetails = {
    1: {
        whatItSolves: 'Finds a target in large sorted data quickly, avoiding linear scans.',
        coreIdea: 'Check the middle value, discard half the search space, and repeat until found.',
        workedExample: 'In a sorted list of 1,000,000 versions, binary search finds the first bad release in about 20 checks.',
        whyNow: 'Powers fast incident triage in CI/CD, log timestamp lookups, and index-heavy backend services.',
        tradeoff: 'Very fast lookups, but only when data remains sorted or indexable.',
        avoidWhen: 'Avoid for unsorted streams or frequently mutating datasets without efficient re-indexing.',
        principles: ['Search Engines', 'Cloud Computing']
    },
    2: {
        whatItSolves: 'Sorts large datasets efficiently while balancing speed, memory, and stability needs.',
        coreIdea: 'Quicksort partitions in-place for speed; Merge Sort splits/merges for stable predictable performance.',
        workedExample: 'For 50GB of logs, external merge sort can process chunks in memory and merge outputs on disk.',
        whyNow: 'Critical for ETL pipelines, ranking feeds, and distributed batch systems where order impacts downstream logic.',
        tradeoff: 'Quicksort: lower memory footprint. Merge Sort: stable order and better for external/distributed workflows.',
        avoidWhen: 'Avoid quicksort worst-case inputs without safeguards; avoid merge sort when strict memory minimization is required.',
        principles: ['Cloud Computing', 'Recommendations']
    },
    3: {
        whatItSolves: 'Provides near-instant key lookups for massive datasets and high-throughput systems.',
        coreIdea: 'Transform each key with a hash function into an index, then manage collisions efficiently.',
        workedExample: 'A web API token cache can validate sessions in constant average time instead of scanning user records.',
        whyNow: 'Core to identity services, CDN caches, deduplication pipelines, and real-time backend performance.',
        tradeoff: 'Speed is excellent on average, but poor hashing or high load factors increase collisions and latency.',
        avoidWhen: 'Avoid for ordered-range queries where tree-based structures or sorted indexes are a better fit.',
        principles: ['Cybersecurity', 'Cloud Computing']
    },
    4: {
        whatItSolves: 'Traverses complex networks to discover reachability, dependencies, and shortest unweighted paths.',
        coreIdea: 'BFS explores layer-by-layer; DFS explores depth-first with backtracking to expose structure.',
        workedExample: 'In an incident graph, BFS can find the minimum hop path from a compromised host to critical services.',
        whyNow: 'Essential for threat modeling, dependency mapping, social graph analysis, and workflow orchestration.',
        tradeoff: 'BFS gives shortest unweighted paths but can use more memory; DFS is memory-leaner but not shortest-path focused.',
        avoidWhen: 'Avoid plain BFS/DFS for weighted shortest paths where Dijkstra or A* is more appropriate.',
        principles: ['Social Networks', 'Cybersecurity']
    },
    5: {
        whatItSolves: 'Finds high-quality paths quickly when exhaustive graph search would be too slow.',
        coreIdea: 'Use f(n) = g(n) + h(n) to blend true cost-so-far with heuristic estimate to the goal.',
        workedExample: 'A navigation engine prioritizes road segments likely to reach destination faster, reducing explored nodes.',
        whyNow: 'Used in GPS, robotics, games, and autonomous systems where latency and route quality both matter.',
        tradeoff: 'Excellent with good heuristics, but weak heuristics can degrade performance toward uninformed search.',
        avoidWhen: 'Avoid when no reliable heuristic exists; Dijkstra may be safer for guaranteed optimal weighted routes.',
        principles: ['GPS Navigation', 'Machine Learning']
    },
    6: {
        whatItSolves: 'Answers dynamic connectivity questions at scale with almost constant-time updates and checks.',
        coreIdea: 'Maintain disjoint sets with path compression and union by rank to flatten structures over time.',
        workedExample: 'As friendship edges stream in, union-find quickly determines whether two users are already connected.',
        whyNow: 'Powers clustering, real-time network monitoring, graph analytics, and large-scale connected component tracking.',
        tradeoff: 'Extremely fast union/connected queries, but does not directly provide actual path details between nodes.',
        avoidWhen: 'Avoid when you need weighted shortest paths or traversal order, where full graph algorithms are required.',
        principles: ['Social Networks', 'Cloud Computing']
    },
    7: {
        whatItSolves: 'Turns exponential combinatorial problems into tractable solutions via reuse of subproblem results.',
        coreIdea: 'Identify overlapping subproblems and optimal substructure, then memoize or tabulate results.',
        workedExample: 'A knapsack scheduler caches intermediate capacities to avoid recomputing thousands of identical states.',
        whyNow: 'Critical in optimization-heavy products such as pricing engines, recommendation ranking, and resource planning.',
        tradeoff: 'Great time savings, but state-space design can be complex and memory usage can grow quickly.',
        avoidWhen: 'Avoid when subproblems do not overlap or the state definition is too large to store effectively.',
        principles: ['Recommendations', 'Machine Learning']
    },
    8: {
        whatItSolves: 'Ranks nodes by influence in linked systems instead of relying on local signals alone.',
        coreIdea: 'Iteratively distribute score through incoming links until values converge to a stable ranking.',
        workedExample: 'A content platform can rank creators by network influence, not just raw follower count.',
        whyNow: 'Still foundational for ranking web content, feed relevance, citation impact, and trust propagation.',
        tradeoff: 'Captures global structure well, but requires iterative computation and careful damping/convergence tuning.',
        avoidWhen: 'Avoid for rapidly changing graphs when strict real-time ranking latency is required without approximation.',
        principles: ['Search Engines', 'Recommendations']
    },
    9: {
        whatItSolves: 'Optimizes millions of model parameters when closed-form solutions are infeasible.',
        coreIdea: 'Follow gradients to reduce loss, with Adam adapting step sizes and momentum per parameter.',
        workedExample: 'Training a fraud model updates weights batch-by-batch to reduce classification error over epochs.',
        whyNow: 'Drives modern AI model training in vision, NLP, forecasting, and production decision systems.',
        tradeoff: 'Flexible and scalable, but sensitive to learning rate schedules and can converge to suboptimal minima.',
        avoidWhen: 'Avoid as a default for tiny convex problems where exact solvers are simpler and more stable.',
        principles: ['Machine Learning', 'LLMs']
    },
    10: {
        whatItSolves: 'Lets models focus on the most relevant context tokens when processing long sequences.',
        coreIdea: 'Compute query-key similarity, scale by sqrt(d), and weight value vectors by attention scores.',
        workedExample: 'In translation, attention links pronouns to correct prior nouns across long sentence spans.',
        whyNow: 'Backbone of transformer systems powering assistants, code tools, search augmentation, and multimodal AI.',
        tradeoff: 'Captures rich long-range dependencies, but quadratic sequence cost can be expensive at large context sizes.',
        avoidWhen: 'Avoid full attention for extremely long sequences without sparse/windowed variants or memory optimizations.',
        principles: ['LLMs', 'Recommendations']
    }
};

// DOM Elements
const searchInput = document.getElementById('searchInput');
const algorithmsGrid = document.getElementById('algorithmsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');

// State
let currentFilter = 'all';
let searchQuery = '';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderAlgorithms();
    attachEventListeners();
});

// Event Listeners
function attachEventListeners() {
    searchInput.addEventListener('input', handleSearch);
    filterButtons.forEach(btn => {
        btn.addEventListener('click', handleFilter);
    });
    
    // Add click handlers to principle items
    document.querySelectorAll('.principle-item').forEach(item => {
        item.addEventListener('click', handlePrincipleClick);
    });
}

function handlePrincipleClick(e) {
    const principle = e.target.textContent.trim().toLowerCase();
    
    // Map principles to search keywords
    const principleMap = {
        'search engines': 'binary search pagerank ranking',
        'gps navigation': 'a* route navigation pathfinding',
        'cybersecurity': 'hashing security dfs connectivity',
        'cloud computing': 'merge sort distributed pipeline',
        'recommendations': 'pagerank recommendation ranking',
        'machine learning': 'gradient descent machine learning',
        'llms': 'attention transformer language models',
        'social networks': 'pagerank social network union-find'
    };
    
    const searchTerm = principleMap[principle] || principle;
    searchInput.value = searchTerm;
    searchQuery = searchTerm.toLowerCase();
    
    // Reset filter to 'all'
    currentFilter = 'all';
    filterButtons.forEach(btn => btn.classList.remove('active'));
    filterButtons[0].classList.add('active');
    
    renderAlgorithms();
    searchInput.focus();
}

// Search Handler
function handleSearch(e) {
    searchQuery = e.target.value.toLowerCase().trim();
    renderAlgorithms();
}

// Filter Handler
function handleFilter(e) {
    const filter = e.target.dataset.filter;
    currentFilter = filter;
    
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    renderAlgorithms();
}

// Render Algorithms
function renderAlgorithms() {
    algorithmsGrid.innerHTML = '';
    
    let filtered = algorithms;
    
    // Apply search filter
    if (searchQuery) {
        const tokens = searchQuery.split(/\s+/).filter(Boolean);

        filtered = filtered.filter(algo => {
            const searchableText = [
                algo.name,
                algo.concept,
                algo.description,
                algo.application,
                algo.category
            ].join(' ').toLowerCase();

            // Match if any token appears so principle shortcuts produce useful results.
            return tokens.some(token => searchableText.includes(token));
        });
    }
    
    // Apply category filter
    if (currentFilter === 'difficulty') {
        filtered.sort((a, b) => {
            const difficultyOrder = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3 };
            return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
        });
    } else if (currentFilter === 'application') {
        filtered.sort((a, b) => a.category.localeCompare(b.category));
    } else if (currentFilter === 'complexity') {
        filtered.sort((a, b) => a.complexityOrder - b.complexityOrder);
    }
    
    if (filtered.length === 0) {
        algorithmsGrid.innerHTML = '<div style="grid-column: 1/-1; padding: 2rem; text-align: center; color: var(--text-secondary);">No algorithms found. Try a different search or filter.</div>';
        return;
    }
    
    filtered.forEach((algo, index) => {
        const card = createAlgorithmCard(algo);
        algorithmsGrid.appendChild(card);
    });
}

function getTeaserText(algo, richDetails) {
    if (richDetails) {
        return richDetails.whatItSolves;
    }

    const firstSentence = algo.description.split('. ')[0];
    return firstSentence.endsWith('.') ? firstSentence : `${firstSentence}.`;
}

function buildRichDetailsMarkup(richDetails) {
    if (!richDetails) {
        return '';
    }

    return `
        <div class="card-rich card-expandable">
            <div class="rich-grid">
                <div class="rich-item">
                    <h4>Core Idea</h4>
                    <p>${richDetails.coreIdea}</p>
                </div>
                <div class="rich-item">
                    <h4>Worked Example</h4>
                    <p>${richDetails.workedExample}</p>
                </div>
                <div class="rich-item">
                    <h4>Why It Matters Now</h4>
                    <p>${richDetails.whyNow}</p>
                </div>
                <div class="rich-item">
                    <h4>Tradeoff</h4>
                    <p>${richDetails.tradeoff}</p>
                </div>
                <div class="rich-item rich-item-full">
                    <h4>When Not To Use</h4>
                    <p>${richDetails.avoidWhen}</p>
                </div>
            </div>
            <div class="principle-tags" aria-label="Connected guiding principles">
                ${richDetails.principles.map(tag => `<span class="principle-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
}

function setCardExpandedState(card, expandBtn, expandableSections, shouldExpand) {
    if (shouldExpand) {
        card.classList.add('expanded');
        expandableSections.forEach(section => section.classList.add('visible'));
        expandBtn.classList.add('expanded');
        expandBtn.textContent = 'Read Less';
        expandBtn.setAttribute('aria-expanded', 'true');
        expandBtn.setAttribute('aria-label', 'Collapse algorithm details');
        return;
    }

    card.classList.remove('expanded');
    expandableSections.forEach(section => section.classList.remove('visible'));
    expandBtn.classList.remove('expanded');
    expandBtn.textContent = 'Read More';
    expandBtn.setAttribute('aria-expanded', 'false');
    expandBtn.setAttribute('aria-label', 'Expand algorithm details');
}

function collapseOtherExpandedCards(currentCard) {
    document.querySelectorAll('.algorithm-card.expanded').forEach(openCard => {
        if (openCard === currentCard) {
            return;
        }

        const otherExpandBtn = openCard.querySelector('.expand-btn');
        const otherExpandableSections = openCard.querySelectorAll('.card-expandable');
        setCardExpandedState(openCard, otherExpandBtn, otherExpandableSections, false);
    });
}

// Create Algorithm Card
function createAlgorithmCard(algo) {
    const richDetails = richAlgorithmDetails[algo.number] || null;
    const teaserText = getTeaserText(algo, richDetails);

    const card = document.createElement('div');
    card.className = 'algorithm-card';
    card.innerHTML = `
        <div class="card-header">
            <div class="card-number">${algo.number}</div>
            <span class="card-complexity">${algo.complexity}</span>
        </div>
        <h3 class="card-title">${algo.name}</h3>
        <span class="card-concept">${algo.concept}</span>
        <p class="card-teaser">${teaserText}</p>
        <p class="card-description card-expandable">${algo.description}</p>
        <div class="card-application card-expandable">
            <h4>Modern Applications</h4>
            <p>${algo.application}</p>
        </div>
        ${buildRichDetailsMarkup(richDetails)}
        <button class="expand-btn visible" type="button" aria-expanded="false" aria-label="Expand algorithm details">Read More</button>
    `;
    
    const expandBtn = card.querySelector('.expand-btn');
    const expandableSections = card.querySelectorAll('.card-expandable');
    
    expandBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isExpanded = card.classList.contains('expanded');
        
        if (isExpanded) {
            setCardExpandedState(card, expandBtn, expandableSections, false);
        } else {
            collapseOtherExpandedCards(card);
            setCardExpandedState(card, expandBtn, expandableSections, true);
        }
    });
    
    // Add click-to-expand for the entire card
    card.addEventListener('click', () => {
        expandBtn.click();
    });
    
    return card;
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    // ESC to clear search
    if (e.key === 'Escape' && searchInput.value) {
        searchInput.value = '';
        searchQuery = '';
        renderAlgorithms();
        searchInput.blur();
    }
});

// Smooth scroll to top on page load
window.scrollTo(0, 0);
