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
           $('#p1box1').text(data.p1list[0]);
           $('#p1box2').text(data.p1list[1]);
           $('#p1box3').text(data.p1list[2]);
           $('#p1box4').text(data.p1list[3]);
           $('#p1box5').text(data.p1list[4]);
           $('#p1box6').text(data.p1list[5]);
           $('#p1box7').text(data.p1list[6]);
           $('#p1box8').text(data.p1list[7]);
           $('#p1box9').text(data.p1list[8]);
           $('#p1box10').text(data.p1list[9]);
           $('#visible-choice').text(data.gamelist[0]);

           $('#p2box1').text(data.p2list[0]);
           $('#p2box2').text(data.p2list[1]);
           $('#p2box3').text(data.p2list[2]);
           $('#p2box4').text(data.p2list[3]);
           $('#p2box5').text(data.p2list[4]);
           $('#p2box6').text(data.p2list[5]);
           $('#p2box7').text(data.p2list[6]);
           $('#p2box8').text(data.p2list[7]);
           $('#p2box9').text(data.p2list[8]);
           $('#p2box10').text(data.p2list[9]);

            initBoxSizes();
         }
     }
    });


    var boxElements = document.getElementsByClassName("boxes");

    setTimeout(function(){
      hideOpponent('cover');
    }, 5000);


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
        newValue = (parseInt(valueOfBox)* 3) + 50;
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

    function hideOpponent (idObj) {
      document.getElementById(idObj).style.opacity = 1;
      animateWidth(idObj);
    }


    function animateWidth(idObj){
      var elem = document.getElementById(idObj);
      var maxWidth = 280;
      var curWidth = 30;
      var id = setInterval(frame, 10);
      function frame(){
      if(curWidth === maxWidth){
        clearInterval(id);
      } else {
        curWidth++;
        elem.style.width = curWidth + 'px';
      }
    }
   }
});
