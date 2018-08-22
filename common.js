var slides = document.querySelectorAll('.slider__content .item-slide');
var currentSlide = 0;

function nextSlide(n) {
 slides[currentSlide].className = 'item-slide';
 currentSlide = (n)%slides.length;
 slides[currentSlide].className = 'item-slide showing';
}

var toggle = function(){
	var divs = document.querySelectorAll("input.indicator__button");
    var handler = function() {
        var index = this.getAttribute('data-index');
		nextSlide(index);
    }
    for (var i = 0; i < divs.length; i++) {
        divs[i].setAttribute('data-index', i);
        divs[i].onclick = handler; 
    }
}

window.onload= function() {
    document.getElementById('toggler').onclick = function() {
        openbox('box', this);
        return false;
    };
};

function openbox(id, toggler) {
    var div = document.getElementById(id);
    if(div.style.display == 'flex') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'flex';
    }
}
 