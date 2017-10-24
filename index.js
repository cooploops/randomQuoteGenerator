window.onload = function(){
    $("#generate").on("click",function(){
        $.ajax({
            type: "GET",
            url: "https://talaikis.com/api/quotes/random/",
        }).done(function(response){
            console.log(response);
            $("blockquote").empty();
            var quote = $("<p class ='quote'>");
            quote.text(response.quote);
            var footer = $("<footer class='blockquote-footer'>");
            footer.text(response.author);
            $("blockquote").append(quote);
            $("blockquote").append(footer);
        });
    })
};