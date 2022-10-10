var username = document.getElementById(scratcher_name);

function buttonClick() {
  var request = new XMLHttpRequest();
 
  request.open('GET', 'https://api.scratch.mit.edu/users/l___coconut___l/messages/count', true);
    request.responseType = 'json';
 
    request.onload = function () {
      var data = this.response;
      console.log(data);
    };
 
  request.send();
}
