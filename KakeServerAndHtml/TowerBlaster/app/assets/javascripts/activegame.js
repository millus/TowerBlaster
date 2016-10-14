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
           $('#box1').text(data.p1list[0]);
           $('#box2').text(data.p1list[1]);
           $('#box3').text(data.p1list[2]);
           $('#box4').text(data.p1list[3]);
           $('#box5').text(data.p1list[4]);
           $('#box6').text(data.p1list[5]);
           $('#box7').text(data.p1list[6]);
           $('#box8').text(data.p1list[7]);
           $('#box9').text(data.p1list[8]);
           $('#visible-choice').text(data.p1list[9]);
           $('#numbers2').text(data.p2list[0] + "," + data.p2list[1] + "," + data.p2list[2]);
            changeWidths();
         }
     }
    });
var boxElements = document.getElementsByClassName("boxes");
    function changeWidths(){


        var numOfBoxElements = boxElements.length;
        for (var i = 0; i <= numOfBoxElements; i += 1) {
            var newValue = 0;
            var value = (document.getElementsByClassName("boxes")[i].innerHTML);
            newValue = (parseInt(value)* 10) + 50;
            document.getElementsByClassName("boxes")[i].style.width = newValue + 'px';
            test(i);
        }
    }
    function changeWidth(idChosen, idClicked){
        var newValue = 0;
        var value = document.getElementById(idChosen).innerHTML;
        newValue = (parseInt(value)* 10) + 50;
        document.getElementById(idClicked).style.width = newValue + 'px';
    }

    function test(number){
        boxElements[number].onclick = function(e) {
            var visible_choice = document.getElementById('visible-choice').innerHTML;
            var boxChosen = document.getElementById('visible-choice').id;
            var boxClicked = this.id;
            changeWidth(boxChosen,boxClicked);
            var temp = document.getElementById(boxClicked).innerHTML;
            document.getElementById(boxClicked).innerHTML = visible_choice;
            document.getElementById('visible-choice').innerHTML = temp;

            var updateurl = "/updatetable";
            $.ajax({
                 type: 'POST',
                 url: updateurl,
                 data: JSON.stringify({
                   "respA" : temp,
                   "respB" : visible_choice,
                   "respC" :  $('#gameId').text(),
                 }),
                 error: function(e) {
                   console.log(e);
                 },
                 dataType: "json",
                 contentType: "application/json",success: function(data) {

                 }
                });


        };
    }
});

