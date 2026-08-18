document.addEventListener("DOMContentLoaded", () => {
    


    // ==========================================
    // 2. SET CURRENT COPYRIGHT YEAR
    // ==========================================
    const copyrightYearEl = document.getElementById("copyright-year");
    if (copyrightYearEl) {
        copyrightYearEl.textContent = new Date().getFullYear();
    }

    // ==========================================
    // 3. MOBILE MENU DRAWER TOGGLE
    // ==========================================
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileDrawer = document.getElementById("mobile-drawer");
    const mobileLinks = document.querySelectorAll(".mobile-link");

    if (mobileMenuBtn && mobileDrawer) {
        mobileMenuBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            mobileDrawer.classList.toggle("open");
        });

        // Close drawer when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener("click", () => {
                mobileDrawer.classList.remove("open");
            });
        });

        // Close drawer when clicking outside
        document.addEventListener("click", (e) => {
            if (!mobileDrawer.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                mobileDrawer.classList.remove("open");
            }
        });
    }

    // ==========================================
    // 4. STICKY NAVBAR STYLING ON SCROLL
    // ==========================================
    const navbarSticky = document.getElementById("navbar-sticky");
    
    const handleNavbarScroll = () => {
        if (!navbarSticky) return;
        
        if (window.scrollY > 50) {
            navbarSticky.classList.remove("bg-white", "border-transparent");
            navbarSticky.classList.add("bg-[#f0f1f3]", "border-gray-300");
        } else {
            navbarSticky.classList.remove("bg-[#f0f1f3]", "border-gray-300");
            navbarSticky.classList.add("bg-white", "border-transparent");
        }
    };

    window.addEventListener("scroll", handleNavbarScroll);
    handleNavbarScroll(); // Initial check on page load

    // ==========================================
    // 5. SCROLL ACTIVE LINK TRACKING (SCROLL-SPY)
    // ==========================================
    const sections = document.querySelectorAll("div[id], section[id]");
    const navLinks = document.querySelectorAll("ul.menu a");

    const scrollSpy = () => {
        let currentSectionId = "";
        
        // Find which section is currently on screen
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150; // offset for sticky header
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        // Update active class on desktop links
        navLinks.forEach(link => {
            link.classList.remove("nav-active");
            const hrefAttr = link.getAttribute("href");
            if (hrefAttr === `#${currentSectionId}`) {
                link.classList.add("nav-active");
            }
        });
    };

    window.addEventListener("scroll", scrollSpy);
    scrollSpy(); // Initial check on page load
});
