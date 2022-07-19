//default value;
let values = {
  value: 0,
  quotation: 0,
  tax: 0,
}

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set(values);
    console.log('Default values:', values);
  });