webiopi().ready( function()
{	// Initialize
} );

var R_duty_array = {"-4":"150","-3":"145", "-2":"105", "-1":"080","0":"000", "1":"080", "2":"105","3":"145", "4":"150"};
var L_duty_array = {"-4":"115","-3":"110", "-2":"080", "-1":"060","0":"000", "1":"060", "2":"080","3":"110", "4":"115"};
var V_array = {"-4":"170","-3":"160","-2":"150","-1":"140","0":"130","1":"120","2":"110","3":"100","4":"090","5":"080","6":"070"};
var H_array = {"-8":"175","-7":"165","-6":"155","-5":"145","-4":"135","-3":"125","-2":"115","-1":"105","0":"095","1":"085","2":"075","3":"065","4":"055","5":"045","6":"035","7":"025","8":"015"};

function Motor(direction, L_Level, R_Level)
{
	var arg = String(direction) + String(L_Level) + String(R_Level) + ";";
	console.log(arg);
	//alert(arg);
	webiopi().callMacro( "serial_send", arg);
}

function V_Tilt(s_direction, V_tilt)
{	// Change drive mode. 0 : Stop, 1 : Forward, 2 : Backward, 3 : CW, 4 : CCW
	//alert('V_Tilt ==> ' + String(VT));
	var arg = String(s_direction) + String(V_tilt) + ";";
	console.log(arg);
	//alert(arg);
	webiopi().callMacro( "serial_send", arg);
}

function H_Tilt(s_direction, H_tilt)
{	// Change drive mode. 0 : Stop, 1 : Forward, 2 : Backward, 3 : CW, 4 : CCW
	var arg = String(s_direction) + String(H_tilt) + ";";
	console.log(arg);
	//alert(arg);
	webiopi().callMacro( "serial_send", arg);
}

function light_LED(light_status)
{	// Change drive mode. 0 : Stop, 1 : Forward, 2 : Backward, 3 : CW, 4 : CCW
	var arg = "X" + String(light_status) + ";";
	console.log(arg);
	//alert(arg);
	webiopi().callMacro( "serial_send", arg);
}

window.onload = function(){
	document.getElementById("L-Morter").textContent = 0;
	document.getElementById("R-Morter").textContent = 0;
	document.getElementById("V-Tilt").textContent = 0;
	document.getElementById("H-Tilt").textContent = 0;
}

