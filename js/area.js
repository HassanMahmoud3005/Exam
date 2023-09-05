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







const nameCountry = []; //Name Country

async function country() {
  $(function(){
    $(".spiner").fadeIn(1);
    $("body").css("overflow","hidden")
    })
  const data = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
  const country = await data.json();
  const finalCountry = country.meals;

  for (let i = 0; i < finalCountry.length ; i++) {
    let all = finalCountry[i].strArea;
    nameCountry.push(all);
  }
 display()
 $(function(){
  $(".spiner").fadeOut(1000);
  $("body").css("overflow","auto")
  })

  }
  
  
  

  function display(){
    let box = " ";
    for(let i = 0 ; i <nameCountry.length ; i++){
      box +=`
      <div class="col-md-3 d-block text-white text-decoration-none currentCountry" style="cursor:pointer">
      <i class="fa-solid fa-house-laptop fa-4x" aria-valuetext="${nameCountry[i]}"></i>
      <h2 aria-valuetext="${nameCountry[i]}">${nameCountry[i]}</h2>
      </div>
      `
     
    }
    document.getElementById("cols").innerHTML = box;

var nameOfCountry = " ";

    let item = document.querySelectorAll(".currentCountry");
    for(let i = 0 ; i < item.length ; i++){
      document.querySelectorAll("#cols .currentCountry")[i].addEventListener("click" , function(e){
        let getName = e.target.getAttribute("aria-valuetext");
        nameOfCountry = getName;
        sendCountry(nameOfCountry);
        allSendData.splice(0,100)
        document.getElementById("cartonaMeal").classList.remove("d-none");
        document.getElementById("beforeMeal").classList.add("d-none");
      })
    }
  }
country();





//!Start Send Country Name!//

  var allSendData=[ ];  //! Get Name country !//

  async function sendCountry(nameCountry){
    $(function(){
      $(".spiner").fadeIn();
      $("body").css("overflow","hidden")
      })
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${nameCountry}`);

    let responseSend =await data.json();
    let finalSend = responseSend.meals;

    for(let i = 0 ; i < finalSend.length ; i++){
let allSend = finalSend[i];
allSendData.push(allSend);
    }
    displaySend()
    $(function(){
      $(".spiner").fadeOut(1000);
      $("body").css("overflow","auto")
      })


    function displaySend(){

      var cartonaSend = " ";
      for(let i = 0 ; i < allSendData.length ; i++){
      
      cartonaSend += `
      <div class="col-md-3 position-relative" id="rowSend">
      <div class="item position-relative" aria-textValue="${allSendData[i].strMeal}" style="cursor:pointer">
<div>
 <img src='${allSendData[i].strMealThumb}' alt="img" style="border-radius: 10px" class="w-100" aria-textValue="${allSendData[i].strMeal}" aria-textValue="${allSendData[i].strMeal}">
  </div>
      <h2 class="layer position-absolute d-flex align-items-center justify-content-center text-dark getVal" aria-textValue="${allSendData[i].strMeal}" style="cursor:pointer" id="layer">${allSendData[i].strMeal}</h2>
      </div>
      </div>
      `
      }
      document.getElementById("colsSend").innerHTML = cartonaSend;
      var getVal = document.querySelectorAll(".getVal");
      // var peto = " ";

      for(let i = 0 ; i < getVal.length ; i ++){
        getVal[i].addEventListener("click" , function(e){
          var element = e.target;
          var SearchName = element.getAttribute("aria-textValue");//! name of meal !//

        putMeal(SearchName)



        document.getElementById("finish").classList.remove("d-none")
        document.getElementById("cartonaMeal").classList.add("d-none")
        })

      }
      }





    

  }

  














let getMeal = []


async function putMeal(meal){
  $(function(){
    $(".spiner").fadeIn();
    $("body").css("overflow","hidden")
    })
  const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`);
  const response = await data.json();
  const final = response.meals;
  getMeal = final;


display()
$(function(){
  $(".spiner").fadeOut();
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
    document.getElementById("final").innerHTML = boxss
  }






}





