(function() {
    var sb = new StringBuilder();
    listItems = [
        'Apple',
        'Banana',
        'Coconut',
        'Strawberry'
    ]

    sb.cat('<ul>')
        .each(listItems, function(item, index) {
            this.wrap('<li>', '</li>')
                .cat((index+1) + ". " + item)
                .end()
        })
        .cat("</ul")
    
    var contentDiv = document.getElementById('content');
    contentDiv.innerHTML = sb.string();
})();