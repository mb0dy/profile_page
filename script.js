// Tab switching
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('animate');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and panes
            tabButtons.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            // Add active class to clicked button
            btn.classList.add('active');

            // Show corresponding pane
            const tabId = btn.getAttribute('data-tab');
            const activePane = document.getElementById(tabId);
            if (activePane) {
                activePane.classList.add('active');
            }
        });
    });
});

// Optional: open social profiles when icons clicked
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.preventDefault();
        const platform = icon.getAttribute('data-platform');
        const urls = {
            instagram: 'https://instagram.com/mxvorbtw',
            telegram: 'https://t.me/mxvorbtw',
            tiktok: 'https://tiktok.com/@mxvor.ae'
        };
        if (urls[platform]) {
            window.open(urls[platform], '_blank');
        } else {
            alert(`Add your ${platform} link in the script!`);
        }
    });
});