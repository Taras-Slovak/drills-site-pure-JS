import $ from './lib/lib';

$('#first').on('click', function () {
	$('div').eq(1).fadeOut(800);
});

$('[data-count="second"]').on('click', function () {
	$('div').eq(2).fadeOut(800);
});

$('button')
	.eq(3)
	.on('click', function () {
		$('.w-500').fadeOut(800);
	});
