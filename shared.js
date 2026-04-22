const TEAM_LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 60" height="36">
  <text x="4" y="46" font-family="'Barlow Condensed',sans-serif" font-weight="900" font-size="52" fill="#B02233" letter-spacing="-2">7415</text>
</svg>`;

const NAV_HTML = `
<nav id="mainNav">
  <a href="index.html" class="nav-left" aria-label="Team 7415 Home">
    <span style="font-family:\'Frutiger\',\'Nunito Sans\',Arial,sans-serif;font-weight:900;font-size:1.8rem;color:#B02233;letter-spacing:-0.02em;line-height:1">7415</span>
    <div class="nav-sep"></div>
    <span class="nav-name">Jaguar Robotics <span style="color:rgba(160,168,176,0.5);font-weight:400">Sponsored By Feit Electric</span></span>
  </a>
  <ul class="nav-links" id="navLinks">
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="robots.html">Robots</a></li>
    <li><a href="sponsors.html">Sponsors</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
  <button class="nav-mobile-btn" id="menuBtn" aria-label="Open menu">☰</button>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-top">
      <div>
        <a href="index.html">
          <img src="logo.jpg" alt="Team 7415" class="footer-logo-img" onerror="this.outerHTML='<span style=\\'font-family:Barlow Condensed,sans-serif;font-weight:900;font-size:1.2rem;color:#B02233\\'>7415 JAGUAR ROBOTICS</span>'">
        </a>
        <p class="footer-tagline">deToledo High School · West Hills, CA<br>Member of Team Anvil ⚒️</p>
        <div class="footer-socials">
          <a href="https://instagram.com/team7415" target="_blank" rel="noopener" class="social-btn" title="Instagram">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://github.com/team7415" target="_blank" rel="noopener" class="social-btn" title="GitHub">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="https://youtube.com/@team7415" target="_blank" rel="noopener" class="social-btn" title="YouTube">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
          </a>
          <a href="https://www.thebluealliance.com/team/7415" target="_blank" rel="noopener" class="social-btn" title="The Blue Alliance">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 22 7 22 17 12 22 2 17 2 7"/><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="7" x2="22" y2="7"/><line x1="2" y1="17" x2="22" y2="17"/></svg>
          </a>
        </div>
      </div>
      <div class="footer-nav-group">
        <h4>Pages</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="robots.html">Robots</a></li>
          <li><a href="sponsors.html">Sponsors</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-nav-group">
        <h4>External</h4>
        <ul>
          <li><a href="https://www.firstinspires.org" target="_blank">FIRST Robotics</a></li>
          <li><a href="https://www.thebluealliance.com/team/7415" target="_blank">The Blue Alliance</a></li>
          <li><a href="https://www.dths.org" target="_blank">deToledo High School</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">© 2025 FRC Team 7415 Jaguar Robotics · deToledo High School · West Hills, CA</span>
      <span class="footer-anvil">⚒️ Member of Team Anvil</span>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // Active nav link
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  // Mobile menu
  const btn = document.getElementById('menuBtn');
  const links = document.getElementById('navLinks');
  if (btn && links) {
    btn.addEventListener('click', () => {
      links.classList.toggle('open');
      btn.textContent = links.classList.contains('open') ? '✕' : '☰';
    });
  }

  // Scroll reveal
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('in'), i * 80);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.07 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
});
