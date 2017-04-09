chrome.runtime.sendMessage({method:'getTitle'}, function(response){
  $('.output').text(response);
});

chrome.runtime.sendMessage({method:'getDATA'}, function(response){
  $('.datas').text(response);
});

 
