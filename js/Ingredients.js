$("#menu").on("click", function () {
    $("#navLeft").animate({ width: "toggle" });
    let link = $(".navbar .item .left .link div a");
    $(".navbar .item .left .link .s").animate({ bottom: "150px" }, 300),
      $(".navbar .item .left .link .c").animate({ bottom: "150px" }, 400),
      $(".navbar .item .left .link .a").animate({ bottom: "150px" }, "500"),
      $(".navbar .item .left .link .i").animate({ bottom: "150px" }, 600),
      $(".navbar .item .left .link .co").animate({ bottom: "150px" }, 700);
    $(".bar").fadeToggle(1, function () {
      $(".cross").fadeToggle(1);
    });
  });
  $(".cross").on("click", function () {
    $(".navbar .item .left .link .s").animate({ bottom: "0" }, 300),
      $(".navbar .item .left .link .c").animate({ bottom: "0" }, 400),
      $(".navbar .item .left .link .a").animate({ bottom: "0" }, "500"),
      $(".navbar .item .left .link .i").animate({ bottom: "0" }, 600),
      $(".navbar .item .left .link .co").animate({ bottom: "0" }, 700);
  });
  















let allData = [];

async function data(){
  $(function(){
    $(".spiner").fadeIn(1);
    $("body").css("overflow","hidden")
    })

    let data = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
    let newData = await data.json();
    let final = newData.meals;
  
        allData.push(...final)
    
    display()
    $(function(){
      $(".spiner").fadeOut(1000);
      $("body").css("overflow","auto")
      })

}


function display(){


  let cartona = " ";
  for(let i = 0 ; i < allData.length ; i++){
      cartona +=`
      
      <div class="col-md-3 text-center">
      <div class="item zero" style="over-flow:hiddden;cursor:pointer" aria-valuetext="${allData[i].strIngredient}">
      <p aria-valuetext="${allData[i].strIngredient}"><i class="fa-solid fa-drumstick-bite fa-4x" aria-valuetext="${allData[i].strIngredient}"></i></p>
      <h3 aria-valuetext="${allData[i].strIngredient}">${allData[i].strIngredient}</h3>
      <p style="height:100px !important;overflow:hidden" aria-valuetext="${allData[i].strIngredient}">${allData[i].strDescription}</p>
      </div>
      </div>
      `
  }
  
document.getElementById("display").innerHTML = cartona
let zero = document.querySelectorAll(".zero")
for(let i = 0 ; i < zero.length ; i++){
zero[i].addEventListener("click" , function(e){
  let targo = e.target;
  let nameMeal = targo.getAttribute("aria-valuetext");
  sec2(nameMeal);
  document.getElementById("display").classList.add("d-none")
  document.getElementById("goDataa").classList.remove("d-none")

})

}

}


data()



let goData = [ ];

async function sec2(meal){
  $(function(){
    $(".spiner").fadeIn();
    $("body").css("overflow","hidden")
    })
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal}`);

    let yesData = await data.json();
    let fin = yesData.meals;
    goData.push(...fin)
    displayData()
    $(function(){
      $(".spiner").fadeOut(1000);
      $("body").css("overflow","auto")
      })

    let payer = document.querySelectorAll(".payer");
    for(let i = 0 ; i < payer.length ; i++){
        payer[i].addEventListener("click" , function(e){
            let trbo = e.target;
    let file = trbo.getAttribute("aria-valuetext");
    putMeal(file)
    document.getElementById("details").classList.remove("d-none");
    document.getElementById("goDataa").classList.add("d-none");
        })
    }  



function displayData(){

    let box = " ";

    for(let i = 0 ; i < goData.length ; i++){
        box+=`
        

        <div class="col-md-3">
        <div class="item position-relative " aria-valuetext="${goData[i].strMeal}" style="cursor:pointer">
        <img src="${goData[i].strMealThumb}" alt="img" class="w-100 " aria-valuetext="${goData[i].strMeal}" style="cursor:pointer">
        <h2 class="layero position-absolute d-flex justify-content-center align-items-center flex-column text-black text-center payer" aria-valuetext="${goData[i].strMeal}" style="cursor:pointer">${goData[i].strMeal}</h2>
        
        
        </div>
        </div>
        
        
        `
     
            
       
    }

    document.getElementById("goDataa").innerHTML = box
}

}


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
    let boxss = " ";
    for (let i = 0; i < getMeal.length; i++) {
      boxss += `
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
    <h3>${getMeal[i].strTags =="undefined" ? getMeal[i].strTags =" " : " " } </h3><br/>
    <a href='${getMeal[i].strSource}' class="btn btn-info" m-2> Src</a>
    <a href="${getMeal[i].strYoutube}" class="btn btn-success m-2"> Youtube</a>
    </div>
    </div>
    `;
    }
    document.getElementById("details").innerHTML = boxss
  }
}










