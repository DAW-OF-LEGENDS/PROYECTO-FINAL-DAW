import { Items } from "../src/js/objetos.js";
import { Recipes, Recipe, findRecipeByResult, findRecipesWithItem} from "../src/js/recipes.js";

const itemList = document.getElementById("itemList");
const itemRecipe = document.getElementById("itemRecipe");
const recipesWithItem = document.getElementById("recipesWithItem");

function changeRecipe(recipeItem) {
    let recipe = findRecipeByResult(recipeItem);
    if(recipe == undefined) {
        recipe = {result: Items[recipeItem.nombreBase], items: []}
    }
    itemRecipe.innerHTML = `
        <p class="title">${recipe.result.nombre}</p>
        <span class="result"><img title="${recipe.result.nombre}" alt="" src="../src/images/objetos/${recipe.result.nombreBase.replaceAll(" ", "_")}.png"></span>
    `;
    if (recipe.items.length > 0) {
        const row = document.createElement("div");
        row.classList.add("row");
        itemRecipe.appendChild(row);
        recipe.items.forEach(item => {
            const col = document.createElement("div");
            col.classList.add("col");
            let img = document.createElement("img");
            img.title = item.nombre;
            img.alt = "";
            img.src = `../src/images/objetos/${item.nombreBase.replaceAll(" ", "_")}.png`;
            img.addEventListener('click', () => { changeRecipe(item); });

            col.innerHTML = `<span></span>`;
            col.querySelector("span").appendChild(img);

            // Sub-receta
            const subItemRecipe = findRecipeByResult(item);
            if (subItemRecipe && subItemRecipe.items.length > 0) {
                const subRow = document.createElement("div");
                subRow.classList.add("row");

                subItemRecipe.items.forEach(subItem => {
                    const subCol = document.createElement("div");
                    subCol.classList.add("col");
                    let img = document.createElement("img");
                    img.title = subItem.nombre;
                    img.alt = "";
                    img.src = `../src/images/objetos/${subItem.nombreBase.replaceAll(" ", "_")}.png`;
                    img.addEventListener('click', () => { changeRecipe(subItem); });

                    subCol.innerHTML = `<span></span>`;
                    subCol.querySelector("span").appendChild(img);

                    // Sub-sub-receta
                    const subSubItemRecipe = findRecipeByResult(subItem);
                    if (subSubItemRecipe && subSubItemRecipe.items.length > 0) {
                        const subSubRow = document.createElement("div");
                        subSubRow.classList.add("row");

                        subSubItemRecipe.items.forEach(subSubItem => {
                            const subCol = document.createElement("div");
                            subCol.classList.add("col");
                            let img = document.createElement("img");
                            img.title = subSubItem.nombre;
                            img.alt = "";
                            img.src = `../src/images/objetos/${subSubItem.nombreBase.replaceAll(" ", "_")}.png`;
                            img.addEventListener('click', () => { changeRecipe(subSubItem); });

                            subCol.innerHTML = `<span></span>`;
                            subCol.querySelector("span").appendChild(img);
                            subSubRow.appendChild(subCol);
                        });

                        subCol.appendChild(subSubRow);
                    }


                    subRow.appendChild(subCol);
                });

                col.appendChild(subRow);
            }

            row.appendChild(col);
        });
    }
    let recipes = findRecipesWithItem(recipeItem);
    console.log(recipes)
    recipesWithItem.innerHTML = "";
    for(const recipe of recipes){
        const img = document.createElement("img");
        img.src = `../src/images/objetos/${recipe.result.nombreBase.replaceAll(" ", "_")}.png`
        img.title = recipe.result.nombre;
        img.addEventListener('click', () => { changeRecipe(recipe.result); })
        recipesWithItem.appendChild(img);
    }
}

for(const recipe of Recipes){
    console.log(recipe);
    const img = document.createElement("img");
    img.title = recipe.result.nombre;
    img.alt = "";
    img.src = `../src/images/objetos/${recipe.result.nombre.replaceAll(" ", "_")}.png`;
    img.addEventListener('click', () => { changeRecipe(recipe.result); });
    itemList.appendChild(img);
}