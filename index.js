window.onload = function(){
    var currentQuote = "";
    var currentAuthor= "";
    $("#generate").on("click",function(){
        $.ajax({
            type: "GET",
            url: "https://talaikis.com/api/quotes/random/",
        }).done(function(response){
            console.log(response);
            currentQuote = response.quote;
            currentAuthor = response.author;
            $("blockquote").empty();
            var quote = $("<p class ='quote'>");
            quote.text(response.quote);
            var footer = $("<footer class='blockquote-footer'>");
            footer.text(response.author);
            $("blockquote").append(quote);
            $("blockquote").append(footer);
        });
    });

    $("#tweet-quote").on("click",function(){
        window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent('"'+currentQuote + '" -' + currentAuthor))
    });
}