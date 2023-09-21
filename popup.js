document.getElementById('addButton').onclick = function() {
    const searchTerm = document.getElementById('searchTerm').value.toLowerCase();
    chrome.storage.local.get('strings', function(data) {
      var strings = data.strings || [];
      strings.push(searchTerm);
      chrome.storage.local.set({strings: strings});
    });
  }
  
  document.getElementById('clearButton').onclick = function() {
    chrome.storage.local.set({strings: []});
  }
  