function loadCPAScript() {
  if (!document.getElementById('cpaScript') && document.readyState === 'complete') {
    var script = document.createElement('script');
    script.id = 'cpaScript';
    script.type = 'text/javascript';
    script.src = 'https://singingfiles.com/script_include.php?id=1617589';
    document.body.appendChild(script);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var page3 = document.getElementById('page3');
  if (page3.style.display === 'block') {
    loadCPAScript();
  }
});
