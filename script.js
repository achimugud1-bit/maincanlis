/* ==========================================
   HEADER WITH EXPLORE DROPDOWN & FOOTER ENGINE
   ========================================== */

const EXPLORE_PAGES = [
    'menu/index.html',
    'story/index.html',
    'wine/index.html',
    'lounge/index.html',
    'careers/index.html',
    'private-events/index.html',
    'reservations/index.html',
];

/* Prefix matches this page's script src, so header/footer links stay
   relative to redesign/ from any folder (menu/, private-events/weddings/, etc.). */
function getBasePrefix() {
    const script = document.querySelector('script[src$="script.js"]');
    const src = script && script.getAttribute('src');
    if (!src) return '';
    const slash = src.lastIndexOf('/');
    return slash === -1 ? '' : src.slice(0, slash + 1);
}

const BASE = getBasePrefix();

function normalizePath(pathname) {
    let path = pathname.replace(/\/+$/, '');
    if (path.endsWith('/index.html')) {
        path = path.slice(0, -'/index.html'.length);
    } else if (path.endsWith('index.html')) {
        path = path.slice(0, -'index.html'.length).replace(/\/+$/, '');
    }
    return path || '/';
}

function isCurrentHref(href) {
    if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) {
        return false;
    }
    const here = normalizePath(window.location.pathname);
    const there = normalizePath(new URL(href, window.location.href).pathname);
    if (here === there) return true;
    return there.endsWith('/private-events') && here.startsWith(there + '/');
}

function isExplorePage() {
    return EXPLORE_PAGES.some((page) => isCurrentHref(BASE + page));
}

const headerHTML = `
    <header class="site-header" id="siteHeader">
        <div class="nav-shell">
            <div class="nav-left">
                <a href="https://www.exploretock.com/canlis/" target="_blank" rel="noreferrer" class="btn-reserve">
                    Reserve
                </a>
            </div>

            <div class="nav-center">
                <a href="${BASE}index.html" class="logo" aria-label="Canlis Home">Canlis</a>
            </div>

            <div class="nav-right">
                <div class="nav-actions">
                    <button
                        class="explore-toggle"
                        id="exploreToggle"
                        type="button"
                        aria-expanded="false"
                        aria-haspopup="menu"
                        aria-controls="exploreMenu"
                    >
                        <span>Explore</span>
                        <span class="explore-caret" aria-hidden="true"></span>
                    </button>
                    <div class="explore-menu" id="exploreMenu" role="menu" aria-label="Explore">
                        <a href="${BASE}menu/index.html" role="menuitem">Menu</a>
                        <a href="${BASE}story/index.html" role="menuitem">Our Story</a>
                        <a href="${BASE}wine/index.html" role="menuitem">Wine</a>
                        <a href="${BASE}lounge/index.html" role="menuitem">The Lounge</a>
                        <a href="${BASE}careers/index.html" role="menuitem">Careers</a>
                        <a href="${BASE}reservations/index.html" role="menuitem">Reservations</a>
                        <a href="${BASE}giftcards/index.html" role="menuitem">Gift Cards</a>
                    </div>
                </div>

                <a href="${BASE}private-events/index.html" class="nav-link-item">Private Events</a>

                <button
                    class="hamburger"
                    id="hamburger"
                    type="button"
                    aria-label="Open navigation"
                    aria-expanded="false"
                    aria-controls="mobileNav"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </header>
    <button
        class="mobile-nav-close"
        id="mobileNavClose"
        type="button"
        aria-label="Close navigation"
    >
        <span></span>
        <span></span>
    </button>
    <nav class="mobile-nav" id="mobileNav" aria-label="Mobile Navigation" aria-hidden="true">
        <a href="${BASE}menu/index.html">Menu</a>
        <a href="${BASE}story/index.html">Our Story</a>
        <a href="${BASE}wine/index.html">Wine</a>
        <a href="${BASE}lounge/index.html">The Lounge</a>
        <a href="${BASE}careers/index.html">Careers</a>
        <a href="${BASE}reservations/index.html">Reservations</a>
        <a href="${BASE}giftcards/index.html">Gift Cards</a>
        <a href="${BASE}private-events/index.html" class="mobile-private-events">Private Events</a>
    </nav>
`;

