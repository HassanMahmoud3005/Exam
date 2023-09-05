$("#menu").on("click", function () {
  $("#navLeft").animate({ width: "toggle" });
  let link = $(".navbar .item .left .link div a");
  $(".navbar .item .left .link .s").animate({ bottom: "150px" }, 300),
    $(".navbar .item .left .link .c").animate({ bottom: "150px" }, 400),
    $(".navbar .item .left .link .a").animate({ bottom: "150px" }, 500),
    $(".navbar .item .left .link .i").animate({ bottom: "150px" }, 600),
    $(".navbar .item .left .link .co").animate({ bottom: "150px" }, 700);
  $(".bar").fadeToggle(1, function () {
    $(".cross").fadeToggle(1);
  });
});
$(".cross").on("click", function () {
  $(".navbar .item .left .link .s").animate({ bottom: "0" }, 300),
    $(".navbar .item .left .link .c").animate({ bottom: "0" }, 400),
    $(".navbar .item .left .link .a").animate({ bottom: "0" }, 500),
    $(".navbar .item .left .link .i").animate({ bottom: "0" }, 600),
    $(".navbar .item .left .link .co").animate({ bottom: "0" }, 700);
});

let allData = [];

async function searchApi(meal) {
  $(function () {
    $(".spiner").fadeIn();
    $("body").css("overflow", "hidden");
  });
  let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`);
  let response = await data.json();
  let container = response.meals;
  allData = container.slice(0, 20);
  $(function () {
    $(".spiner").fadeOut(1);
    $("body").css("overflow", "auto");
  });
}

let inpo = document.getElementById("shName");
inpo.addEventListener("input", async(e) => {
  await searchApi(e.target.value);
  let inpoVal = inpo.value;
  let cartona = "";
  for (let i = 0; i < allData.length; i++) {
    cartona += `
    <div class="col-md-3 my-3">
    <div class="item position-relative">
    <img src="${allData[i].strMealThumb}" alt="img" class="w-100 conto"  style="border-radius:10px;cursor:pointer" aria-valuetext="${allData[i].strMeal}">
    <h3 class="layer text-black position-absolute d-flex justify-content-center align-items-center text-center conto"  style="border-radius:10px;cursor:pointer" aria-valuetext="${allData[i].strMeal}">${allData[i].strMeal}</h3>
    </div>
    </div>`;
    document.getElementById("display").innerHTML = cartona;
    if (inpoVal === "") {
      document.getElementById("display").innerHTML = "";
    }
  }
  let cont = document.querySelectorAll(".conto");
  for (let i = 0; i < cont.length; i++) {
    cont[i].addEventListener("click", (e) => {
      document.getElementById("dodo").classList.add("d-none");
      document.getElementById("fofo").classList.remove("d-none");
      document.getElementById("sectionOne").classList.remove("d-none");
      document.getElementById("sectionTwo").classList.remove("d-none");
      document.getElementById("inpotos").classList.add("d-none");

      let trgo = e.target;
      let getName = trgo.getAttribute("aria-valuetext");

      putMeal(getName);
    });
  }
});

let getMeal = [];

async function putMeal(meal) {
  let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`);
  let response = await data.json();
  let final = response.meals;
  getMeal.push(...final);
  display();

  function display() {
    let boxs = " ";
    for (let i = 0; i < getMeal.length; i++) {
      boxs += `
    <div class="col-md-4">
    <div class="item">
    <img src="${getMeal[i].strMealThumb}" alt="img" class="w-100" style="border-radius:10px">
    <h3>${getMeal[i].strMeal}</h3>
    </div>
    </div>

    <div class="col-md-8 text-start">
    <div class="item">
    <h2>Instructions</h2>
    <h6>${getMeal[i].strInstructions}</h6>
    <h3>Area: ${getMeal[i].strArea}</h3>
    <h3>Category: ${getMeal[i].strCategory}</h3>
    <h3>Recipes:</h3>
    <li class="btn btn-danger m-2">${getMeal[i].strIngredient1}</li>
    <li class="btn btn-danger m-2">${getMeal[i].strIngredient2}</li>
    <li class="btn btn-danger m-2">${getMeal[i].strIngredient3}</li>
    <li class="btn btn-danger m-2">${getMeal[i].strIngredient4}</li>
    <li class="btn btn-danger m-2">${getMeal[i].strIngredient5}</li>
    <li class="btn btn-danger m-2">${getMeal[i].strIngredient6}</li>
    <h3>Tags: </h3>
    <h3>${getMeal[i].strTags == "undefined" ? (getMeal[i].strTags = " ") : " "} <h3><br/>
    <a href='${getMeal[i].strSource}' class="btn btn-info" m-2> Src</a>
    <a href="${getMeal[i].strYoutube}" class="btn btn-success m-2"> Youtube</a>
    </div>
    </div>
    `;
    }

    document.getElementById("final").innerHTML = boxs;
  }
}
