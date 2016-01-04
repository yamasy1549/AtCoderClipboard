$(document).ready(function() {
    var i = 0;
    linenums = $(".prettyprint:even > .linenums");
    linenums.each(function(i){
        var linenum = linenums[i];
        var str = "";
        for(var j = 0; j < linenum.children.length; j++) {
            for(var k = 0; k < linenum.children[j].children.length; k++) {
                str += linenum.children[j].children[k].innerHTML;
            }
            str += "\n"
        }
        var h3 = linenum.closest(".part").children[0]
        $('<button data-clipboard-text="' + str + '" class="copyButton">Copy</button>').appendTo(linenum.closest(".part").children[0]);
    });

    var cp = new Clipboard('.copyButton');
});
