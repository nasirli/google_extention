$( document ).ready(function() {
    var data=[];
  $('.atc-product-id').each(function() {
       data.push($(this).attr("value"));
    });
    console.log(data);
    chrome.runtime.sendMessage({
        method:'setDATA',
        title:data
    });
});














































