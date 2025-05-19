import { Recipes, Recipe, findRecipeByResult } from "../src/js/recipes.js";

const itemList = document.getElementById("itemList");
const itemRecipe = document.getElementById("itemRecipe");

function changeRecipe(recipeItem) {
    let recipe = findRecipeByResult(recipeItem);
    if(recipe == undefined) {
        return;
    }
    itemRecipe.innerHTML = `
        <p class="title">${recipe.result.nombre}</p>
        <span class="result"><img title="${recipe.result.nombre}" src="../src/images/objetos/${recipe.result.nombreBase.replaceAll(" ", "_")}.png" alt="" width="16px" height="16px"></span>
    `;

    if (recipe.items.length > 0) {
        const row = document.createElement("div");
        row.classList.add("row");
        itemRecipe.appendChild(row);
        recipe.items.forEach(item => {
            const col = document.createElement("div");
            col.classList.add("col");
            let img = document.createElement("img");
            img.title = item.nombre
            img.src = `../src/images/objetos/${item.nombreBase.replaceAll(" ", "_")}.png`;
            img.width = "16px"
            img.height = "16px"
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
                    subCol.innerHTML = `<span><img title="${subItem.nombre}" src="../src/images/objetos/${subItem.nombreBase.replaceAll(" ", "_")}.png" width="16px" height="16px"></span>`;
                    subRow.appendChild(subCol);
                });

                col.appendChild(subRow);
            }

            row.appendChild(col);
        });
    }
}

for(const recipe of Recipes){
    console.log(recipe);
    const li = document.createElement("li");
    li.title = recipe.result.nombre;
    li.addEventListener('click', () => { changeRecipe(recipe.result); });
    li.innerHTML = `<img src="../src/images/objetos/${recipe.result.nombre.replaceAll(" ", "_")}.png">`
    itemList.appendChild(li);
}