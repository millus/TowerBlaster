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
            initBoxSizes();
         }
     }
    });


    var boxElements = document.getElementsByClassName("boxes");

    function initBoxSizes(){
        var numOfBoxElements = boxElements.length;
        for (var i = 0; i <= numOfBoxElements; i += 1) {
            var value = (document.getElementsByClassName("boxes")[i].innerHTML);
            setSize(i, value);
            setListenersOnButton(i);
        }
    }

    function setSize(idOfBox, valueOfBox){
        var newValue = 0;
        newValue = (parseInt(valueOfBox)* 10) + 50;
        document.getElementsByClassName("boxes")[idOfBox].style.width = newValue + 'px';
    }

    function setListenersOnButton(number){
        boxElements[number].onclick = function(e) {
            var visible_choice = document.getElementById('visible-choice').innerHTML;
            var boxChosen = document.getElementById('visible-choice').id;
            var boxClicked = this.id;
            var valueOfChosen = document.getElementById(boxChosen).innerHTML;

            setSize(boxClicked, valueOfChosen);

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

