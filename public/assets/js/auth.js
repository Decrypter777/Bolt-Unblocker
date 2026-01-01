document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('name') || localStorage.getItem('name') === '') {
        localStorage.setItem('new', 'true');
        try {
            if (localStorage.getItem('que') === 'false' || localStorage.getItem('que') === null) {
                var result = confirm("Do you want to enable ultra-performance mode? (HIGHLY RECOMMENDED FOR LOW-END DEVICES)");
                if (result) {
                    localStorage.setItem('particlesEnabled', false);
                    localStorage.setItem('background', '3');
                    localStorage.setItem('performaceMode', 'true');
                    localStorage.setItem('que', 'true');
                    window.top.location.reload();
                }
                else {
                    localStorage.setItem('particlesEnabled', true);
                    localStorage.setItem('que', 'true');
                }
            }
        // Bypass the onboarding overlay and default to a generic name to avoid blocking startup
        localStorage.setItem('name', 'Guest');
        } catch (error) {
            console.error('Error setting up onboarding:', error);
        }
    }
});