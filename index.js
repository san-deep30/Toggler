let toggler = document.getElementById("switch")
    toggler.addEventListener("click", () => {
        if (toggler.checked === true) {
            document.body.style.backgroundColor = "#A3A3A3"
        } else {
            
            document.body.style.backgroundColor = "#262626"
        }

        toggler.checked === true
        ? (document.body.style.backgroundColor = "#A3A3A3")
        : (document.body.style.backgroundColor = "#262626")
         

    });