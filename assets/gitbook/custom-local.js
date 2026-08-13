require(['gitbook', 'jQuery'], function (gitbook, $) {
    var releaseDownloadLinks = function () {
        $('.page-inner a[download]').attr('target', '_blank');
    };

    gitbook.events.bind('page.change', releaseDownloadLinks);
});
