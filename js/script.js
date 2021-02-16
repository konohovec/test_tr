function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });
function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
    	callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
};
testWebP(function (support) {
    if (support == true) {
	    document.querySelector('body').classList.add('webp');
    } else {
    	document.querySelector('body').classList.add('no-webp');
    };
});
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu, .header__body, .header__lang, .header__call, .header__name, .header__content').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.burger__span').click(function (event) {
		$('.header__burger, .header__menu, .header__body, .header__lang, .header__call, .header__name, .header__content').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
$(function () {
	$.scrollUp({
		scrollName: 'scrollup',       // ID элемента
		scrollDistance: 300,         // Расстояние от начала страницы до показа кнопки (в пикселях)
		scrollFrom: 'top',           // 'top' или 'bottom' (лучше задать стилями)
		scrollSpeed: 300,            // Скорость прокрутки (в миллисекундах)
		easingType: 'linear',        // Анимация плавности 
		animation: 'fade',           // Анимация появления Fade, slide или none
		animationSpeed: 200,         // Скорость анимации (в миллисекундах)
		scrollTrigger: false,        // Свой триггер 
		scrollTarget: false,         // До куда скролим (может быть класс или id), по умолчанию самый верх страницы
		scrollText: 'Вверх',         // Текст в кнопке
		scrollTitle: false,          // Задаем title кнопки
		scrollImg: true,            // Если в качестве кнопки используем изображение
		zIndex: 2147483647           // z-index для точки срабатывания
	});
});