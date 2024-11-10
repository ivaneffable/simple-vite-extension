console.log("Initialized background script!");

chrome.runtime.onInstalled.addListener(() => {
  console.log("Installed background script!");
});
