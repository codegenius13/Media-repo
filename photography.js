(function () {
   "use strict"
window.addEventListener('load', function () {
   // HEADER SECTION
   // STICKY HEADER ONSCROLL TOP
   window.addEventListener("scroll", function () {
    var header = document.querySelector ("header");
    header.classList.toggle("sticky", window.scrollY > 50)
    document.querySelector(".contact").style.position = "fixed";
    });
    // END STICKY HEADER NAV
   // END STICKY HEADER ON SCROLL TOP

   // NAV MENU ACTIVE
   /*var li = document.querySelectorAll(".links");
   var sec = document.querySelectorAll(".sections");
   function activeMenu() {
      let len = sec.length;
      while(--len && window.scrollY + 100 < sec[len].offsetTop) {};
      li.forEach(itx => itx.classList.remove("active"));
      li[len].classList.add("active");
   };
   activeMenu();
   window.addEventListener("scroll", activeMenu);*/
   // END NAV MENU ACTIVE

   // MENU BAR 
   const nav = document.querySelector(".toggle");
    nav.addEventListener("click", function () {
    const item = document.querySelector(".header-logo nav");
    const rev = document.querySelector(".toggle #rev");
    const cos = document.querySelector(".toggle #cos");
    if (item.classList.contains("nav-hide")) {
       item.classList.add("nav-show");
       item.classList.remove("nav-hide");
       rev.classList.add("close");
       rev.classList.remove("open");
       cos.classList.add("open");
       cos.classList.remove("close");
    }
    else {
      item.classList.add("nav-hide");
      item.classList.remove("nav-show");
      rev.classList.add("open");
      rev.classList.remove("close");
      cos.classList.add("close");
      cos.classList.remove("open");
    }
    });
   // END MENU BAR
  // END HEADER SECTION 

  // BODY SECTION 
   // CONTACT FORM 
   const contactOpen = document.getElementById("demo");
   contactOpen.addEventListener("click", function (event) {
       event.preventDefault();
       document.querySelector(".contact").style.display = "block";
   });
   const contactClose = document.getElementById("close")
   contactClose.addEventListener("click", function (event) {
       event.preventDefault();
       document.querySelector(".contact").style.display = "none";
   });
   const contactOpen2 = document.querySelector(".demo");
   contactOpen2.addEventListener("click", function (event) {
       event.preventDefault();
       document.querySelector(".contact").style.display = "block";
   });
   const contactClose2 = document.getElementById("close")
   contactClose2.addEventListener("click", function (event) {
       event.preventDefault();
       document.querySelector(".contact").style.display = "none";
   });
  // getting all required elements
   const form = document.querySelector("form"),
   statusTxt = form.querySelector(".button-area span");
   form.onsubmit = (event) => {
       event.preventDefault(); // preventing form from submitting
       statusTxt.style.color = "black";
       statusTxt.style.display = "block";
       let xhr = new XMLHttpRequest(); // creating new xml object
       xhr.open("POST", "message.php", true); // sending the post request to message.php file
       xhr.onload = () => { // once ajax is loaded
       if (xhr.readyState == 4 && xhr.status == 200) { // if ajax status is 200 & ready status is 200 is 4 means there is no any error
           let response = xhr.response; // storing ajax response in a response variable 
           // if response is an error like enter valid email address then we'll change status color to black else reset the form
           if (response.indexOf("Email and password field is required!") != -1 || response.indexOf("Enter a Valid Email Address!") || response.indexOf("Sorry, failed to send message!")) {
               statusTxt.style.color = "rgb(201, 198, 198)";
           }
           else {
               form.reset();
               setTimeout(() => {
                   statusTxt.style.display = "none";
               }, 3000); // hide the statustxt after 3secs if the msg is sent
           }
           statusTxt.innerText = response;
       } 
       };
       let formData = new FormData(form); // creating new formData obj. This obj is used to send form data
       xhr.send(formData); //sendind form data
   };

// END CONTACT FORM
  // PAGE SCROLLING DOWN CALL BUTTON
  // GET THE BUTTON
 var mybutton = document.getElementById("myBtn")

 // WHEN THE USER SROLLS DOWN 100px FROM THE TOP OF THE DOCUMENT SHOW THE BUTTON
 window.onscroll = function () {
  scrollFunction ()
 };
 function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 20){
    mybutton.style.display = "block"
  }
  else {
    mybutton.style.display = "none"
  }
 }
 // WHEN THE USER CLICKS ON THE BUTTON, CONTACT US
  function topFuntion() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  topFuntion ();

 // END PAGE SCROLLING DOWN CAll BUTTON

  // REVEAL THE WINDOW CONTENT WHEN THE USER SCROLLS DOWN
  window.addEventListener("scroll", reveal);
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i=0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var revealTop = reveals[i].getBoundingClientRect().top;
      var revealPoint = 150;
      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      }
      else {
        reveals[i].classList.remove("active");
      }
     }
  }

   // ANIMATE ON SCROLL 
   AOS.init();
   // END ANIMATE ON SCROLL 

   // END REVEAL THE WINDOW CONTENT WHEN THE USER SCROLLS DOWN
    
   // ABOUT SECTION
   // CONTENT ROTATOR
    let counter = 1;
    function contentRotator() {
        $(`#rotator blockquote:nth-child(${counter})`).fadeIn(2000, function () {
            if ($(this).is("#rotator blockquote:last-child")) {
                setTimeout(function () {
                    $(`#rotator blockquote:nth-child(${counter})`).fadeOut(2000, function() {
                      counter = 1;
                      contentRotator(); 
                    });  
                },7000);
            }
            else {
                setTimeout(function () {
                    $(`#rotator blockquote:nth-child(${counter})`).fadeOut(2000, function () {
                      counter ++
                      contentRotator();  
                    });  
                }, 2000);
            }
        });
    };
    contentRotator();
    // END CONTENT ROTATOR
   // END ABOUT SECTION 
    // FAQS ANSWER SHOW WHEN USE CLICKS THE BUTTON
    var select = document.querySelector(".link1");
    select.addEventListener("click", function (event) {
      event.preventDefault();
      var answer = document.querySelector(".yes1");
      if (answer.classList.contains("hide")) {
        answer.classList.add("show");
        answer.classList.remove("hide")
      }
      else {
        answer.classList.remove("show");
        answer.classList.add("hide");
      }
    });
    // END FOR LINK1

    // FOR LINK2
    var selectTwo = document.querySelector(".link2");
    selectTwo.addEventListener("click", function (event) {
      event.preventDefault();
      var answerTwo = document.querySelector(".yes2");
      if (answerTwo.classList.contains("hide")) {
        answerTwo.classList.add("show");
        answerTwo.classList.remove("hide")
      }
      else {
        answerTwo.classList.remove("show");
        answerTwo.classList.add("hide");
      }
    });
    // END FOR LINK2

    // FOR LINK3
    var selectThree = document.querySelector(".link3");
    selectThree.addEventListener("click", function (event) {
      event.preventDefault();
      var answerThree = document.querySelector(".yes3");
      if (answerThree.classList.contains("hide")) {
        answerThree.classList.add("show");
        answerThree.classList.remove("hide")
      }
      else {
        answerThree.classList.remove("show");
        answerThree.classList.add("hide");
      }
    });
    // END FOR LINK3

    // FOR LINK4
      var selectFour = document.querySelector(".link4");
      selectFour.addEventListener("click", function (event) {
        event.preventDefault();
        var answerFour = document.querySelector(".yes4");
        if (answerFour.classList.contains("hide")) {
          answerFour.classList.add("show");
          answerFour.classList.remove("hide")
        }
        else {
          answerFour.classList.remove("show");
          answerFour.classList.add("hide");
        }
      });
     // END FOR LINK4

      // FOR LINK5
        var selectFive = document.querySelector(".link5");
        selectFive.addEventListener("click", function (event) {
          event.preventDefault();
         var answerFive = document.querySelector(".yes5");
         if (answerFive.classList.contains("hide")) {
            answerFive.classList.add("show");
            answerFive.classList.remove("hide")
          }
          else {
            answerFive.classList.remove("show");
            answerFive.classList.add("hide");
          }
        });
        // END FOR LINK5

        // FOR LINK6
        var selectSix = document.querySelector(".link6");
        selectSix.addEventListener("click", function (event) {
          event.preventDefault();
         var answerSix = document.querySelector(".yes6");
         if (answerSix.classList.contains("hide")) {
            answerSix.classList.add("show");
            answerSix.classList.remove("hide")
          }
          else {
            answerSix.classList.remove("show");
            answerSix.classList.add("hide");
          }
        });
        // END FOR LINK6

        // FOR LINK7
        var selectSeven = document.querySelector(".link7");
        selectSeven.addEventListener("click", function (event) {
          event.preventDefault();
         var answerSeven = document.querySelector(".yes7");
         if (answerSeven.classList.contains("hide")) {
            answerSeven.classList.add("show");
            answerSeven.classList.remove("hide")
          }
          else {
            answerSeven.classList.remove("show");
            answerSeven.classList.add("hide");
          }
        });
        // END FOR LINK7

        // FOR LINK8
        var selectEight = document.querySelector(".link8");
        selectEight.addEventListener("click", function (event) {
          event.preventDefault();
         var answerEight = document.querySelector(".yes8");
         if (answerEight.classList.contains("hide")) {
            answerEight.classList.add("show");
            answerEight.classList.remove("hide")
          }
          else {
            answerEight.classList.remove("show");
            answerEight.classList.add("hide");
          }
        });
        // END FOR LINK8

        // FOR LINK9
        var selectNine = document.querySelector(".link9");
        selectNine.addEventListener("click", function (event) {
          event.preventDefault();
         var answerNine = document.querySelector(".yes9");
         if (answerNine.classList.contains("hide")) {
            answerNine.classList.add("show");
            answerNine.classList.remove("hide")
          }
          else {
            answerNine.classList.remove("show");
            answerNine.classList.add("hide");
          }
        });
        // END FOR LINK9

        // FOR LINK10
        var selectTen = document.querySelector(".link10");
        selectTen.addEventListener("click", function (event) {
          event.preventDefault();
         var answerTen = document.querySelector(".yes10");
         if (answerTen.classList.contains("hide")) {
            answerTen.classList.add("show");
            answerTen.classList.remove("hide")
          }
          else {
            answerTen.classList.remove("show");
            answerTen.classList.add("hide");
          }
        });
        // END FOR LINK10

        // FOR LINK11
        var selectEleven = document.querySelector(".link11");
        selectEleven.addEventListener("click", function (event) {
          event.preventDefault();
         var answerEleven = document.querySelector(".yes11");
         if (answerEleven.classList.contains("hide")) {
            answerEleven.classList.add("show");
            answerEleven.classList.remove("hide")
          }
          else {
            answerEleven.classList.remove("show");
            answerEleven.classList.add("hide");
          }
        });
        // END FOR LINK11

    // END FAQS ANSWER SHOW WHEN USE CLICKS THE BUTTON

   // END BODY SECTION 
});
})();
// PORTFOLIO
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gal .image");

