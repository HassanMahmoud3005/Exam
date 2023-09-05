


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











async function categoryApi() {
  $(function(){
    $(".spiner").fadeIn();
    $("body").css("overflow","hidden")
  })
  let data = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
  let response = await data.json();
  let container = response.categories;
display()
  $(function(){
    $(".spiner").fadeOut(1000);
    $("body").css("overflow","auto")
  })

  function display() {
    let cartona = " ";
    for (let i = 0; i < container.length; i++) {
      cartona += `

<div class="col-md-3">
<div class="item position-relative text-center" style="cursor:pointer">
<img src="${container[i].strCategoryThumb}" alt="img" class="w-100" style="border-radius:10px" aria-textValue="${container[i].strCategory}" style="cursor:pointer">
<d class="layer position-absolute  p-3 itemTwo" aria-textValue="${container[i].strCategory}" style="cursor:pointer">

<h2 aria-textValue="${container[i].strCategory}">${container[i].strCategory}</h2>
<h6 aria-textValue="${container[i].strCategory}">${container[i].strCategoryDescription}</h6>

</d>
</div>
</div>
`;
    }
    document.getElementById("display").innerHTML = cartona;


    let item = document.querySelectorAll(".itemTwo");
    for(let i = 0 ; i < item.length ; i++){
   item[i].addEventListener("click" , function(e){
    let targ = e.target;
  var nameMeal = targ.getAttribute("aria-textValue");
  document.getElementById("display").classList.add("d-none")
  document.getElementById("finish").classList.remove("d-none")
  sendMeal(nameMeal)

})
    }

  }
}

categoryApi();






`++++`


var allSendData=[ ];  //! Get Name country !//

async function sendMeal(nameMeal){
  $(function(){
    $(".spiner").fadeIn();
    $("body").css("overflow","hidden")
  })
  let data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${nameMeal}`);
  let responseSend = await data.json();
  let finalSend = responseSend.meals;
  allSendData.push(...finalSend);
  display()

  $(function(){
    $(".spiner").fadeOut(1000);
    $("body").css("overflow","auto")
  })


  

function display(){

  var box = " ";
  for(let i = 0 ; i < allSendData.length ; i++){

box +=`

<div class="col-md-3">
<div class="item position-relative"  aria-valuetext="${allSendData[i].strMeal}" style="cursor:pointer">
<img src="${allSendData[i].strMealThumb}" alt="img" class="w-100 " aria-valuetext="${allSendData[i].strMeal}" style="cursor:pointer">
<h2 class="layer position-absolute p-3 text-center text-dark d-flex justify-content-center align-items-center numTwo"  aria-valuetext="${allSendData[i].strMeal}" style="cursor:pointer">${allSendData[i].strMeal}</h2>
</div>
</div>
`
  }
document.getElementById("final").innerHTML = box;
let numTwo = document.querySelectorAll(".numTwo")
for(let i = 0 ; i < numTwo.length ; i++){
  numTwo[i].addEventListener("click" , function(e){
    let targ = e.target;
    let final = targ.getAttribute("aria-valuetext"); //! Event
    sendMeal(final);
    document.getElementById("prize").classList.remove("d-none");
    goEnd(final);
    document.getElementById("finish").classList.add("d-none")

    
  })
}
}
}



let wentEnd = [ ];

async function goEnd(melo){
  $(function(){
    $(".spiner").fadeIn();
    $("body").css("overflow","hidden")
  })
  let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${melo}`)
  let response = await data.json()
let bro = response.meals;
wentEnd.push(...bro);
displayPrize()
$(function(){
  $(".spiner").fadeOut(1000);
  $("body").css("overflow","auto")
})
function displayPrize(){

  let prize = " ";

  for(let i = 0 ; i <wentEnd.length ; i++){
    prize+=`
    

    <div class="col-md-4">
    <div class="item"><img src="${wentEnd[i].strMealThumb}" alt="img" class="w-100" style="border-radius:10px"></div>
    <h2>${wentEnd[i].strMeal}</h2>
    </div>

    <div class="col-md-8">
    <h1>Instructions</h1>
    <p>${wentEnd[i].strInstructions}</p>
    <h3>Area: ${wentEnd[i].strArea}</h3>
    <h3>Category: ${wentEnd[i].strCategory}</h3>
    
    <h3>
    Recipes : <br> <span class="btn btn-danger text-white">${wentEnd[i].strMeasure1}</span>
     <li class="btn btn-danger text-white m-1">${wentEnd[i].strMeasure2}</li> 
     <li class="btn btn-danger text-white m-1"> ${wentEnd[i].strMeasure3}</li>
     <li class="btn btn-danger text-white m-1"> ${wentEnd[i].strMeasure4}</li>
     <li class="btn btn-danger text-white m-1"> ${wentEnd[i].strMeasure5}</li>
     <li class="btn btn-danger text-white m-1"> ${wentEnd[i].strMeasure6}</li>
    
    </h3>


    <h3>Tags: <br>
    <li class="btn btn-success text-white m-2">${wentEnd[i].strTags == " " ? wentEnd[i].strTags ="" : "" }</li>
    </h3>

<a href='${wentEnd[i].strSource}' class="btn btn-info text-white m-2 p-2">Source</a>
<a href='${wentEnd[i].strYoutube}' class="btn btn-danger text-white m-2 p-2">Youtube</a>


    </div>
    `
  }

  document.getElementById("finalBro").innerHTML = prize;
}



}




