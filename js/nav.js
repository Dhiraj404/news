
  // When the user scrolls down 20px from the top of the document, slide down the navbar
 const nav = document.querySelector(".fixx")
 let lastScrollY = window.scrollY;
 
 window.addEventListener("scroll",()=>
 {
   if(lastScrollY >= 50 && lastScrollY <= 600)
   {
     nav.classList.add("fixx--hidden")
    //  crousel.classList.
     console.log("down")
    }
    else 
    {
      nav.classList.remove("fixx--hidden")
      console.log("up")

  }
  lastScrollY = window.scrollY;
})



