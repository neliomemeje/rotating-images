const prev = document.querySelector(".left")
const next = document.querySelector(".right")
const containerEl = document.querySelector(".img-container")
let x = 0
let time;

slideImage()

function slideImage() {
containerEl.style.transform= `perspective(1000px) rotateY(${x}deg)`
time = setTimeout(()=> {
	x += 45;	
	containerEl.style.transform= `perspective(1000px) rotateY(${x}deg)`;
	slideImage()
}, 3000)
}


prev.addEventListener("click", () => {
x += 45	
clearTimeout(time)
slideImage()

})




next.addEventListener("click", () => {
x -= 45	
clearTimeout(time)
slideImage()
})

