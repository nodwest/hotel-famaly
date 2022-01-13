$('#slider2').hide();
$('#slider3').hide();
$('#slider4').hide();
$('#slider5').hide();
$('#slider6').hide();
$('#slider7').hide();
$('#slider8').hide();

$('#pl1').click(function (e) { 
	e.preventDefault();
	$('#slider1').show();
	$('#slider2').hide();
	$('#slider3').hide();
	$('#slider4').hide();
	$('#slider5').hide();
	$('#slider6').hide();
	$('#slider7').hide();
	$('#slider8').hide();

});

$('#pl4').click(function (e) { 
	e.preventDefault();

	$('#slider1').hide();
	$('#slider2').hide();
	$('#slider3').hide();
	$('#slider4').show();
	$('#slider5').hide();
	$('#slider6').hide();
	$('#slider7').hide();
	$('#slider8').hide();

});


$('#pl2a').click(function (e) { 
	e.preventDefault();
	$('#slider2').hide();
	$('#slider1').hide();
	$('#slider3').hide();
	$('#slider4').hide();
	$('#slider5').show();
	$('#slider6').hide();
	$('#slider7').hide();
	$('#slider8').hide();
});

$('#pl2b').click(function (e) { 
	e.preventDefault();
	$('#slider2').hide();
	$('#slider1').hide();
	$('#slider2').show();
	$('#slider4').hide();
	$('#slider5').hide();
	$('#slider6').hide();
	$('#slider7').hide();
	$('#slider8').hide();
});

$('#pl3a').click(function (e) { 
	e.preventDefault();
	$('#slider4').hide();
	$('#slider1').hide();
	$('#slider2').hide();
	$('#slider3').show();
	$('#slider6').hide();
	$('#slider5').hide();
	$('#slider7').hide();
	$('#slider8').hide();
});

$('#pl3b').click(function (e) { 
	e.preventDefault();
	$('#slider4').hide();
	$('#slider1').hide();
	$('#slider2').hide();
	$('#slider3').hide();
	$('#slider6').show();
	$('#slider5').hide();
	$('#slider7').hide();
	$('#slider8').hide();
});

$('#pl4a').click(function (e) { 
	e.preventDefault();
	$('#slider1').hide();
	$('#slider2').hide();
	$('#slider3').hide();
	$('#slider4').hide();
	$('#slider5').hide();
	$('#slider6').hide();
	$('#slider7').show();
	$('#slider8').hide();
});

$('#pl4b').click(function (e) { 
	e.preventDefault();
	$('#slider1').hide();
	$('#slider2').hide();
	$('#slider3').hide();
	$('#slider4').hide();
	$('#slider5').hide();
	$('#slider6').hide();
	$('#slider7').hide();
	$('#slider8').show();
});




$('#btn_form_menu').click(function (e) { 
	e.preventDefault();
	if (($("#checkin_date").val().length > 0)  && ($("#checkout_date").val().length > 0)  ){
		$('.modal_w_over').show();

	}
});



$('.modal_w_exit').click(function (e) { 
		$('.modal_w_over').hide();
	
});


// $('.button_m').click(function (e) { 
// 	e.preventDefault();
// 	$('.modal_w_over').show();
	
// });

$('.button_pa1').click(function (e) { 
	e.preventDefault();
	$('.modal_w_over').show();
	$('.pr1').text('550р');
	$('.pr2').text('600р');
	$('.pr3').text('830р');
	$('.pr4').text('920р');
	$('.pr5').text('1140р');
	$('.pr6').text('1180р');
	$('.pr7').text('1270р');
	$('.pr8').text('980р');
	$('.pr9').text('950р');
	$('.pr10').text('740р');
	$('.pr11').text('600р');
	
});

$('.button_p2b').click(function (e) { 
	e.preventDefault();
	$('.modal_w_over').show();
	$('.pr1').text('500р');
	$('.pr2').text('500р');
	$('.pr3').text('710р');
	$('.pr4').text('830р');
	$('.pr5').text('1030р');
	$('.pr6').text('1100р');
	$('.pr7').text('1200р');
	$('.pr8').text('900р');
	$('.pr9').text('850р');
	$('.pr10').text('650р');
	$('.pr11').text('550р');
});

$('.button_p3a').click(function (e) { 
	e.preventDefault();
	$('.modal_w_over').show();
	$('.pr1').text('500р');
	$('.pr2').text('520р');
	$('.pr3').text('760р');
	$('.pr4').text('780р');
	$('.pr5').text('870р');
	$('.pr6').text('950р');
	$('.pr7').text('1030р');
	$('.pr8').text('800р');
	$('.pr9').text('770р');
	$('.pr10').text('620р');
	$('.pr11').text('500р');
});

$('.button_p3b').click(function (e) { 
	e.preventDefault();
	$('.modal_w_over').show();
	$('.pr1').text('450р');
	$('.pr2').text('450р');
	$('.pr3').text('600р');
	$('.pr4').text('700р');
	$('.pr5').text('800р');
	$('.pr6').text('900р');
	$('.pr7').text('950р');
	$('.pr8').text('720р');
	$('.pr9').text('700р');
	$('.pr10').text('550р');
	$('.pr11').text('450р');
});

$('.button_p4a').click(function (e) { 
	e.preventDefault();
	$('.modal_w_over').show();

	$('.pr1').text('400р');
	$('.pr2').text('450р');
	$('.pr3').text('650р');
	$('.pr4').text('670р');
	$('.pr5').text('800р');
	$('.pr6').text('870р');
	$('.pr7').text('920р');
	$('.pr8').text('720р');
	$('.pr9').text('650р');
	$('.pr10').text('600р');
	$('.pr11').text('450р');
});


$('.button_p4b').click(function (e) { 
	e.preventDefault();
	$('.modal_w_over').show();
	$('.pr1').text('450р');
	$('.pr2').text('500р');
	$('.pr3').text('720р');
	$('.pr4').text('740р');
	$('.pr5').text('880р');
	$('.pr6').text('920р');
	$('.pr7').text('1000р');
	$('.pr8').text('800р');
	$('.pr9').text('770р');
	$('.pr10').text('620р');
	$('.pr11').text('500р');


});
