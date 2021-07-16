const closemodal = function (e) {
	e.preventDefault()
	modalWindow = document.getElementById("modal1")
	modalWindow.style.display = "none";
	modalWindow.setAttribute("aria-hidden", true)
	modalWindow.setAttribute("aria-modal", false)
}


const openmodal = function (e) {
	e.preventDefault()
	closeButton = document.getElementById("close_button")
	modalWindow = document.getElementById("modal1")
	modalWindow.style.display = "flex";
	modalWindow.setAttribute("aria-hidden", false)
	modalWindow.setAttribute("aria-modal", true)
	closeButton.addEventListener("click", closemodal)



}

document.querySelectorAll(".film").forEach(img => {
	img.addEventListener("click", openmodal)
})

let a = document.querySelectorAll(".film");
console.log(a)