(function($) {
  
  
    function equalHeights(){
        var groups = [];
        $('[data-equalize]').each(function() {
            var group = $(this).data('equalize');
            
            // Check if this group already exists
            if($.inArray(group,groups) == -1)
                groups.push(group);
        });
        
        for(i=0; groups.length>i; i++) {
            var elementGroup = $('[data-equalize='+groups[i]+']');
            var maxHeight = Math.max.apply(null, elementGroup.map(function () 
                {
                    return $(this).height();    
                }
            ));
            
            elementGroup.css('min-height', maxHeight);            
            
            console.log(groups[i]);
        }

        
        //console.log(groups);
    }
    $(document).ready(equalHeights);
    $(window).resize(equalHeights);
    
    
})(jQuery);