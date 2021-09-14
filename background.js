// Default state when installed
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({
    name: "John Doe",
  });
});

chrome.storage.local.get("name", (data) => {});
