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
    new Recipe(Items["AVANCE ETERNO"], [Items["ALMAS EN SINCRONIA"]]),
    new Recipe(Items["ALMAS EN SINCRONIA"], [Items["SUELAS SIMBIOTICAS"]]),
    new Recipe(Items["BRISA DE ETER"], [Items["TOMO AMPLIFICADOR"]]),
    new Recipe(Items["BOTAS JONIAS DE LA LUCIDEZ"], [Items ["BOTAS"], Items["MOTA BRILLANTE"]]),
    new Recipe(Items["DAGA DENTADA"], [Items["ESPADA LARGA"], Items["ESPADA LARGA"]]),
    new Recipe(Items["FILO DE LA NOCHE"], [Items["DAGA DENTADA"], Items["TUNELADORA"]]),
    new Recipe(Items["LUCIDEZ CARMESI"], [Items["BOTAS JONIAS DE LA LUCIDEZ"]]),
    new Recipe(Items["ROBAALMAS DE MEJAI"], [Items["SELLO OSCURO"]]),
    new Recipe(Items["SOBRECARGA TORMENTOSA"], [Items["ALTERNADOR HEXTECK"], Items["BRISA DE ETER"]]),
    new Recipe(Items["SUELAS SIMBIOTICAS"], [Items["BOTAS"]]),
    new Recipe(Items["TUNELADORA"], [Items["ESPADA LARGA"], Items["CRISTAL DE RUBI"]]),    
]

export function findRecipeByResult(item){
    for(const recipe of Recipes){
        if(item == recipe.result){
            return recipe;
        }
    }
}
export function findRecipesWithItem(item){
    const list = [];
    for(const recipe of Recipes){
        if(recipe.items.includes(item)){
            list.push(recipe);
        }
    }
    return list;
}