$(document).ready(function(){
   var joinurl = "/joinedgame";
           $.ajax({
             type: 'POST',
             url: joinurl,
             data: JSON.stringify({
               "respC" : $("#gameId").text(),
             }),
             error: function(e) {
               console.log(e);
             },
             dataType: "json",
             contentType: "application/json",success: function(data) {

                 if(data.sessionId){
                   $('#numbers1').text(data.p1list[0] + "," + data.p1list[1] + "," + data.p1list[2]);
                   $('#numbers2').text(data.p2list[0] + "," + data.p2list[1] + "," + data.p2list[2]);

                 }
             }
            });

});

