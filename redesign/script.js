/* ==========================================
   HEADER WITH EXPLORE DROPDOWN & FOOTER ENGINE
   ========================================== */

const EXPLORE_PAGES = [
    'menu.html',
    'story.html',
    'wine.html',
    'lounge.html',
    'careers.html',
    'private-events/index.html',
    'reservations.html',
];

/* Resolve a base prefix so injected header/footer links work from any folder depth
   (root pages, /private-events/, and /private-events/<sub>/). */
function getBasePrefix() {
    const segments = window.location.pathname.replace(/\/+$/, '').split('/').filter(Boolean);
    if (segments.length === 0) return '';
    const last = segments[segments.length - 1];
    const isIndex = last === 'index.html' || !last.includes('.');
    if (!isIndex) return '';                                   // e.g. /redesign/wine.html
    const parent = segments[segments.length - 2] || '';
    if (parent === 'private-events') return '../';             // /redesign/private-events/
    if (segments[segments.length - 3] === 'private-events') return '../../'; // /redesign/private-events/<sub>/
    return '';                                                 // /redesign/index.html
}

const BASE = getBasePrefix();

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
                        aria-haspopup="true"
                        aria-controls="exploreMenu"
                    >
                        <span>Explore</span>
                        <span class="explore-caret" aria-hidden="true"></span>
                    </button>
                    <div class="explore-menu" id="exploreMenu" role="menu" aria-label="Explore">
                        <a href="${BASE}menu.html" role="menuitem">Menu</a>
                        <a href="${BASE}story.html" role="menuitem">Our Story</a>
                        <a href="${BASE}wine.html" role="menuitem">Wine</a>
                        <a href="${BASE}lounge.html" role="menuitem">The Lounge</a>
                        <a href="${BASE}careers.html" role="menuitem">Careers</a>
                        <a href="${BASE}reservations.html" role="menuitem">Reservations</a>
                        <a href="${BASE}../giftcards.canlis.com/index.html" role="menuitem" target="_blank" rel="noreferrer">Gift Cards</a>
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

        <nav class="mobile-nav" id="mobileNav" aria-label="Mobile Navigation" aria-hidden="true">
            <div class="mobile-explore">
                <button
                    class="mobile-explore-toggle"
                    id="mobileExploreToggle"
                    type="button"
                    aria-expanded="false"
                    aria-controls="mobileExploreMenu"
                >
                    <span>Explore</span>
                    <span class="explore-caret" aria-hidden="true"></span>
                </button>
                <div class="mobile-explore-menu" id="mobileExploreMenu">
                    <a href="${BASE}menu.html">Menu</a>
                    <a href="${BASE}story.html">Our Story</a>
                    <a href="${BASE}wine.html">Wine</a>
                    <a href="${BASE}lounge.html">The Lounge</a>
                    <a href="${BASE}careers.html">Careers</a>
                    <a href="${BASE}reservations.html">Reservations</a>
                    <a href="${BASE}../giftcards.canlis.com/index.html" target="_blank" rel="noreferrer">Gift Cards</a>
                </div>
            </div>
            <a href="${BASE}private-events/index.html" class="mobile-private-events">Private Events</a>
        </nav>
    </header>
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
                        <a href="${BASE}menu.html">Menu</a>
                        <a href="${BASE}story.html">Our Story</a>
                        <a href="${BASE}wine.html">Wine</a>
                        <a href="${BASE}lounge.html">The Lounge</a>
                    </nav>
                </div>

                <div class="footer-col">
                    <div class="footer-heading">Hospitality &amp; Careers</div>
                    <p class="footer-copy">Most frequently asked questions on dietary restrictions, attire, children, and cancellations. <a href="${BASE}reservations.html" aria-label="More information on dietary restrictions, attire, children, and cancellations"><em>Before your visit</em></a></p>
                    <nav aria-label="Hospitality Navigation">
                        <a href="${BASE}private-events/index.html">Private Events</a>
                        <a href="${BASE}careers.html">Careers</a>
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
        </div>
    </footer>
`;

document.addEventListener('DOMContentLoaded', () => {
    let currentFilename = window.location.pathname.split('/').filter(Boolean).pop() || 'index.html';
    if (!currentFilename.includes('.')) currentFilename = 'index.html';

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

    markActiveLinks(currentFilename);
    initHeaderEvents(currentFilename);
});

function markActiveLinks(currentFilename) {
    document.querySelectorAll('.explore-menu a, .mobile-explore-menu a, .mobile-nav > a, .footer-col nav a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentFilename) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });

    if (EXPLORE_PAGES.includes(currentFilename)) {
        document.getElementById('exploreToggle')?.classList.add('active');
        document.getElementById('mobileExploreToggle')?.classList.add('active');
    }
}

function initHeaderEvents(currentFilename) {
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');
    const header = document.getElementById('siteHeader');
    const exploreToggle = document.getElementById('exploreToggle');
    const exploreMenu = document.getElementById('exploreMenu');
    const mobileExploreToggle = document.getElementById('mobileExploreToggle');
    const mobileExploreMenu = document.getElementById('mobileExploreMenu');
    const backToTopBtn = document.getElementById('backToTopBtn');

    const closeExploreMenu = () => {
        exploreMenu?.classList.remove('active');
        exploreToggle?.setAttribute('aria-expanded', 'false');
    };

    const closeMobileNav = () => {
        mobileNav?.classList.remove('active');
        hamburger?.classList.remove('active');
        hamburger?.setAttribute('aria-expanded', 'false');
        mobileNav?.setAttribute('aria-hidden', 'true');
        header?.classList.remove('menu-open');
        document.body.classList.remove('nav-open');
    };

    const closeMobileExplore = () => {
        mobileExploreMenu?.classList.remove('active');
        mobileExploreToggle?.setAttribute('aria-expanded', 'false');
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

    if (mobileExploreToggle && mobileExploreMenu) {
        if (EXPLORE_PAGES.includes(currentFilename)) {
            mobileExploreMenu.classList.add('active');
            mobileExploreToggle.setAttribute('aria-expanded', 'true');
        }

        mobileExploreToggle.addEventListener('click', () => {
            const isExpanded = mobileExploreToggle.getAttribute('aria-expanded') === 'true';
            mobileExploreToggle.setAttribute('aria-expanded', String(!isExpanded));
            mobileExploreMenu.classList.toggle('active');
        });
    }

    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            const isActive = mobileNav.classList.toggle('active');
            hamburger.classList.toggle('active', isActive);
            hamburger.setAttribute('aria-expanded', String(isActive));
            hamburger.setAttribute('aria-label', isActive ? 'Close navigation' : 'Open navigation');
            mobileNav.setAttribute('aria-hidden', String(!isActive));
            header?.classList.toggle('menu-open', isActive);
            document.body.classList.toggle('nav-open', isActive);

            if (!isActive) {
                closeMobileExplore();
            }
        });

        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                closeMobileNav();
                closeMobileExplore();
            });
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') {
            return;
        }
        closeExploreMenu();
        closeMobileNav();
        closeMobileExplore();
    });

    backToTopBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        header?.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
}
