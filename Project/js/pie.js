var l;
$(document).ready(function () {

//	var chart = new CanvasJS.Chart("chartContainer",
//	{
//		title:{
//			text: "Desktop Search Engine Market Share, Dec-2012"
//		},
//                animationEnabled: true,
//		legend:{
//			verticalAlign: "center",
//			horizontalAlign: "left",
//			fontSize: 20,
//			fontFamily: "Helvetica"        
//		},
//		theme: "theme2",
//		data: [
//		{        
//			type: "pie",       
//			indexLabelFontFamily: "Garamond",       
//			indexLabelFontSize: 20,
//			indexLabel: "{label} {y}%",
//			startAngle:-20,      
//			showInLegend: true,
//			toolTipContent:"{legendText} {y}%",
//			dataPoints: dPoints
//		}
//		]
//	});
    
    window.setInterval(function () {
        
        // Retrieve new polls
        $.ajax({
            url: "test.json",
            dataType: "jsonp",
            success: function(data) {

                $.each(data, function(index) {
                   console.log(data[index].y);
                });
        }
        });
        
    }, 5000);
    
    
});