(function($){
    var DefaultColorNamespace = DefaultColorNamespace || {};

    if (!DefaultColorNamespace.isClickDeclared) {
        $(document).ready(function() {
            $(document).on('click', '.js_color_button', function (e) {
                var $me = $(e.currentTarget);
                var defaultColor = $me.data('defaultcolor');
                // you would think that since this is an id it is unique, and we don't need the closest().
                // You would be wrong.
                // ids are duplicated in live preview
                var $field = $me.closest('#'+$me.data('colorid'));
                var $input = $colorField.find('input[type="hidden"]');
                var $colorInput = $colorField.find('input[type="color"]');
                $input.val(defaultColor);
                $colorInput.val(defaultColor);
                return false;
            });
            
            $(document).on('change', 'input[type="color"]', function (e) {
                var $colorInput = $(e.currentTarget);

                // you would think that since this is an id it is unique, and we don't need the closest().
                // You would be wrong.
                // ids are duplicated in live preview
                var $input = $colorField.siblings('input[type="hidden"]');
                $input.val(defaultColor);
                return false;
            });
        });

        DefaultColorNamespace.isClickDeclared = true;
    }
})(jQuery);
