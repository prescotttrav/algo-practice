/*
 * @param {Object} dist
 * @param {Object} visited
 * @return {string}
 */
const getSmallest = (dist, visited) => {
  let min = [Infinity, null];
  for (const [node, d] of dist.entries()) {
    if (d < min[0] && !visited.has(node))
      min = [d, node];
  }
  return min[1];
};
/**
 * @param {number[][]} map
 * @return {Object}
 */
const buildGraph = (map) => {
  const graph = new Map();
  const distance = new Map();
  for (let i = 0; i < map.length; i++) {
    const [n1, n2, d] = map[i];
    const edges1 = graph.get(n1) || [];
    const edges2 = graph.get(n2) || [];
    edges1.push([n2, d]);
    edges2.push([n1, d]);
    graph.set(n1, edges1);
    graph.set(n2, edges2);
    if (!distance.has(n1)) distance.set(n1, Infinity);
    if (!distance.has(n2)) distance.set(n2, Infinity);
  }
  return [graph, distance];
};
/**
 * @param {number[][]} map
 * @param {number} N
 * @param {string} start
 * @return {Object}
 */
const determinePath = (map, N, start) => {
  const path = new Map();
  const visited = new Set();
  const [graph, distance] = buildGraph(map);
  distance.set(start, 0);
  path.set(start, null);
  while (visited.size !== N) {
    const node = getSmallest(distance, visited);
    const d = distance.get(node);
    for (const [child, dist] of graph.get(node)) {
      if (!visited.has(child)) {
        if (d + dist < distance.get(child)) {
          distance.set(child, d + dist);
          path.set(child, node);
        }
      }
    }
    visited.add(node);
  }
  return distance;
};

export default determinePath;

