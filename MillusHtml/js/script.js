(function(){
	var boxElements = document.getElementsByClassName("boxes");
console.log('yoolo');
	initBoxSizes();
    function initBoxSizes(){
		console.log('yool1');
        var numOfBoxElements = boxElements.length;
		console.log('yoolo12');
        for (var i = 0; i <= numOfBoxElements; i += 1) {
			console.log('yoolo3');
            var value = (document.getElementsByClassName("boxes")[i].innerHTML);
			console.log('yoolo4');
            setSize(i, value);
			console.log('yoolo5');
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


        };
    }
})();