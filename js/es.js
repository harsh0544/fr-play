
    document.addEventListener('keydown', function(e) {
        // Example: Block F12 and Ctrl+Shift+I (common dev tools shortcuts)
        if (
            e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C'))
        ) {
            e.preventDefault();
        }
    });