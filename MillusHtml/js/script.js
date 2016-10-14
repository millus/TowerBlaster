



    var boxElements = document.getElementsByClassName("boxes");
    var numOfBoxElements = boxElements.length;
    for (var i = 0; i <= numOfBoxElements; i += 1) {
		
		
		var newValue = 0;
		var value = (document.getElementsByClassName("boxes")[i].innerHTML);
		//var value = document.getElementById(boxChosen).innerHTML;
		newValue = (parseInt(value)* 10) + 50;
		document.getElementsByClassName("boxes")[i].style.width = newValue + 'px'; 
      
	  
	  
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
		newValue = (parseInt(value)* 10) + 50;
		document.getElementById(idClicked).style.width = newValue + 'px'; 
	};