$(document).ready(function () {
	$("#button_F").on('click', function () {
		l=document.getElementById("L-Morter").textContent;
		r=document.getElementById("R-Morter").textContent;
		if(r!=l){
			i=0;
			}else{
				i=r;
			}
		i++;
		if (i > 3){
			i=4;
			}else {
			}
		L_level = document.getElementById("L-Morter").textContent = i;
		R_level = document.getElementById("R-Morter").textContent = i;
		if(i>0){
			direction ="F"
		}else {
			direction ="B"
		}
		Motor(direction, L_duty_array[L_level], R_duty_array[R_level]);
		return;
});

$(window).keydown(function(e){
	var key = e.which;
	if(key == 38)  // Key[↑]
 	{
		$("#button_F").trigger("click");
	}
});

$("#button_LL").on('click', function () {
	L_level = document.getElementById("L-Morter").textContent = -2;
	R_level = document.getElementById("R-Morter").textContent = 2;
	direction ="L"
	Motor(direction, L_duty_array[L_level], R_duty_array[R_level]);
	return;
});

$(window).keydown(function(e){
	var key = e.which;
	if(key == 90)  // Key[Z]
 	{
		$("#button_LL").trigger("click");
	}
});

$("#button_L").on('click', function () {
	i=document.getElementById("L-Morter").textContent;
	i--;
	if (i < 0){
		i=0;
	}else {
	}
	L_level = document.getElementById("L-Morter").textContent = i;
	R_level = document.getElementById("R-Morter").textContent;

	direction ="F"
	Motor(direction, L_duty_array[L_level], R_duty_array[R_level]);
	return;
});

$(window).keydown(function(e){
	var key = e.which;
	if(key == 37)  // Key[←]
 	{
		$("#button_L").trigger("click");
}});

$("#button_STOP").on('click', function () {
	L_level = document.getElementById("L-Morter").textContent = 0;
	R_level = document.getElementById("R-Morter").textContent = 0;
	direction ="S"
	Motor(direction, L_duty_array[L_level], R_duty_array[R_level]);
	i=0
	return;
});

$(window).keydown(function(e){
	var key = e.which;
	if(key == 32)  // Key[Space]
	{
 		$("#button_STOP").trigger("click");
	}
});

$("#button_R").on('click', function () {
	i=document.getElementById("R-Morter").textContent;
	i--;
	if (i < 0){
		i=0;
	}else {
	}
	L_level = document.getElementById("L-Morter").textContent;
	R_level = document.getElementById("R-Morter").textContent = i;
	direction ="F"
	Motor(direction, L_duty_array[L_level], R_duty_array[R_level]);
	return;
});

$(window).keydown(function(e){
	var key = e.which;
	if(key == 39)  // Key[→]
	{
		$("#button_R").trigger("click");
	}
});

$("#button_RR").on('click', function () {
	L_level = document.getElementById("L-Morter").textContent = 2;
	R_level = document.getElementById("R-Morter").textContent = -2;
	direction ="R"
	Motor(direction, L_duty_array[L_level], R_duty_array[R_level]);
	return;
});

$(window).keydown(function(e){
	var key = e.which;
	if(key == 88)  // Key[X]
	{
		$("#button_RR").trigger("click");
	}
});

$("#button_B").on('click', function () {
	l=document.getElementById("L-Morter").textContent;
	r=document.getElementById("R-Morter").textContent;
	if(r!=l){
		i=-1;
		}else{
			i=r;
		}
	i--;
	if (i < -3){
		i=-4;
		}else {
		}
	L_level = document.getElementById("L-Morter").textContent = i;
	R_level = document.getElementById("R-Morter").textContent = i;
	if(i>0){
		direction ="F"
	}else {
		direction ="B"
	}

	Motor(direction, L_duty_array[L_level], R_duty_array[R_level]);
	return;
});

$(window).keydown(function(e){
	var key = e.which;
	if(key == 40)  // Key[↓]
	{
		$("#button_B").trigger("click");
	}
});

//camera tilt
$("#button_CUP").on('click', function () {
	var v;
	v = document.getElementById("V-Tilt").textContent;
	if (v < 6){
		v++;
		}else {
			}
	vtilt = document.getElementById("V-Tilt").textContent = v;
	s_direction ="V"
	V_Tilt(s_direction, V_array[vtilt]);
	return;
});

$(window).keydown(function(e){
	var key = e.which;
	if(key == 187)  // Key[+]
 	{
		$("#button_CUP").trigger("click");
	}
});

$("#button_CDOWN").on('click', function () {
	var v;
	v = document.getElementById("V-Tilt").textContent;
	if (v > -4){
		v--;
		}else {
		}
	vtilt = document.getElementById("V-Tilt").textContent = v;
	s_direction ="V"
	V_Tilt(s_direction, V_array[vtilt]);
	return;
});

$(window).keydown(function(e){
	var key = e.which;
	if(key == 189)  // Key[+]
	{
		$("#button_CDOWN").trigger("click");
	}
});

$("#button_CR").on('click', function () {
	var h;
	h = document.getElementById("H-Tilt").textContent;
	if (h < 8){
		h++;
		}else {
			}
	htilt = document.getElementById("H-Tilt").textContent = h;
	s_direction ="H"
	H_Tilt(s_direction, H_array[htilt]);
	return;
});

$(window).keydown(function(e){
	var key = e.which;
	if(key == 190)  // Key[>]
	{
		$("#button_CR").trigger("click");
	}
});


$("#button_CL").on('click', function () {
	var h;
	h = document.getElementById("H-Tilt").textContent;
	if (h > -8){
		h--;
		}else {
		}
	htilt = document.getElementById("H-Tilt").textContent = h;
	s_direction ="H";
	H_Tilt(s_direction, H_array[htilt]);
	return;
});

$(window).keydown(function(e){
	var key = e.which;
	if(key == 188)  // Key[>]
	{
		$("#button_CL").trigger("click");
	}
});

$("#button_CENTER").on('click', function () {
	vtilt = document.getElementById("V-Tilt").textContent = 0;
	htilt = document.getElementById("H-Tilt").textContent = 0;
	s_direction ="V";
	V_Tilt(s_direction, V_array[vtilt]);
	s_direction ="H";
	H_Tilt(s_direction, H_array[htilt]);
	return;
});

$(window).keydown(function(e){
	var key = e.which;
	if(key == 83)  // Key[s]
	{
		$("#button_CENTER").trigger("click");
	}
});

$("#button_CRR").on('click', function () {
	htilt = document.getElementById("H-Tilt").textContent = 8;
	s_direction ="H"
	H_Tilt(s_direction, H_array[htilt]);
	return;
});

$(window).keydown(function(e){
	var key = e.which;
	if(key == 191)  // Key[/]
	{
		$("#button_CRR").trigger("click");
	}
});

$("#button_CLL").on('click', function () {
	htilt = document.getElementById("H-Tilt").textContent = -8;
	s_direction ="H"
	H_Tilt(s_direction, H_array[htilt]);
	return;
});

$(window).keydown(function(e){
	var key = e.which;
	if(key == 77)  // Key[m]
 	{
		$("#button_CLL").trigger("click");
	}
});

$("#light_on").on('click', function () {
	flag = '1'
	light_LED(flag);
	return;
});

$(window).keydown(function(e){
	var key = e.which;
	if(key == 49)  // Key[m]
 	{
		$("#light_on").trigger("click");
	}
});

$("#light_off").on('click', function () {
	flag = '0'
	light_LED(flag);
	return;
});

$(window).keydown(function(e){
	var key = e.which;
	if(key == 50)  // Key[m]
 	{
		$("#light_off").trigger("click");
	}
});

})
