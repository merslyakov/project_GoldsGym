; $(function () {
	let burger = document.getElementById('e');
	burger.addEventListener('click', menu);

	function menu() {
		if (burger.classList.contains("menu")) {
			burger.classList.remove('menu');
			$('#menu').hide();
		} else {
			burger.classList.add('menu');
			$('#menu').show();
		}
	}

	$("#menu").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 1500);
	});

	// pop up
	var body = document.getElementById('wrapper');
	var modal = document.getElementById('pop');
	var btn = document.getElementById('btn-pop');
	var close = document.getElementsByClassName('pop-up__close')[0];

	btn.onclick = function () {
		modal.classList.add('open');
		body.setAttribute("style", "overflow: hidden;");
	}

	close.onclick = function () {
		if (modal.classList.contains("open")) {
			body.setAttribute("style", "overflow: inherit;");
			modal.classList.remove('open');
		}
	}

	let animItems = document.querySelectorAll('._anim-items');

	if (animItems.length > 0) {
		window.addEventListener('scroll', animOnScroll);
		function animOnScroll() {
			for (let index = 0; index < animItems.length; index++) {
				const animItem = animItems[index];
				const animItemHeigt = animItem.offsetHeight;
				const animItemOffset = offset(animItem).top;
				const animStart = 3;

				let animItemPoint = window.innerHeight - animItemHeigt / animStart;
				if (animItemHeigt > window.innerHeight) {
					animItemPoint = window.innerHeight - window.innerHeight / animStart;
				}

				if ((pageYOffset > animItemOffset - animItemPoint)) {
					animItem.classList.add('end');
				} else {
					animItem.classList.remove('end');
				}
			}
		}
		function offset(el) {
			const rect = el.getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return { top: rect.top + scrollTop, left: rect.left + scrollLeft }

		}
		animOnScroll();
	}

});
