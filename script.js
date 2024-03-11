document.addEventListener("DOMContentLoaded", function () {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/content/sidebar.html', true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var sidebarElements = document.querySelectorAll('#sidebar');
      for (var i = 0; i < sidebarElements.length; i++) {
        sidebarElements[i].innerHTML = xhr.responseText;
      }
    }
  };
  xhr.send();
});

function performSearch() {
  var searchTerm = document.getElementById('searchInput').value;
  var selectedEngine = document.getElementById('searchEngine').value;
  var searchUrl = selectedEngine + encodeURIComponent(searchTerm);
  window.open(searchUrl, '_blank');
  return false;
}
