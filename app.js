// Entry point
(function() {
    'use strict';

    console.log('Hello World app initialized');
})();

// Form UI interactivity (show/hide welcome area)
(function() {
    'use strict';

    var form = document.getElementById('name-form');
    var welcomeMessage = document.getElementById('welcome-message');

    if (form && welcomeMessage) {
        form.addEventListener('submit', function() {
            welcomeMessage.removeAttribute('hidden');
        });
    }
})();
