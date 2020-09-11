/**
 * Leetcode: 743. Network Delay Time
 *
 * Time: O(n^n + e^e)
 * Space: O(n + e)
 */
const dfs = (graph, dist, node, count) => {
    if (count >= dist.get(node)) return;
    dist.set(node, count);
    if (graph.has(node)) {
        for (const edge of graph.get(node)) {
            dfs(graph, dist, edge[1], count + edge[0]);
        }
    }
};
const networkDelayTime = (times, N, K) => {
    const graph = new Map();
    for (let i = 0; i < times.length; i++) {
        const source = times[i][0];
        const edges = graph.get(source) || [];
        edges.push([times[i][2], times[i][1]]);
        graph.set(source, edges);
    }
    const dist = new Map();
    for (let n = 1; n <= N; n++){
        dist.set(n, Infinity);
    }
    dfs(graph, dist, K, 0);
    let ans = 0;
    for (const val of dist.values()) {
        if (val === Infinity) return -1;
        ans = Math.max(ans, val);
    }
    return ans;
};

export default networkDelayTime;


