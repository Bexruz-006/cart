
  const input = document.getElementById("count");

  function plus() {
    input.value = Number(input.value) + 1;
  }

  function minus() {
    if (input.value > 1) {
      input.value = Number(input.value) - 1;
    }
  }
    let menuList = document.querySelector(".menuList");
    menuList.style.maxHeight = "0px";

    function toggleMenu(){
        if(menuList.style.maxHeight == "0px"){
            menuList.style.maxHeight = "300px";
        } else {
            menuList.style.maxHeight = "0px";  
        }
    }
    

  