$(document).ready(function() {
    var vote = "";

    // Vote
    $('span').click(function () {
        vote = $(this).attr('id');
        
        $('span').css({"color": "darkslategray", "font-weight": "normal"});
        
        
        $(this).css({"color": 'red', "font-weight": 'bold'});
        console.log(vote);
    });
    
    // Submit 
    $('#submit').click(function() {
        if (vote != "") {
            // Submit decision over AJAX
            
        } else {
            window.alert("Choose a candidate before submitting!")
        }
    })
})
