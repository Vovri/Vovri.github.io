
var instantiateObject = {name:"object",type:"type",count:15} //good for instantiating an object.


window.onload = function(){ //JQuery. can actually be placed inside document too.
	$(document).ready(function(){
		hideBoops();
		colorTextFields();
	})

}

function hideBoops(){
	$("fire").click(function(){
			$(this).hide();
	})
}

function colorTextFields(){
	$("input").focus(function(){
            $(this).css("background-color", "#f2daaa");
        });
	$("input").blur(function(){
		$(this).css("background-color", "#f5df90");
    });
}

function setBG(){
	document.getElementById('sideways').style.backgroundImage = "url('https://astrobiology.nasa.gov/uploads/filer_public_thumbnails/filer_public/87/5e/875e4a0e-23d2-4254-9b44-429e8ecb88b5/uvi_20180330_120112_283_365_l2b_v20180601_mod.png__1240x510_q85_crop_subject_location-620%2C254_subsampling-2.jpg')";
}

function resetBG(){
	document.getElementById('sideways').style.backgroundImage = "url('https://i.kinja-img.com/gawker-media/image/upload/s--ltJ-Gj4c--/c_scale,f_auto,fl_progressive,q_80,w_800/tg7yaa7ac7jxcowku0ba.jpg')";
}