$(document).ready(function(){
    var restburl = "/ongoinggames";
    $.ajax({
      type: 'POST',
      url: restburl,
      data: JSON.stringify({
        "respC" : $("#nick").text(),
      }),
      error: function(e) {
        console.log(e);
      },
      dataType: "json",
      contentType: "application/json",success: function(data) {
          if(data.sessionId){
            $('#ongoing-games').text('- ' + data.nickname);
            $('#sessionId').val(data.sessionId);
            $("#sessionId").hide();
            $("#nickjoin").val($("#nick").text());
            $("#nickjoin").hide();
          }

      }

     });


    console.log("hei");
    $("#note").hide();
    $("#note2").hide();
    var a = $("#note2").text();
    a = a.replace(/\s/g, '');
    if(a == "true"){
    $("#note").show();
        setTimeout(hideNote, 5000);
    }

});

function hideNote(){
    var n = document.getElementById('note');
    n.style.visibility='hidden'; // You could also choose for display block/none
}

function hideThis(){
    var n = document.getElementById('adresse-velger');
    n.style.visibility='hidden'; // You could also choose for display block/none
}
function joinGame(){
    var joinurl = "/joingame";
        $.ajax({
          type: 'POST',
          url: joinurl,
          data: JSON.stringify({
            "respC" : $("#sessionId").text(),
          }),
          error: function(e) {
            console.log(e);
          },
          dataType: "json",
          contentType: "application/json",success: function(data) {

          }

         });
}
