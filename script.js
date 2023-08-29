var copyButtons = document.querySelectorAll('.copy-button');

copyButtons.forEach(function(button) {
    var command = button.previousElementSibling.querySelector('code').textContent;

    new ClipboardJS(button, {
        text: function() {
            return command;
        }
    });

    button.addEventListener('click', function() {
        button.textContent = 'Copied!';
        setTimeout(function() {
            button.textContent = 'Copy';
        }, 2000);
    });
});
