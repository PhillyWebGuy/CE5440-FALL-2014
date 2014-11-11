$("#commentForm").validate();

var data = new XMLHttpRequest();
data.open("get", "http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.js", true);
data.send();