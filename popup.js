chrome.tabs.query({active:true, windowId: chrome.windows.WINDOW_ID_CURRENT}, function(tabs) {
  for (var i=0; i<tabs.length; ++i) {
    chrome.tabs.sendMessage(tabs[i].id, {method: "getCanonical"}, function(response){
      var d = document;
      var i = d.getElementById('canonical');
      i.value = response.data;
    });
  }
});