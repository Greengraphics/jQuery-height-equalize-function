(function($) {
    'use strict';

    function equalHeights() {
        var i;
        var groups = [];
        $('[data-equalize]').each(function() {
            var group = $(this).data('equalize');

            // Check if this group already exists
            // If not add this group to the array
            if($.inArray(group,groups) == -1)
                groups.push(group);
        });

        // Loop through the groups and get max height
        for(i=0; groups.length>i; i++) {
            var elementGroup = $('[data-equalize='+groups[i]+']');
            var maxHeight = Math.max.apply(null, elementGroup.map(function () 
                {
                    return $(this).height();
                }
            ));

            // Set height for the group elements
            elementGroup.css('min-height', maxHeight);
        }
    }
    $(document).ready(equalHeights);

    // Heights may change when text wraps another line.
    //$(window).resize(equalHeights);
    // Use throttling instead
    var doit;
    window.onresize = function(){
        clearTimeout(doit);
        doit = setTimeout(equalHeights, 100);
    };

})(jQuery);