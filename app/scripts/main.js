$('.activate-box').click(function(){
	console.log('Hello World');

	$('.box') .addClass('active');
});

// One 

$('.expandable') .blur(function(){
	console.log('blur when clicked');

	$(this).css('color', 'gray');
})

// Two 

$('.boxone').click(function(){
	console.log('this is my box');

	$(this).hide(2000).show(4000);
});

// Three

$('.one').mouseover(function(){
	console.log('this is my box');

	$(this).toggleClass('toggle');
});

// Four

$('.two').click(function(){
	console.log('this is my box');

	$(this).toggleClass('click');
});

// Five

$('.three').dblclick(function(){
	console.log('this is my box');

	$(this).toggleClass('dblclick');

});

// Six

$('.four').click(function(){
	console.log('this is my box');

	$(this).toggleClass('dissapear');

});

// Seven

$('.five').hover(function(){
	console.log('highlighted when you hover');

	$(this).toggleClass('hover');
});

// Eight

$('.six input').focus(function(){
	console.log('focuses input');

	$(this).toggleClass('focus');
});

// Nine

$('.seven').mouseleave(function(){
	console.log('highlights when curser leaves');

	$(this).toggleClass('mouseleave');
});

// Ten

$('.eight').hover(function(){
	console.log('highlights when curser leaves');

	$(this).toggleClass('fadein');
});

// Eleven

$('.nine').hover(function(){
	console.log('highlights when curser leaves');

	$('.button').not(this).toggleClass('fadeallbuttons');
});

// Twelve

$('.ten').hover(function(){
	console.log('hover changes header title');

	$('.title').not(this).toggleClass('fadetitle');
});

// Thirteen

$('.eleven').hover(function(){

    $(this).toggleClass('widen');
});

// Fourteen

$('.twelve').hover(function(){
	console.log('make box larger inside');

	$('.white-box').toggleClass('expand');
});

// Fifteen

$('.thirteen').hover(function(){
	console.log('box spins when hovered');

	$('.white-box-two').toggleClass('spin');
});

// Sixteen

$('.fourteen').hover(function(){
	console.log('box dissapears when hovered');

	$('.green-box').toggleClass('dissapear');
});

// Button Seventeen

$('.redbox').click(function(){ 
	console.log('box slides when hovered');

	$(this).fadeOut(3000, 0);
	$(this).fadeIn(3000, 0);
});

// Button Eighten

$('.yellowrectangle').hover(function(){ 
	console.log('box slides when hovered');

	$(this).fadeOut(3000, 0);
	$(this).fadeIn(3000, 0);
});

// Button Nineteen

$('.bluerectangle').hover(function(){ 
	console.log('box slides when hovered');

	$(this).fadeOut(3000, 0);
	$(this).fadeIn(3000, 0);
});

// Button Twenty

$('.orangesquare').hover(function(){ 
	console.log('box slides when hovered');

	$(this).fadeOut(3000, 0);
	$(this).fadeIn(3000, 0);
});

// Button Twentyone

$('.pinksquare').hover(function(){ 
	console.log('box slides when hovered');

	$(this).fadeOut('fast');
	$(this).fadeIn(3000, 0);
});

// Button Twentytwo

$('.orangecircle').hover(function(){ 
	console.log('box slides when hovered');

	$(this).fadeOut('fast');
	$(this).fadeIn(5000, 0);
});

// Button Twentythree

$('.orangerectangle').hover(function(){ 
	console.log('box slides when hovered');

});










// Try19
// $('.box-by-dan.try19').hover(function() {
//   $('.box-by-dan').not(this).toggleClass('light-it-up');
// });



















// javascript

// var dog = {
// 	legs: 4,
// 	ears: 2,
// 	barl: function(){
// 		console.log("WOOF!")
// 	},

// 	countEars: function(){
// 	console.log('I have', this.ears, 'on my back')
// 	}
// }






