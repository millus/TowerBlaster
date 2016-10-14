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