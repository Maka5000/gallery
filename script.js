window.onload = () => {
    const gray = document.getElementById("gray");
    const green = document.getElementById("green");
    const skyblue = document.getElementById("skyblue");

    const image1 = document.getElementById("image1");
    const image2 = document.getElementById("image2");
    const image3 = document.getElementById("image3");

    const buttonUp = document.querySelector(".left-up-arrow");
    const buttonDown = document.querySelector(".right-down-arrow");

    document.addEventListener("wheel", (e) => {
        if (e.deltaY > 0) {
            moveDown();
        } else {
            moveUp();
        }
    });

    buttonUp.addEventListener('click', () => {
        moveUp();

        buttonUp.style.transform = "scale(1.1)";

        setTimeout(() => {
            buttonUp.style.transform = "";
        }, 400)
    });

    buttonDown.addEventListener('click', () => {
        moveDown();

        buttonDown.style.transform = "scale(1.1)";

        setTimeout(() => {
            buttonDown.style.transform = "";
        }, 400)
    });
    
    function moveDown() {
        if(!gray.style.transform && !image1.style.transform) {
            gray.style.transform = "translateY(-100%)";
            green.style.transform = "translateY(-100%)";
            skyblue.style.transform = "translateY(-100%)";
    
            image1.style.transform = "translateY(100%)"
            image2.style.transform = "translateY(-100%)"
            image3.style.transform = "translateY(-300%)"
        } else if (green.style.transform === "translateY(-100%)") {
            gray.style.transform = "translateY(-200%)"
            green.style.transform = "translateY(-200%)";
            skyblue.style.transform = "translateY(-200%)";
    
            image1.style.transform = "translateY(200%)"
            image2.style.transform = "translateY(0)"
            image3.style.transform = "translateY(-200%)"
        } else if (skyblue.style.transform === "translateY(-200%)") {
            gray.style.transform = "";
            green.style.transform = "";
            skyblue.style.transform = "";
    
            image1.style.transform = "";
            image2.style.transform = "";
            image3.style.transform = "";
        }
    };
    
    function moveUp() {
        if(!gray.style.transform && !image1.style.transform) {
            gray.style.transform = "translateY(-200%)";
            green.style.transform = "translateY(-200%)";
            skyblue.style.transform = "translateY(-200%)";
    
            image1.style.transform = "translateY(200%)"
            image2.style.transform = "translateY(0)"
            image3.style.transform = "translateY(-200%)"
        } else if (skyblue.style.transform === "translateY(-200%)") {
            gray.style.transform = "translateY(-100%)";
            green.style.transform = "translateY(-100%)";
            skyblue.style.transform = "translateY(-100%)";
    
            image1.style.transform = "translateY(100%)"
            image2.style.transform = "translateY(-100%)"
            image3.style.transform = "translateY(-300%)"
        } else if (green.style.transform === "translateY(-100%)") {
            gray.style.transform = "";
            green.style.transform = "";
            skyblue.style.transform = "";
    
            image1.style.transform = "";
            image2.style.transform = "";
            image3.style.transform = "";
        }
    }
};

