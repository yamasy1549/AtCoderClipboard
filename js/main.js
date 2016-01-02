$(document).ready(function() {
    var i = 0;
    lits = $(".L0 > .lit");
    lits.each(function(i){
        if(i%2 == 0) {
            var value = lits[i].innerHTML;
            $(this).after('<button data-clipboard-text="' + value + '" class="copyButton">Copy</button>');
        }
    });

    var cp = new Clipboard('.copyButton');
});
