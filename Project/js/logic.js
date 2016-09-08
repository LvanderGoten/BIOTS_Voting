$(document).ready(function() {
    var vote = -1;

    // Vote
    $('span').click(function () {
        vote = parseInt($(this).attr('id'));
        
        $('span').css({"color": "darkslategray", "font-weight": "normal"});
        
        
        $(this).css({"color": 'red', "font-weight": 'bold'});
        console.log(vote);
    });
    
    // Submit 
    $('#submit').click(function() {
        if (vote != -1) {
            // Submit decision over AJAX
            var seed = "0x";
            var i;
            for (i = 0; i < 39; i++) {
                seed = seed + "0";
            }
            
            seed = seed + vote.toString();
            
            var arr = JSON.stringify({VoteID: seed, VoteName: $('#' + vote.toString()).text(), Token: Math.random().toString(36).slice(2)});
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
