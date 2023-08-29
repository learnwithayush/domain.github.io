var clipboard = new ClipboardJS('.copy-button');

clipboard.on('success', function(e) {
    e.clearSelection();
    e.trigger.textContent = 'Copied!';
    setTimeout(function() {
        e.trigger.textContent = 'Copy';
    }, 2000);
});
