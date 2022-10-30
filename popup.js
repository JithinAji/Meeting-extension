function openLink() {
  var newURL = "https://meet.google.com/new";
  debugger;
  chrome.tabs.create({ url: newURL });
}

document.querySelector(".title").addEventListener("click", openLink);