window.onload = ()=>{ 
  filterItem.onclick = (selectedItem)=>{ 
    if(selectedItem.target.classList.contains("item")){ 
      filterItem.querySelector(".shuffle").classList.remove("shuffle"); 
      selectedItem.target.classList.add("shuffle"); 
      let filterName = selectedItem.target.getAttribute("data-name");
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); 
        
        if((filterImges == filterName) || (filterName == "all")){
          image.classList.remove("hide"); 
          image.classList.add("show"); 
        }else{
          image.classList.add("hide"); 
          image.classList.remove("show"); 
        }
      });
    }
  }
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)"); 
  }
}

const previewBox = document.querySelector(".preview-box"),
categoryName = previewBox.querySelector(".title p"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon-x"),
shadow = document.querySelector(".shadow");

function preview(element){
  document.querySelector("body").style.overflow = "hidden";
  let selectedPrevImg = element.querySelector("img").src; 
  let selectedImgCategory = element.getAttribute("data-name"); 
  previewImg.src = selectedPrevImg; 
  categoryName.textContent = selectedImgCategory; 
  previewBox.classList.add("show"); 
  shadow.classList.add("show");
  closeIcon.onclick = ()=>{ 
    previewBox.classList.remove("show"); 
    shadow.classList.remove("show"); 
    document.querySelector("body").style.overflow = "auto"; 
  }
}
// END PORTFOLIO
