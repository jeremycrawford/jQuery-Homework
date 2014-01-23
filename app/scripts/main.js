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

$('.eight').click(function(){
	console.log('highlights when curser leaves');

	$(this).toggleClass('fadein');
});

// Eleven

$('.nine').click(function(){
	console.log('highlights when curser leaves');

	$('.button').not(this).toggleClass('fadeallbuttons');
});

// Twelve

$('.ten').hover(function(){
	console.log('hover changes header title');

	$('.title').not(this).toggleClass('fadetitle');
});

// Thirteen

$('.eleven').click(function(){
	console.log('highlights when curser leaves');
	
	$('.title').not(this).toggleClass('fadetitle');

});





// Try19
// $('.box-by-dan.try19').hover(function() {
//   $('.box-by-dan').not(this).toggleClass('light-it-up');
// });



















// javascript

var dog = {
	legs: 4,
	ears: 2,
	barl: function(){
		console.log("WOOF!")
	},

	countEars: function(){
	console.log('I have', this.ears, 'on my back')
	}
}






