$('#push_drop').on('click',function(){
    var current_url = window.location.href;
    var arr = {link:current_url};
    
    $.ajax({
        type: "POST", 
        url:'https://dropali.com/product/parse' ,
        data:JSON.stringify(arr),
        dataType:'json',
        crossDomain:true,
        cache:false,
        async:true,
        contentType:"application/json",
        success: function(msg){
            var fromDOM = msg.message;
            chrome.runtime.sendMessage({method:'setTitle',title:fromDOM});
        },
        error: function(jxhr){
            alert(jxhr.responseText);
        }
    });
    
 });

