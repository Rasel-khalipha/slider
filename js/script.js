let slides = document.querySelectorAll(".slide");
let slidesArray = Array.from(slides);

let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
// console.log(slidesArray);

function prevnext() {
	let activeSlide = document.querySelector(".slide.active");
	let currentIndex = slidesArray.indexOf(activeSlide);

	let prev;
	let next;

	if (currentIndex == 0) {
		prev = slidesArray[slidesArray.length - 1];
	} else {
		prev = slidesArray[currentIndex - 1];
	}
	if (currentIndex == slidesArray.length - 1) {
		next = slidesArray[0];
	} else {
		next = slidesArray[currentIndex + 1];
	}
	return [next, prev];
}
function koijabo() {
	let activeSlide = document.querySelector(".slide.active");
	let currentIndex = slidesArray.indexOf(activeSlide);

	let [next, prev] = prevnext();

	slidesArray.map((slide, index) => {
		if (currentIndex == index) {
			slide.style.transform = "translateX(0%)";
		} else if (slide == prev) {
			slide.style.transform = "translateX(-100%)";
		} else if (slide == next) {
			slide.style.transform = "translateX(100%)";
		}
		slide.addEventListener("transitionend", function () {
			slide.classList.remove("smooth");
		});
	});
}

// next arrow
next.addEventListener("click", function () {
	let activeSlide = document.querySelector(".slide.active");

	let [next] = prevnext();

	activeSlide.classList.add("smooth");
	next.classList.add("smooth");
	activeSlide.classList.remove("active");
	activeSlide.style.transform = "translateX(-100%)";
	next.classList.add("active");
	next.style.transform = "translateX(0%)";
	koijabo();
});

// previous arrow
prev.addEventListener("click", function () {
	let activeSlide = document.querySelector(".slide.active");

	let [next, prev] = prevnext();

	activeSlide.classList.add("smooth");
	prev.classList.add("smooth");
	activeSlide.classList.remove("active");
	activeSlide.style.transform = "translateX(100%)";
	prev.classList.add("active");
	prev.style.transform = "translateX(0%)";
	koijabo();
});
