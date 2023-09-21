console.log(window.location.href);

function getSearchTerm() {
  const query = new URLSearchParams(window.location.search);
  var searchTerm;
  if (query.has("q")) {
    searchTerm = query.get("q");
  } else if (query.has("search_query")) {
    searchTerm = query.get("search_query");
  }
  console.log(searchTerm);
  return searchTerm;
}

var search_term = getSearchTerm();
search_term = search_term.toLowerCase();

chrome.storage.local.get('strings', (result) => {
  var strings = result.strings;
  strings = strings.map((string) => string.toLowerCase());

  if (strings.length == 0) {
    console.log("empty list");
    chrome.runtime.sendMessage({
      message: "close",
    });
  } else if (!strings.includes(search_term.toLowerCase())) {
    console.log("not in the list");
    chrome.runtime.sendMessage({
      message: "close",
    });
  } else {
    console.log("in the list");
  }
});
