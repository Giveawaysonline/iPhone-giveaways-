function showPage(pageNumber) {
  var pages = document.getElementsByClassName('page');
  for (var i = 0; i < pages.length; i++) {
    pages[i].style.display = 'none';
  }
  var currentPage = document.getElementById('page' + pageNumber);
  currentPage.style.display = 'block';
  
  if (pageNumber === 3) {
    loadCPAScript();
  }
}

function loadCPAScript() {
  if (!document.getElementById('cpaScript')) {
    var script = document.createElement('script');
    script.id = 'cpaScript';
    script.type = 'text/javascript';
    script.src = 'https://singingfiles.com/script_include.php?id=1617589';
    document.body.appendChild(script);
  }
}

function initJoinProcess() {
  showPage(2);
}
