
(function(){


    var boxElements = document.getElementsByClassName("boxes");
    var numOfBoxElements = boxElements.length;
    for (var i = 0; i <= numOfBoxElements; i += 1) {
      boxElements[i].onclick = function(e) {
        var visible_choice = document.getElementById('visible-choice').innerHTML;
        var boxClicked = this.id;
        var temp = document.getElementById(boxClicked).innerHTML;
        document.getElementById(boxClicked).innerHTML = visible_choice;
        document.getElementById('visible-choice').innerHTML = temp;
    };
}

})();
