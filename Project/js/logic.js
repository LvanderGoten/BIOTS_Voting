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
            console.log('hey');
            var arr = JSON.stringify({Vote: vote, Token: Math.random().toString(36).slice(2)});
            console.log(arr);
            $.ajax({
                url: '/accept_vote',
                type: 'POST',
                data: arr,
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                async: true,
                success: function(msg) {
                    alert(msg);
                }
            });
            
        } else {
            window.alert("Choose a candidate before submitting!")
        }
    })
})
