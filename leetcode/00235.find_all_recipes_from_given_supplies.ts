// 2115. Find All Possible Recipes from Given Supplies

// You have information about n different recipes. You are given a string array 
// recipes and a 2D string array ingredients. The ith recipe has the name recipes[i], 
// and you can create it if you have all the needed ingredients from ingredients[i]. 
// Ingredients to a recipe may need to be created from other recipes, 
// i.e., ingredients[i] may contain a string that is in recipes.

// You are also given a string array supplies containing all the ingredients that 
// you initially have, and you have an infinite supply of all of them.

// Return a list of all the recipes that you can create. 
// You may return the answer in any order.

// Note that two recipes may contain each other in their ingredients.

 

// Example 1:
// Input: recipes = ["bread"], ingredients = [["yeast","flour"]], supplies = ["yeast","flour","corn"]
// Output: ["bread"]
// Explanation:
// We can create "bread" since we have the ingredients "yeast" and "flour".

// Example 2:
// Input: recipes = ["bread","sandwich"], ingredients = [["yeast","flour"],["bread","meat"]], supplies = ["yeast","flour","meat"]
// Output: ["bread","sandwich"]
// Explanation:
// We can create "bread" since we have the ingredients "yeast" and "flour".
// We can create "sandwich" since we have the ingredient "meat" and can create the ingredient "bread".

// Example 3:
// Input: recipes = ["bread","sandwich","burger"], ingredients = [["yeast","flour"],["bread","meat"],["sandwich","meat","bread"]], supplies = ["yeast","flour","meat"]
// Output: ["bread","sandwich","burger"]
// Explanation:
// We can create "bread" since we have the ingredients "yeast" and "flour".
// We can create "sandwich" since we have the ingredient "meat" and can create the ingredient "bread".
// We can create "burger" since we have the ingredient "meat" and can create the ingredients "bread" and "sandwich".
 

// Constraints:

// n == recipes.length == ingredients.length
// 1 <= n <= 100
// 1 <= ingredients[i].length, supplies.length <= 100
// 1 <= recipes[i].length, ingredients[i][j].length, supplies[k].length <= 10
// recipes[i], ingredients[i][j], and supplies[k] consist only of lowercase English letters.
// All the values of recipes and supplies combined are unique.
// Each ingredients[i] does not contain any duplicate values.
// Accepted

// https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/

interface Graph {
    [key: string]: string[];
}

function findAllRecipes(recipes: string[], ingredients: string[][], supplies: string[]): string[] {
    const graph: Graph = {};
    const dishes: string[] = [];
    const cookbook = new Set<string>();
    const cycle = new Set<string>();
    const recipeSet = new Set<string>(recipes);

    for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i];
        const recipeIngredients = ingredients[i];
        graph[recipe] = [...recipeIngredients];
    }

    for (const supply of supplies) {
        graph[supply] = [];
    }

    for (const food in graph) {
        const canMake = dfs(food, graph, cookbook, cycle);
        if (canMake && recipeSet.has(food)) {
            dishes.push(food);
        }
    }

    return dishes;
};

function dfs(
    food: string,
    graph: Graph,
    cookbook: Set<string>,
    cycle: Set<string>,
): boolean {
    if (cycle.has(food) || !(food in graph)) return false;
    if (cookbook.has(food)) return true;
    
    cycle.add(food);
    
    for (const ingredient of graph[food]) {
        const unableToMake = !dfs(ingredient, graph, cookbook, cycle);
        if (unableToMake) return false;
    }
    
    cycle.delete(food);
    cookbook.add(food);
    
    return true;
}

/* Solution #2, same time and space complexity */
function findAllRecipes2(
    recipes: string[],
    ingredients: string[][],
    supplies: string[],
): string[] {
    const graph = buildGraph(recipes, ingredients);
    const supplySet = new Set<string>(supplies);
    const result: string[] = [];
    const cycleSet = new Set<string>();

    for (const recipe in graph) {
        const haveIngredients = dfs2(recipe, graph, supplySet, cycleSet);
        if (haveIngredients) result.push(recipe);
    }

    return result;
};

function dfs2(
    recipe: string,
    graph: Graph,
    supplySet: Set<string>,
    cycleSet: Set<string>,
): boolean {
    if (cycleSet.has(recipe)) return false;
    if (supplySet.has(recipe)) return true;
    if (!(recipe in graph)) return false;
    cycleSet.add(recipe);

    for (const ingredient of graph[recipe]) {
        const haveCycle = !dfs2(ingredient, graph, supplySet, cycleSet);
        if (haveCycle) return false;
    }

    supplySet.add(recipe);
    cycleSet.delete(recipe);
    return true;
}

function buildGraph(recipes: string[], ingredients: string[][]): Graph {
    const graph: Graph = {};
    for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i];
        const currIngredients = ingredients[i];
        graph[recipe] = currIngredients;
    }
    return graph;
}