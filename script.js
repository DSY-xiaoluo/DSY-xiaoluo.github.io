document.addEventListener("DOMContentLoaded", function() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/content/sidebar.html', true);
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          var sidebarElements = document.querySelectorAll('#sidebar');
          for (var i = 0; i < sidebarElements.length; i++) {
              sidebarElements[i].innerHTML = xhr.responseText;
          }
      }
  };
  xhr.send();
});
