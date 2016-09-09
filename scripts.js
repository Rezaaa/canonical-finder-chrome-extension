chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  var canonical = document.querySelectorAll('[rel="canonical"]')[0];
  if (request.method == "getCanonical"){
    if(canonical != undefined){
      sendResponse({data: canonical.getAttribute("href")});
    }
    else{
      sendResponse({data: 'Not found!'});
    }
  }
  else{
    sendResponse({});
  }
});