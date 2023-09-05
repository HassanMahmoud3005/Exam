$("#menu").on("click", function () {
  $("#navLeft").animate({ width: "toggle" });
  var link = $(".navbar .item .left .link div a");
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

var NameRgx = document.getElementById("nameRgx");
function regexName() {
  var text = /^[a-zA-Z\s]{2,40}$/;
  var regex = NameRgx.value;
  console.log(text.test(regex));

  if (text.test(regex) == true) {
    document.getElementById("resultName").classList.add("opacity-0");
  } else {
    document.getElementById("resultName").classList.remove("opacity-0");
  }
}

var emailRgx = document.getElementById("emailRgx");
function regexEmail() {
  var text = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/;
  var regex = emailRgx.value;
  console.log(text.test(regex));

  if (text.test(regex) == true) {
    document.getElementById("resultEmail").classList.add("opacity-0");
  } else {
    document.getElementById("resultEmail").classList.remove("opacity-0");
  }
}

var phoneRgx = document.getElementById("phoneRgx");
function regexPhone() {
  var text = /^\+?[0-9]{8,20}$/;
  var regex = phoneRgx.value;
  console.log(text.test(regex));

  if (text.test(regex) == true) {
    document.getElementById("resultPhone").classList.add("opacity-0");
  } else {
    document.getElementById("resultPhone").classList.remove("opacity-0");
  }
}

var ageRgx = document.getElementById("ageRgx");
function regexAge() {
  var text = /^(1[8-9]|[2-5]\d|60)$/;
  var regex = ageRgx.value;
  console.log(text.test(regex));

  if (text.test(regex) == true) {
    document.getElementById("resultAge").classList.add("opacity-0");
  } else {
    document.getElementById("resultAge").classList.remove("opacity-0");
  }
}

var passRgx = document.getElementById("passRgx");
function regexPass() {
  var text = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  var regex = passRgx.value;
  if (text.test(regex) == true) {
    document.getElementById("resultPass").classList.add("opacity-0");
  } else {
    document.getElementById("resultPass").classList.remove("opacity-0");
  }

  if (passRgx.value === rePassRgx.value) {
    document.getElementById("resultRePass").classList.add("opacity-0");
  } else {
    document.getElementById("resultRePass").classList.remove("opacity-0");
  }
}

var rePassRgx = document.getElementById("rePassRgx");
function regexRePass() {
  if (rePassRgx.value === passRgx.value) {
    document.getElementById("resultRePass").classList.add("opacity-0");
  } else {
    document.getElementById("resultRePass").classList.remove("opacity-0");
  }
}

let button = document.getElementById("submit");

button.addEventListener("click", (e) => {
  e.preventDefault();
});