const footerHTML = `
    <footer class="site-footer">
        <div class="container footer-shell">
            <div class="footer-grid">
                <div class="footer-col footer-col--brand">
                    <a href="${BASE}index.html" class="footer-logo">CANLIS</a>
                    <p class="footer-tagline">Seattle's family-owned fine dining since 1950.</p>
                    <p class="footer-award">Winner of three James Beard Awards and twenty-nine consecutive Wine Spectator Grand Awards</p>
                    <a href="https://www.relaischateaux.com/us/restaurant/canlis/" target="_blank" rel="noreferrer" class="footer-relais-link" aria-label="Relais &amp; Châteaux">
                        <img class="footer-relais-logo" src="${BASE}uploads/relais2.svg" alt="">
                    </a>
                </div>

                <div class="footer-col">
                    <div class="footer-heading">Explore</div>
                    <nav aria-label="Footer Navigation">
                        <a href="${BASE}menu/index.html">Menu</a>
                        <a href="${BASE}story/index.html">Our Story</a>
                        <a href="${BASE}wine/index.html">Wine</a>
                        <a href="${BASE}lounge/index.html">The Lounge</a>
                    </nav>
                </div>

                <div class="footer-col">
                    <div class="footer-heading">Hospitality &amp; Careers</div>
                    <p class="footer-copy">Most frequently asked questions on dietary restrictions, attire, children, and cancellations. <a href="${BASE}reservations/index.html" aria-label="More information on dietary restrictions, attire, children, and cancellations"><em>Before your visit</em></a></p>
                    <nav aria-label="Hospitality Navigation">
                        <a href="${BASE}private-events/index.html">Private Events</a>
                        <a href="${BASE}careers/index.html">Careers</a>
                        <a href="https://www.exploretock.com/canlis/" target="_blank" rel="noreferrer" class="footer-highlight-link">Reserve</a>
                    </nav>
                </div>

                <div class="footer-col footer-col--contact">
                    <div class="footer-heading">Visit Us</div>
                    <address class="footer-address">
                        <p>2576 Aurora Ave N, Seattle, WA 98109<br><a href="https://maps.app.goo.gl/mZ3wEHvjgAq7eY3P7" target="_blank" rel="noreferrer"><em>Get directions</em></a></p>
                        <p><a href="tel:2062833313" aria-label="Call the restaurant">(206) 283-3313</a></p>
                        <p><a href="mailto:reservations@canlis.com" aria-label="Email the restaurant">reservations@canlis.com</a></p>
                    </address>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2026 Canlis Restaurant. All rights reserved.</p>
                <a href="#top" class="back-to-top" id="backToTopBtn" aria-label="Back to top of page">Back to top ↑</a>
            </div>
            <div class="footer-disclaimer">
                <p>This website is an independent redesign concept created for portfolio and demonstration purposes. It is not affiliated with, endorsed by, or officially connected to Canlis. Canlis and its associated trademarks, branding, imagery, and content belong to their respective owners.</p>
            </div>
        </div>
    </footer>
`;

document.addEventListener('DOMContentLoaded', () => {
    if (!document.body.id) document.body.id = 'top';

    const headerPlaceholder = document.getElementById('header-placeholder') || document.querySelector('header');
    if (headerPlaceholder) {
        headerPlaceholder.outerHTML = headerHTML;
    } else {
        document.body.insertAdjacentHTML('afterbegin', headerHTML);
    }

    const footerPlaceholder = document.getElementById('footer-placeholder') || document.querySelector('footer');
    if (footerPlaceholder) {
        footerPlaceholder.outerHTML = footerHTML;
    } else {
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }

    markActiveLinks();
    initHeaderEvents();
});

function markActiveLinks() {
    document.querySelectorAll('.explore-menu a, .mobile-nav a, .nav-link-item, .footer-col nav a').forEach(link => {
        if (isCurrentHref(link.getAttribute('href'))) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });

    if (isExplorePage()) {
        document.getElementById('exploreToggle')?.classList.add('active');
    }
}

function initHeaderEvents() {
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavClose = document.getElementById('mobileNavClose');
    const header = document.getElementById('siteHeader');
    const exploreToggle = document.getElementById('exploreToggle');
    const exploreMenu = document.getElementById('exploreMenu');
    const backToTopBtn = document.getElementById('backToTopBtn');

    const closeExploreMenu = () => {
        exploreMenu?.classList.remove('active');
        exploreToggle?.setAttribute('aria-expanded', 'false');
    };

    const closeMobileNav = () => {
        mobileNav?.classList.remove('active');
        hamburger?.classList.remove('active');
        hamburger?.setAttribute('aria-expanded', 'false');
        hamburger?.setAttribute('aria-label', 'Open navigation');
        mobileNav?.setAttribute('aria-hidden', 'true');
        mobileNavClose?.classList.remove('active');
        mobileNavClose?.setAttribute('aria-hidden', 'true');
        header?.classList.remove('menu-open');
        document.body.classList.remove('nav-open');
    };

    const openMobileNav = () => {
        mobileNav?.classList.add('active');
        hamburger?.classList.add('active');
        hamburger?.setAttribute('aria-expanded', 'true');
        hamburger?.setAttribute('aria-label', 'Close navigation');
        mobileNav?.setAttribute('aria-hidden', 'false');
        mobileNavClose?.classList.add('active');
        mobileNavClose?.setAttribute('aria-hidden', 'false');
        header?.classList.add('menu-open');
        document.body.classList.add('nav-open');
    };

    const toggleMobileNav = () => {
        const isActive = mobileNav?.classList.contains('active');
        if (isActive) {
            closeMobileNav();
        } else {
            openMobileNav();
        }
    };

    if (exploreToggle && exploreMenu) {
        exploreToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isExpanded = exploreToggle.getAttribute('aria-expanded') === 'true';
            exploreToggle.setAttribute('aria-expanded', String(!isExpanded));
            exploreMenu.classList.toggle('active');
        });

        exploreMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeExploreMenu);
        });

        document.addEventListener('click', (e) => {
            if (!exploreToggle.contains(e.target) && !exploreMenu.contains(e.target)) {
                closeExploreMenu();
            }
        });
    }

    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMobileNav();
        });

        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMobileNav);
        });

        /* Tap on the drawer's blank space (not on a link) also dismisses it.
           The drawer covers the screen, so this acts as an outside-click handler. */
        mobileNav.addEventListener('click', (e) => {
            if (e.target === mobileNav) {
                closeMobileNav();
            }
        });
    }

    if (mobileNavClose) {
        mobileNavClose.addEventListener('click', (e) => {
            e.stopPropagation();
            closeMobileNav();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') {
            return;
        }
        closeExploreMenu();
        closeMobileNav();
    });

    backToTopBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        header?.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
}
