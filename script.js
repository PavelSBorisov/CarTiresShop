function changeSlide() {
	let slides = document.getElementsByClassName("slide");
	let activeSlide = document.getElementsByClassName("slide active")[0];
	
	activeSlide.classList.remove("active");
	let indexNextSlide = [...activeSlide.parentElement.children].indexOf(activeSlide) + 1;
	if(indexNextSlide >= slides.length) {
		indexNextSlide = 0;
	}
	
	slides[indexNextSlide].classList.add("active");
}

window.onload = function() {
	setInterval(changeSlide, 3000)
}