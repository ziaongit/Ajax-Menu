$(function(){
        function handleMenu() {

        function toggleInfoPanel(anchor) {
          var infoPanelEl = $(this).siblings('.menu-item-info');
          infoPanelEl.toggleClass('is-visible');
        }

        $('.menu-item > a')
          .mouseover(toggleInfoPanel)
          .mouseout(toggleInfoPanel);
    }
     var $container = $('#main-menu');

    // This funtion will create menu items
    function createMenuItems(data) {
        var $element,
            $infoPanel;
        $element = $(`
                    <li class="menu-item">
                        <a href="#">`+ data.title +`</a>
                        <div class="menu-item-info"></div>
                    </li>
                    `);
        if(data.infoPanel && data.infoPanel.length){
            $infoPanel = $('div.menu-item-info', $element);
            data.infoPanel.forEach(function(entry){
                $infoPanel.append(`
                    <img src="`+entry.image+`">
                `);
            });
        }
        return $element;
    }

    // Ajax request to Server
    $.get('api/menu.json', function(data){
        
        // Claen the menu items
        //$Container.empty();

        // Create menu items
        data.forEach(function(data){
            $container.append(createMenuItems(data));
        });

        // Add clearfix class
        $container.append('<div class="cf"></div>');

    },'json');

});
