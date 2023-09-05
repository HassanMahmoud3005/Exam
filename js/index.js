/// <reference types="../@types/jquery" />

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

async function aloc() {
  $(function(){
    $(".spiner").fadeIn();
    $("body").css("overflow","hidden")
    })
  let data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=`
  );
  let responseApi = await data.json();
  let areaApi = responseApi.meals;
  allData.push(...areaApi);
  display();
  $(function(){
    $(".spiner").fadeOut(1000);
    $("body").css("overflow","auto")
    })

  function display() {
    var cartona = " ";

    for (let i = 0; i < allData.length; i++) {
      cartona += `
  <div class="col-md-3">
  <div class="item position-relative">
  <img src="${allData[i].strMealThumb}" alt="img" class="w-100" style="cursor:pointer;border-radius: 10px;"  aria-valuetext="${allData[i].strMeal}">
  <h3 class="layer position-absolute d-flex justify-content-center align-items-center wall" style="cursor:pointer"  aria-valuetext="${allData[i].strMeal}"> ${allData[i].strMeal}</h3>
  </div>
  </div>
  `;
    }
    document.getElementById("homeMeal").innerHTML = cartona;
    let layro = document.querySelectorAll(".wall");
    for (let i = 0; i < layro.length; i++) {
      layro[i].addEventListener("click", (e) => {
        let one = e.target;
        let two = one.getAttribute("aria-valuetext");
        document.getElementById("secOne").classList.add("d-none");
        document.getElementById("secTwo").classList.remove("d-none");
        putMeal(two);
      });
    }
  }
}

aloc();

let getMeal = [];

async function putMeal(meal) {
  $(function(){
    $(".spiner").fadeIn();
    $("body").css("overflow","hidden")
    })
  const data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
  );
  const response = await data.json();
  const final = response.meals;
  getMeal.push(...final);
  display();
  $(function(){
    $(".spiner").fadeOut(1000);
    $("body").css("overflow","auto")
    })

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
    <h3>${getMeal[i].strTags =="undefined" ? getMeal[i].strTags =" " : "" } </h3><br/>
    <a href='${getMeal[i].strSource}' class="btn btn-info" m-2> Src</a>
    <a href="${getMeal[i].strYoutube}" class="btn btn-success m-2"> Youtube</a>
    </div>
    </div>
    `;
    }
    document.getElementById("final").innerHTML = boxs;
  }
}
