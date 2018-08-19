var slides = document.querySelectorAll('.slider__content .item-slide');
var currentSlide = 0;

function nextSlide(n) {
 slides[currentSlide].className = 'item-slide';
 //currentSlide = (currentSlide+1)%slides.length;
 currentSlide = (n)%slides.length;
 slides[currentSlide].className = 'item-slide showing';
}

var toggle = function(){
	var divs = document.querySelectorAll("input.indicator__button");
    var handler = function() {
        var index = this.getAttribute('data-index');
        alert(index);
			nextSlide(index);
    }
    for (var i = 0; i < divs.length; i++) {
        divs[i].setAttribute('data-index', i);
        divs[i].onclick = handler; 
    }
}