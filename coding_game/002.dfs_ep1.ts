/*
Your virus has caused a backdoor to open on the Bobnet network enabling you to send new instructions in real time.
You decide to take action by stopping Bobnet from communicating on its own internal network.
Bobnet's network is divided into several smaller networks, in each sub-network is a Bobnet agent 
tasked with transferring information by moving from node to node along links and accessing gateways 
leading to other sub-networks. Your mission is to reprogram the virus so it will sever links in 
such a way that the Bobnet Agent is unable to access another sub-network thus preventing 
information concerning the presence of our virus to reach Bobnet's central hub.

Rules
For each test you are given:
A map of the network.
The position of the exit gateways.
The starting position of the Bobnet agent.
>>> Nodes can only be connected to up to a single gateway. <<<

Each game turn:
First off, you sever one of the given links in the network.
Then the Bobnet agent moves from one Node to another accessible Node.

Bobnet agent
Gateway
Victory Conditions
The Bobnet agent cannot reach an exit gateway
 
Lose Conditions
The Bobnet agent has reached a gateway
 	Example
4 4 1
0 1
0 2
1 3
2 3
3
Initialization input
 
Text representation of the network used in this example. There are 4 nodes, 4 links and 1 gateway. 
The next 4 lines describe the links. The last integer is the index of the exit node.

Turn 1:
The Bobnet agent starts at node 0 (SI = 0). Our virus cut the link between the nodes 1 and 3.
Turn 2:
The Bobnet agent moves to node 2 (SI = 2). Our virus cut the link between the nodes 2 and 3.
Turn 3:
The Bobnet agent has been cut off from the exit, you have won !

Note
The tests provided are similar to the validation tests used to compute the final score but remain different.

Game Input:
The program must first read the initialization data from standard input. Then, within an infinite 
loop, read the data from the standard input related to the current state of the Bobnet agent and 
provide to the standard output the next instruction.

Initialization input
Line 1: 3 integers N L E
- N, the total number of nodes in the level, including the gateways.
- L, the number of links in the level.
- E, the number of exit gateways in the level.

Next L lines: 2 integers per line (N1, N2), indicating a link between the nodes indexed N1 and 
N2 in the network.

Next E lines: 1 integer EI representing the index of a gateway node.

Input for one game turn
Line 1: 1 integer SI, which is the index of the node on which the Bobnet agent is positioned this 
turn.
Output for one game turn
A single line comprised of two integers C1 and C2 separated by a space. C1 and C2 are the indices 
of the nodes you wish to sever the link between.
Constraints
2 ≤ N ≤ 500
1 ≤ L ≤ 1000
1 ≤ E ≤ 20
0 ≤ N1, N2 < N
0 ≤ SI < N
0 ≤ C1, C2 < N
Response time per turn ≤ 150ms
*/

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs: string[] = readline().split(' ');
const N: number = parseInt(inputs[0]); // the total number of nodes in the level, including the gateways
const L: number = parseInt(inputs[1]); // the number of links
const E: number = parseInt(inputs[2]); // the number of exit gateways
const nodes = []
for (let i = 0; i < L; i++) {
    var inputs: string[] = readline().split(' ');
    const N1: number = parseInt(inputs[0]); // N1 and N2 defines a link between these nodes
    const N2: number = parseInt(inputs[1]);
    nodes.push([N1, N2])
}
const gatewayNodes = new Set<number>();
for (let i = 0; i < E; i++) {
    const EI: number = parseInt(readline()); // the index of a gateway node
    gatewayNodes.add(EI);
}
interface Graph {
    [key: string]: number[];
}
const graph: Graph = {};
for (const [node1, node2] of nodes) {
    if (node1 in graph) {
        graph[node1].push(node2)
    } else {
        graph[node1] = [node2]
    }

    if (node2 in graph) {
        graph[node2].push(node1)
    } else {
        graph[node2] = [node1]
    }
}

function dfs(idx: number, graph: Graph, gatewayNodes: Set<number>, visitedSet): boolean {
    if (visitedSet.has(idx)) return false;
    if (gatewayNodes.has(idx)) return true;

    visitedSet.add(idx);

    for (const node of graph[idx]) {
        const hasGateway = dfs(node, graph, gatewayNodes, visitedSet);
        if (hasGateway) return true;
    }

    visitedSet.delete(idx);

    return false;
}

function findGateway(arr, set): number | null {
    console.error(arr)
    for (const num of arr) {
        if (set.has(num)) return num
    }
    return null;
}

// TODO: Find min height for node2
function findMinHeight(idx, graph, gatewayNodes) {
    if (gatewayNodes.has(idx)) return 0;
    let minHeight = Infinity;
    for (const node of graph[idx]) {
        const currHeight = findMinHeight(node, graph, gatewayNodes);
        minHeight = Math.min(minHeight, currHeight)
    }

    return minHeight + 1
}

// game loop
while (true) {
    const SI: number = parseInt(readline()); // Bobnet agent
    const visitedSet = new Set<number>([SI]);
    let node1: number | undefined = undefined;
    let node2: number | undefined = undefined;

    for (const node of graph[SI.toString()]) {
        const hasGateway = dfs(node, graph, gatewayNodes, visitedSet);
        if (hasGateway) {
            node1 = SI;
            node2 = findMinHeight(SI, graph, gatewayNodes); // TODO: Find min height for this node
            break
        }
    }

    if (node1 !== undefined && node2 !== undefined) {
        console.log(`${node1} ${node2}`)
    }
}