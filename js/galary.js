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
	$('.pr1').text('550??');
	$('.pr2').text('600??');
	$('.pr3').text('830??');
	$('.pr4').text('920??');
	$('.pr5').text('1140??');
	$('.pr6').text('1180??');
	$('.pr7').text('1270??');
	$('.pr8').text('980??');
	$('.pr9').text('950??');
	$('.pr10').text('740??');
	$('.pr11').text('600??');
	
});

$('.button_p2b').click(function (e) { 
	e.preventDefault();
	$('.modal_w_over').show();
	$('.pr1').text('500??');
	$('.pr2').text('500??');
	$('.pr3').text('710??');
	$('.pr4').text('830??');
	$('.pr5').text('1030??');
	$('.pr6').text('1100??');
	$('.pr7').text('1200??');
	$('.pr8').text('900??');
	$('.pr9').text('850??');
	$('.pr10').text('650??');
	$('.pr11').text('550??');
});

$('.button_p3a').click(function (e) { 
	e.preventDefault();
	$('.modal_w_over').show();
	$('.pr1').text('500??');
	$('.pr2').text('520??');
	$('.pr3').text('760??');
	$('.pr4').text('780??');
	$('.pr5').text('870??');
	$('.pr6').text('950??');
	$('.pr7').text('1030??');
	$('.pr8').text('800??');
	$('.pr9').text('770??');
	$('.pr10').text('620??');
	$('.pr11').text('500??');
});

$('.button_p3b').click(function (e) { 
	e.preventDefault();
	$('.modal_w_over').show();
	$('.pr1').text('450??');
	$('.pr2').text('450??');
	$('.pr3').text('600??');
	$('.pr4').text('700??');
	$('.pr5').text('800??');
	$('.pr6').text('900??');
	$('.pr7').text('950??');
	$('.pr8').text('720??');
	$('.pr9').text('700??');
	$('.pr10').text('550??');
	$('.pr11').text('450??');
});

$('.button_p4a').click(function (e) { 
	e.preventDefault();
	$('.modal_w_over').show();

	$('.pr1').text('400??');
	$('.pr2').text('450??');
	$('.pr3').text('650??');
	$('.pr4').text('670??');
	$('.pr5').text('800??');
	$('.pr6').text('870??');
	$('.pr7').text('920??');
	$('.pr8').text('720??');
	$('.pr9').text('650??');
	$('.pr10').text('600??');
	$('.pr11').text('450??');
});


$('.button_p4b').click(function (e) { 
	e.preventDefault();
	$('.modal_w_over').show();
	$('.pr1').text('450??');
	$('.pr2').text('500??');
	$('.pr3').text('720??');
	$('.pr4').text('740??');
	$('.pr5').text('880??');
	$('.pr6').text('920??');
	$('.pr7').text('1000??');
	$('.pr8').text('800??');
	$('.pr9').text('770??');
	$('.pr10').text('620??');
	$('.pr11').text('500??');


});
