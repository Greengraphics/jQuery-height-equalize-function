(function($) {
    'use strict';

    function equalHeights() {
        var maxHeight = {};

        $('[data-equalize]').each(function() {
            var group = $(this).data('equalize');
            maxHeight[group] = Math.max(maxHeight[group] || 0, $(this).height());
        });

        $('[data-equalize]').each(function() {
            $(this).css('min-height', maxHeight[$(this).data('equalize')]);
        });
    }

    $(window).load(equalHeights);

    // Heights may change when text wraps another line.
    // $(window).resize(equalHeights);
    // Use throttling instead
    var doit;
    window.onresize = function(){
        clearTimeout(doit);
        doit = setTimeout(equalHeights, 100);
    };

})(jQuery);