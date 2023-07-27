const btn = document.querySelectorAll("button")
console.log(btn)
const para = document.querySelectorAll(".question-text")
console.log(para)
const icon = document.querySelectorAll("#icons")

console.log(icon);
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
        for (let j = 0; j < para.length; j++) {
            for (let x = 0; x < icon.length; x++) {
                if (btn[i].classList.contains("first")) {
                    icon[2].className = "far fa-plus-square"
                    icon[1].className = "far fa-plus-square"
                    para[0].classList.toggle("show")
                    para[1].classList.remove("show")
                    para[2].classList.remove("show")
                    if (icon[0].classList.contains("fa-plus-square")) {
                        icon[0].classList.remove("fa-plus-square")
                        icon[0].classList.add("fa-minus-square")
                    } else {
                        icon[0].classList.remove("fa-minus-square")
                        icon[0].classList.add("fa-plus-square")
                    }
                }
                else if (btn[i].classList.contains("second")) {
                    icon[0].className = "far fa-plus-square"
                    icon[2].className = "far fa-plus-square"
                    para[0].classList.remove("show")
                    para[2].classList.remove("show")
                    para[1].classList.toggle("show")
                    if (icon[1].classList.contains("fa-plus-square")) {
                        icon[1].classList.remove("fa-plus-square")
                        icon[1].classList.add("fa-minus-square")
                    } else {
                        icon[1].classList.remove("fa-minus-square")
                        icon[1].classList.add("fa-plus-square")
                    }
                }
                else if (btn[i].classList.contains("third")) {
                    icon[0].className = "far fa-plus-square"
                    icon[1].className = "far fa-plus-square"
                    para[0].classList.remove("show")
                    para[1].classList.remove("show")
                    para[2].classList.toggle("show")
                    if (icon[2].classList.contains("fa-plus-square")) {
                        icon[2].classList.remove("fa-plus-square")
                        icon[2].classList.add("fa-minus-square")
                    } else {
                        icon[2].classList.remove("fa-minus-square")
                        icon[2].classList.add("fa-plus-square")
                    }
                }

            }
        }
    })
}