(function() {
    var sb = new StringBuilder();
    listItems = [
        'Apple',
        'Banana',
        'Coconut',
        'Strawberry'
    ]

    sb.cat('<ul id="list-items" >')
        .each(listItems, function(item, index) {
            this.wrap('<li id="item-' + (index+1) + '">', '</li>')
                .cat((index+1) + ". " + item)
                .end()
        })
        .cat("</ul")
    
    var contentDiv = document.getElementById('content');
    contentDiv.innerHTML = sb.string();
})();