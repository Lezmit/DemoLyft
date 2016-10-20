$(document).ready(function () {
  var trigger = $('#hamburger');
  var  close = $('#close');

    trigger.click(openNav);
    close.click(closeNav);

	function openNav() {
	    document.getElementById("mySidenav").style.width = "250px";
	    var nameRecibido = localStorage.getItem("name");
        $("#profileName").text(nameRecibido);
	}

	function closeNav() {
	    document.getElementById("mySidenav").style.width = "0";
	}

});