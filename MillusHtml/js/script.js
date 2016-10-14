
(function(){


    var boxElements = document.getElementsByClassName("boxes");
    var numOfBoxElements = boxElements.length;
    for (var i = 0; i <= numOfBoxElements; i += 1) {
      boxElements[i].onclick = function(e) {
        var visible_choice = document.getElementById('visible-choice').innerHTML;
		var boxChosen = document.getElementById('visible-choice').id;
        var boxClicked = this.id;
		changeWidth(boxChosen,boxClicked);
        var temp = document.getElementById(boxClicked).innerHTML;
        document.getElementById(boxClicked).innerHTML = visible_choice;
        document.getElementById('visible-choice').innerHTML = temp;
    };
}

function changeWidth(idChosen, idClicked){
	var newValue = 0;
	var value = document.getElementById(idChosen).innerHTML;
	newValue = parseInt(value) * 10;
	document.getElementById(idClicked).style.width = newValue + 'px'; 
};

})();
