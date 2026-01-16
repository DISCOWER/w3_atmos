require(['gitbook', 'jquery'], function(gitbook, $) {
    var SITES = {
        'github': {
            'label': 'Github',
            'icon': 'fa fa-github',
            'link':'https://github.com/DISCOWER',
            }
        }

    gitbook.events.bind('start', function(e, config) {
        var opts = config.sharing;

        // Direct actions to share
        $.each(SITES, function(sideId, site) {
            if (!opts[sideId]) return;

            var onClick = site.onClick;
            
            // override target link with provided link
            onClick = function(e) {
                e.preventDefault();
                window.open(site.link);
            }

            gitbook.toolbar.createButton({
                icon: site.icon,
                label: site.text,
                position: 'right',
                onClick: onClick
            });
        });
    });
});
