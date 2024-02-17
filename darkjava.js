const themeSelector = document.getElementById('theme-selector');
    const body = document.body;
    const sections = document.querySelectorAll('.header, .header.sticked, .section-bg, .section-header, .green, .lang, .dropdown-content, .navbar, .navbar .active, .navbar .dropdown, .mobile-nav-show, .mobile-nav-hide, .mobile-nav-active .navbar, .theme-selector, .hero, .contact, .features .feture-tabs .nav-link, .features .feture-tabs .tab-content, .faq .faq-list, .gallery, .contact .info-item, .footer, .about');

    // Function to apply the selected theme
    function applyTheme(theme) {
      body.classList.toggle('dark-mode', theme === 'dark');
      sections.forEach(section => {
        section.classList.toggle('dark-mode', theme === 'dark');
      });
    }

    // Listen for changes to the theme selector
    themeSelector.addEventListener('change', () => {
	  event.preventDefault(); // Prevent default behavior
      const selectedTheme = themeSelector.value;
      applyTheme(selectedTheme);
      localStorage.setItem('selectedTheme', selectedTheme);
	  return false;
    });

    // Check if the user has a theme preference stored in localStorage
    const storedTheme = localStorage.getItem('selectedTheme');

    if (storedTheme) {
      themeSelector.value = storedTheme;
      applyTheme(storedTheme);
    } else {
      // If no stored preference, default to "system"
      themeSelector.value = 'system';
      applyTheme('system');
    }