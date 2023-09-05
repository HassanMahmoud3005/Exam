let dataChara = [];

async function searchCh(meal) {
  $(function () {
    $(".spiner").fadeIn();
    $("body").css("overflow", "hidden");
  });
  let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${meal}`);
  let response = await data.json();
  let container = response.meals;
  $(function () {
    $(".spiner").fadeOut(1000);
    $("body").css("overflow", "auto");
  });
  dataChara = container?.slice(0, 20);
}

let inpoo = document.getElementById("shCharacter");

inpoo.addEventListener("input", async (e) => {
  if (e.target.value === "") {
    document.getElementById("displayTwo").innerHTML = "";
    return;
  }
  await searchCh(e.target.value);
  let cartona = "";
  for (let i = 0; i < dataChara.length; i++) {
    cartona += `
    <div class="col-md-3 my-3">
    <div class="item position-relative">
    <img src="${dataChara[i].strMealThumb}" alt="img" class="w-100 conto"  style="border-radius:10px;cursor:pointer" aria-valuetext="${dataChara[i].strMeal}">
    <h3 class="layer text-black position-absolute d-flex justify-content-center align-items-center text-center conto"  style="border-radius:10px;cursor:pointer" aria-valuetext="${dataChara[i].strMeal}">${dataChara[i].strMeal}</h3>
    </div>
    </div>
        `;
    document.getElementById("displayTwo").innerHTML = cartona;

    let cont = document.querySelectorAll(".conto");
    for (let i = 0; i < cont.length; i++) {
      cont[i].addEventListener("click", (e) => {
        let trgo = e.target;
        let getName = trgo.getAttribute("aria-valuetext");
        document.getElementById("dodo").classList.add("d-none");
        document.getElementById("fofo").classList.add("d-none");
        document.getElementById("sectionOne").classList.add("d-none");
        document.getElementById("inpotos").classList.add("d-none");
        putMeal(getName);
      });
    }
  }
});

let getNameMeals = [];

async function putMeal(meal) {
  let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`);
  let response = await data.json();
  let final = response.meals;
  getNameMeals.push(...final);
  display();

  function display() {
    let boxs = " ";
    for (let i = 0; i < getNameMeals.length; i++) {
      boxs += `
      <div class="col-md-4">
      <div class="item">
      <img src="${getNameMeals[i].strMealThumb}" alt="img" class="w-100" style="border-radius:10px">
      <h3>${getNameMeals[i].strMeal}</h3>
      </div>
      </div>
  
      <div class="col-md-8 text-start">
      <div class="item">
      <h2>Instructions</h2>
      <h6>${getNameMeals[i].strInstructions}</h6>
      <h3>Area: ${getNameMeals[i].strArea}</h3>
      <h3>Category: ${getNameMeals[i].strCategory}</h3>
      <h3>Recipes:</h3>
      <li class="btn btn-danger m-2">${getNameMeals[i].strIngredient1}</li>
      <li class="btn btn-danger m-2">${getNameMeals[i].strIngredient2}</li>
      <li class="btn btn-danger m-2">${getNameMeals[i].strIngredient3}</li>
      <li class="btn btn-danger m-2">${getNameMeals[i].strIngredient4}</li>
      <li class="btn btn-danger m-2">${getNameMeals[i].strIngredient5}</li>
      <li class="btn btn-danger m-2">${getNameMeals[i].strIngredient6}</li>
      <h3>Tags: </h3>
      <h3>${getNameMeals[i].strTags == "undefined" ? (getNameMeals[i].strTags = " ") : " "} <h3><br/>
      <a href='${getNameMeals[i].strSource}' class="btn btn-info" m-2> Src</a>
      <a href="${getNameMeals[i].strYoutube}" class="btn btn-success m-2"> Youtube</a>
      </div>
      </div>
      `;
    }
    document.getElementById("finalTwo").innerHTML = boxs;
  }
}
