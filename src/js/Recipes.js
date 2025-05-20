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
    new Recipe(Items["ALTERNADOR HEXTECH"], [Items["TOMO AMPLIFICADOR"], Items["TOMO AMPLIFICADOR"]]),
    new Recipe(Items["SOBRECARGA TORMENTOSA"], [Items["ALTERNADOR HEXTECH"], Items["BRISA DE ETER"]]),
    new Recipe(Items["BRISA DE ETER"], [Items["TOMO AMPLIFICADOR"]]),
    new Recipe(Items["ROBAALMAS DE MEJAI"], [Items["SELLO OSCURO"]]),
    new Recipe(Items["LUCIDEZ CARMESI"], [Items["BOTAS JONIAS DE LA LUCIDEZ"], Items ["BOTAS"], Items["MOTA BRILLANTE"]]),
    new Recipe(Items["AVANCE ETERNO"], [Items["ALMAS EN SINCRONIA"], Items["SUELAS SIMBIOTICAS"], Items["BOTAS"]]),
    
]
export function findRecipeByResult(item){
    for(const recipe of Recipes){
        if(item == recipe.result){
            return recipe;
        }
    }
}