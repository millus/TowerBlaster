(function(){
	var boxElements = document.getElementsByClassName("boxes");

  setTimeout(function(){
    hideOpponent('cover');
  }, 5000);

  initBoxSizes();

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
        };
    }


    function hideOpponent (idObj) {
      document.getElementById(idObj).style.opacity = 1;
      animateWidth(idObj);
    };


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
   };

})();
