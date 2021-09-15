// Default state when installed
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({
    name: "John Doe",
  });
});

//chrome.storage.local.get("name", (data) => {});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log(tabId);
  console.log(changeInfo);
  console.log(tab);
  if (changeInfo.status === "complete" && /^http/.test(tab.url)) {
    chrome.scripting
      .executeScript({
        target: { tabId: tabId },
        files: ["./foreground.js"],
      })
      .then(() => {
        console.log("Injected Script");
      })
      .catch((err) => console.log(err));
  }
});
