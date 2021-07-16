

//console.log(test)

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
	const film_id = e.target.getAttribute("id");
	let url = `http://localhost:8000/api/v1/titles/${film_id}`
	fetch(url).then(response => response.json().then(data => {

	}))
	console.log(url)
	closeButton.addEventListener("click", closemodal)



}

document.querySelectorAll(".film").forEach(img => {
	img.addEventListener("click", openmodal)
})

let a = document.querySelectorAll(".film");
console.log(a)