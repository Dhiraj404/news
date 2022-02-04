
  // When the user scrolls down 20px from the top of the document, slide down the navbar
 const nav = document.querySelector(".fixx")
 let lastScrollY = window.scrollY;

 window.addEventListener("scroll",()=>
{
  if(lastScrollY < window.scrollY)
  {
    nav.classList.add("fixx--hidden")
    console.log("down")
  }
  else
  {
    nav.classList.remove("fixx--hidden");
    console.log("up")

  }
  lastScrollY = window.scrollY;
})
