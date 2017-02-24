var date = "";
var imgdate = "";
var myDate = new Date();
if(myDate.getDate()>=10){
var dateTime = "" + myDate.getDate();
}else{
var dateTime = "0" + myDate.getDate();
}
if((myDate.getMonth()+1)>=10){
var month = myDate.getMonth()+1;
} else {
var month = "0" +(myDate.getMonth()+1);
}


$(function(){ 
$(document).bind("contextmenu",function(e){   
          return false;   
    });
	$("#winctrl").fadeOut();
// $("#page").mouseenter(function () {
		// $("#winctrl").fadeIn();
		// if ($("#timemachine").css("display") === "hidden") {
			// $("#tmopen").fadeIn();
		// };
	// });
	// $("#page").mouseleave(function () {
		// $("#winctrl").fadeOut();
		// if ($("#timemachine").css("display") === "hidden") {
			// $("#tmopen").fadeOut();
		// };
	// });

	$("#play-pause-button").click(function() {
		if ($("#todaymusic")[0].paused) {
			$("#play-pause-button").removeClass("play").addClass("pause");
			$("#todaymusic").trigger("play");
		} else {
			$("#play-pause-button").removeClass("pause").addClass("play");
			$("#todaymusic").trigger("pause");
		};
	});
	$("#todaymusic").bind("ended", function () {
		$("#play-pause-button").removeClass("pause").addClass("play");
	});


//$.getJSON("http://nichijou.in/LastDay/2017/02/23.json");

getinfo();

}); 

function getinfo() {
var strUrl = "http://nichijou.in/LastDay/"+myDate.getFullYear()+"/"+month+"/"+dateTime+".json";
var imgdate = "" +myDate.getFullYear() + month + dateTime;
$.ajax({
        type: "get",
        dataType: "json",
        url: strUrl,
        success: function (data) {
		var haha = ""+data;
            if (data != "") {
				var pic = data[imgdate].images.big568h2x.replace("{img}","http://nextday-pic.b0.upaiyun.com");
				var geo = data[imgdate].geo.reverse.replace(",", ", ");
				var text_short = data[imgdate].text.short.replace(/,/g, ", ");
				var color_back = data[imgdate].colors.background;
				var musicurl = data[imgdate].music.url.replace("{music}","http://nextday-file.b0.upaiyun.com/");
				$("#todaymusic").attr("src", musicurl);
				var musicname = data[imgdate].music.name;
				var musicartist = data[imgdate].music.artist;
				var mawae = getmonth() + ". " + getweekday();
				$("#background").css("background-color", color_back);
				$("#mawae").html(mawae);
				$("#day").html(dateTime);
				$("#geo").html(geo);
				$("#short").html(text_short);
				$("#songname").html(musicname);
				$("#artist").html(musicartist);
				$("#cover").css("background-image", "url('" + pic + "')");
				//function startupfadeout () {
				//	var t = setTimeout("$('#startup').fadeOut()",3000);
				//}
				//startupfadeout();
				$('#startup').fadeOut();
            }
        },
		error: function(msg){  
            alert("ERROR:«Î¡™Õ¯÷ÿ ‘!");  
        }  
    });

}

function getmonth () {
	var month = new Array(12);
	month[0]="JAN";
	month[1]="FEB";
	month[2]="MAR";
	month[3]="APR";
	month[4]="MAY";
	month[5]="JUN";
	month[6]="JUL";
	month[7]="AUG";
	month[8]="SEP";
	month[9]="OCT";
	month[10]="NOV";
	month[11]="DEC";
	return month[myDate.getMonth()];
}

function getweekday (){
	var weekday = new Array(7);
	weekday[0] = "SUNDAY";
	weekday[1] = "MONDAY";
	weekday[2] = "TUESDAY";
	weekday[3] = "WEDNESDAY";
	weekday[4] = "THURSDAY";
	weekday[5] = "FRIDAY";
	weekday[6] = "SATURDAY";
	return weekday[myDate.getDay()];
}
