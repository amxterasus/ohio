export const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <h1 class="logo">Ohio</h1>
        </div>
        <div class="nav-links">
          <a href="/" title="Home">
            Home
          </a>
          <a href="/docs" title="Docs">
            Docs
          </a>
          <a href="/api" title="API">
            API
          </a>
        </div>
        <div class="theme-icons">
          <svg
            class="dark size-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75
            0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635
            7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>

          <svg
            class="light size-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M12 3v1.5M12 19.5V21M5.636 5.636l1.061 1.061M16.303 16.303
            l1.061 1.061M3 12h1.5M19.5 12H21M5.636 18.364l1.061-1.061M16.303 7.697l1.061-1.061M12
            7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9z"
            />
          </svg>
        </div>
        <button id="hamburger" aria-label="Menu">
          <span style="display:block;width:24px;height:3px;background:#171717;border-radius:3px;"></span>
          <span style="display:block;width:24px;height:3px;background:#171717;border-radius:3px;"></span>
          <span style="display:block;width:24px;height:3px;background:#171717;border-radius:3px;"></span>
        </button>
      </nav>
      <div id="mobile-menu">
        <a href="/" title="Home">
          Home
        </a>
        <a href="/docs" title="Docs">
          Docs
        </a>
        <a href="/api" title="API">
          API
        </a>
      </div>
    </header>
  );
};
