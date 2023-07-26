/**
 * Topological Sort Pseudocode
 * 
 * funciton topSort(graph)
 *  N = graph.numberOfNode() 
 *  V = [false, ...,false] # Length of N
 *  ordering = [0,...0] # Lenght of N
 *  i = N - 1 # Index for ordering array
 * 
 *  for (at = 0; at < N; at++):
 *      if V[at] == false:
 *          i = dfs(i, at, V, ordering, graph)
 *  return ordering
 * 
 * 
 * function dfs(i, at, V, ordering, graph):
 *  V[at] = true
 * 
 *  edges = graph.getEdgesOutFromNode(at)
 *  for edge in edges:
 *      if V[edge.to] == false:
 *          i = dfs(i, edge.to, V, ordering, graph)
        ordering[i] = at
        return i - 1
 * 
 * 
 */


