var l;
var chart;
$(document).ready(function () {
    
    window.setInterval(function () {
        chart = new CanvasJS.Chart("chartContainer",
        {
            title:{
                text: ""
            },
            animationEnabled: true,
            legend:{
                verticalAlign: "center",
                horizontalAlign: "left",
                fontSize: 20,
                fontFamily: "Helvetica"        
            },
            theme: "theme2",
            data: [
            {        
                type: "pie",       
                indexLabelFontFamily: "Garamond",       
                indexLabelFontSize: 20,
                indexLabel: "{label} {y}%",
                startAngle:-20,      
                showInLegend: true,
                toolTipContent:"{legendText} {y}%",
                dataPoints: []
            }
            ]
        });
        
        // Retrieve new polls
         $.ajax({
            url: 'test.json',
            dataType: 'json',
            success: function(json) {
            l = json;
            chart.options.data[0].dataPoints = l.dataPoints;
                
            chart.render();
                
            }
         });
        
    }, 10000);
    
    
});