chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == "complete") {
      if (tab.url.includes("https://www.youtube.com/results?search_query")) {
        tabId = tab.id;
        chrome.scripting.executeScript({
          target: { tabId: tabId },
          files: ["contentScript.js"],
        });
      }
    }
  });
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "close") {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.remove(tabs[0].id);
      });
    }
  });
  