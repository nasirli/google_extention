$( document ).ready(function() {  
    $(".info-more").append($("<a class='dropali-button'></a>"));

    $('.dropali-button').on('click',function(){
        var product_link = $(this).closest('div').parent().find('.product').attr('href');
        var concat = "https:"+product_link;
        var arr = {link:concat};
        
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
});

