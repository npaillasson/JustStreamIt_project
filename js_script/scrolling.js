let is_scrolling = false;
const scroll_speed = 10

function reset_image (e) {
	is_scrolling = false;
	e.target.setAttribute("src", "images/scrolling_arrow.png")
}

function scroll_loop (scroll_direction, div_to_scroll) {
	 if (is_scrolling === true) {
        setTimeout(function () {
            div_to_scroll.scrollTo( (div_to_scroll.scrollLeft + (scroll_direction*scroll_speed)),0)
            scroll_loop(scroll_direction, div_to_scroll);
        }, 11)
    }
}

function scroll (e) {
	is_scrolling = true;
	console.log("launch!")
	e.target.addEventListener("mouseout", reset_image)
	var class_list = e.target.getAttribute("class").split(' ')
	var scroll_direction = (class_list[1] == "arrow_left") ? -1 : 1;
	var div_to_scroll = document.getElementById(class_list[2]);
	e.target.setAttribute("src", "images/scrolling_arrow_on_click.png")
	scroll_loop(scroll_direction, div_to_scroll)
}

document.querySelectorAll(".scroll_button").forEach(img => {
	img.addEventListener("mouseover", scroll)
})