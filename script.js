
//menu image for small screens
let menuimg = document.querySelector(".menu_img");
let menu = document.querySelector(".header .container .navbar");
let backtop = document.querySelector(".top");

menuimg.onclick = () => {
  menuimg.classList.toggle("close_img");
  menu.classList.toggle("active");
}

//what happens onscroll
window.onscroll = () => {
  menuimg.classList.remove("close_img");
  menu.classList.remove("active");

  if (document.body. height > 200 || document.documentElement.scrollTop > 200){
    backtop.style.display = "flex";
  } else {
    backtop.style.display = "none";
  }
}
//for active nav link
let nav = document.querySelector(".nav");
let link = document.querySelectorAll("header .container .navbar .nav li a");

link.forEach(el => {
  el.addEventListener("click", function(){
        nav.querySelector(".active").classList.remove("active");
        el.classList.add("active");
  });
});


//filter car content
let carCategories = document.querySelector(".title .car_type");
let categories = carCategories.querySelectorAll(".title .car_type button");
let carList = document.querySelectorAll(".cars .container .box_container .box");

Array.from(categories).forEach((item, index) => {
  item.onclick = (e) => {
    let currCat = carCategories.querySelector(".title .car_type button.active");
    currCat.classList.remove("active");
    e.target.classList.add("active");

    e.preventDefault()

    let filter = e.target.dataset.filter;
    carList.forEach((item) =>{
      if(filter === "all"){
        item.style.display ="block";
      }else{
        if (item.classList.contains(filter)){
        item.style.display ="block";
        }else{
        item.style.display ="none";
        }
      }
    })

  }
})