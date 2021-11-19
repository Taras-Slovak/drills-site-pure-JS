import $ from './lib/lib';

$('button').on('click', function () {
    $(this).toggleClass('active');
});

$('div').click(function () {
    console.log($(this).index());
});