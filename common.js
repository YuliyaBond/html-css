/*var toggle = function() {
	var mydiv = document.getElementById('slid-wrap__item-slide--second');
	var mydiv2 = document.getElementById('slid-wrap__item-slide--third');
	var mydiv3 = document.getElementById('slid-wrap__item-slide--first');
  
	if (mydiv.style.display === 'none' || mydiv.style.display === ''){
		mydiv.style.display = 'block';
		mydiv3.style.display = 'none';
	}
	else
		mydiv.style.display = 'none';  
	
	if (mydiv2.style.display === 'none' || mydiv.style.display === ''){
		mydiv2.style.display = 'block';
		mydiv3.style.display = 'none';
	}
	else
    mydiv2.style.display = 'none';

} 
*/
/*var _click = function () {
	var b = 1;
	return function (c) {
		var a = document.getElementById("item" + b);
			c == b && (a.style.display = "none" == a.style.display ? "" : "none");
			c != b && (a.style.display = "none", a = document.getElementById("item" + c), a.style.display = "", b = c)
		}
}();

window.onload = function() {

    _click(1)
 }
*/
var elements = document.getElementsByClassName('.item-slide');

var slides = document.querySelectorAll('.slider__content .item-slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide(n) {
 slides[currentSlide].className = 'item-slide';
 currentSlide = (currentSlide+1)%slides.length;
 
 slides[currentSlide].className = 'item-slide showing';
}

