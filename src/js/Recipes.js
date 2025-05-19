import { Items, Item } from "./objetos.js";
export class Recipe {
    /**
     * @type {Item}
     */
    result;
    /**
     * @type {Item[]}
     */
    items = [];
    constructor(result, items){
        this.result = result;
        this.items = items;
    }
}
/**
 * @type {Recipe[]}
 */
export const Recipes = [
    new Recipe(Items["ALTERNADOR HEXTECK"], [Items["TOMO AMPLIFICADOR"], Items["TOMO AMPLIFICADOR"]]),
    new Recipe(Items["SOBRECARGA TORMENTOSA"], [Items["ALTERNADOR HEXTECK"], Items["BRISA DE ETER"]]),
    new Recipe(Items["BRISA DE ETER"], [Items["TOMO AMPLIFICADOR"]]),
]
export function findRecipeByResult(item){
    for(const recipe of Recipes){
        if(item == recipe.result){
            return recipe;
        }
    }
}