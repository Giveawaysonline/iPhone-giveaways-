function showPage(pageNumber) {
  // Hide all pages
  var pages = document.getElementsByClassName('page');
  for (var i = 0; i < pages.length; i++) {
    pages[i].style.display = 'none';
  }
  // Show the current page
  document.getElementById('page' + pageNumber).style.display = 'block';
  
  // If we're showing the page that should have the content locker, load it
  if (pageNumber === 3) {
    loadContentLocker();
  }
}

// This function dynamically injects the CPA content locker script when called
function loadContentLocker() {
  var script = document.createElement('script');
  script.src = "https://singingfiles.com/script_include.php?id=1616243";
  script.type = "text/javascript";
  document.body.appendChild(script);
}

// This function is attached to your 'Join' button's onclick event
function initJoinProcess() {
  showPage(2); // Assuming page 2 is where they enter their details
}
