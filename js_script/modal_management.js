
function makeBulletsList (infoArray) {
	let returnValue = "";
	for (let bullet of infoArray) {
		returnValue = returnValue + `<li>${bullet}</li>`
	}
	return returnValue
}

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
		modalWindow["title"]
		document.getElementById("title").innerText = data["title"]
		document.getElementById("genres").innerHTML = makeBulletsList(data["genres"])
		document.getElementById("date").innerText = data["date_published"]
		document.getElementById("rated").innerText = data["rated"]
		document.getElementById("image_modal").src = data["image_url"]
		document.getElementById("imdb_score").innerText = data["imdb_score"]
		document.getElementById("directors").innerHTML = makeBulletsList(data["directors"])
		document.getElementById("countries").innerHTML = makeBulletsList(data["countries"])
		document.getElementById("actors").innerHTML = makeBulletsList(data["actors"])
		document.getElementById("duration").innerText = data["duration"] + " minutes"
		document.getElementById("worldwide_gross_income").innerText = data["worldwide_gross_income"] + " $"
		document.getElementById("description").innerText = data["description"]

	}))
	console.log(url)
	closeButton.addEventListener("click", closemodal)
}

document.querySelectorAll(".film").forEach(img => {
	img.addEventListener("click", openmodal)
})