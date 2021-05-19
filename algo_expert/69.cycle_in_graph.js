// time o(v + e) | space o(v)

function cycleInGraph(edges) {
  let table = new Array(edges.length).fill("U");
	
	for(let node = 0; node < edges.length; node++) { 
		if(table[node] !== "U") continue;
		
		let hasCycle = dfs(node, edges, table); 
		if(hasCycle) return true;
	}
	return false;
}

const dfs = (node, edges, table) => {
	table[node] = "V";
	
	for(const edge of edges[node]) {  
		if(table[edge] === "V") return true;
		if(table[edge] === "D") continue;
		let result = dfs(edge, edges, table); 
		if(result) return true;
	}
	
	table[node] = "D";
	return false;

}
