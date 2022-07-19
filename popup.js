// let changeColor = document.getElementById("changeColor");

// chrome.storage.sync.get("color", ({ color }) => {
//     changeColor.style.backgroundColor = color;
// });

// changeColor.addEventListener("click", async () => {
//     let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//     chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         function: setPageBackgroundColor,
//     });
// });

// function setPageBackgroundColor() {
//     chrome.storage.sync.get('color', ({color}) => {
//         document.body.style.backgroundColor = color;
//     });
// }



window.onload = () => {
    let value = document.getElementById('value');
    let quotation = document.getElementById('quotation');
    let tax = document.getElementById('tax');
    let result = document.getElementById('result');

    value.focus();
    
    value.oninput = changeValue;
    quotation.oninput = changeValue;
    tax.oninput = changeValue;
    
    
    chrome.storage.sync.get(['value', 'quotation', 'tax'], (valueGet) => {
        value.value = valueGet.value;
        quotation.value = valueGet.quotation;
        tax.value = valueGet.tax;
        result.value = (value.value * tax.value / quotation.value).toFixed(2);
    });


    function changeValue(ev) {
        result.value = (value.value * tax.value / quotation.value).toFixed(2);
        chrome.storage.sync.set({value: value.value, quotation: quotation.value, tax: tax.value});
    }
}
