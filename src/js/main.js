import $ from './lib/lib';

$('button').click('click', function () {
    $(this).toggleClass('active');
});