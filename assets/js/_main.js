/* ==========================================================================
   Various functions that we want to use within the template
   ========================================================================== */

// Always follow the current system preference, ignoring saved manual choices.
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
const determineComputedTheme = () => systemTheme.matches ? "dark" : "light";

const setTheme = () => {
  if (systemTheme.matches) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
};
setTheme();
systemTheme.addEventListener("change", setTheme);

/* ==========================================================================
   Plotly integration script so that Markdown codeblocks will be rendered
   ========================================================================== */

// Keep the original chart data so system theme changes can render it again.
let plotlyElements = document.querySelectorAll("pre>code.language-plotly");
if (plotlyElements.length > 0) {
  const initializePlots = async () => {
      const { plotlyDarkLayout, plotlyLightLayout } = await import('./theme.js');
      const plots = Array.from(plotlyElements, (elem) => {
        // Parse the Plotly JSON data and hide it
        var jsonData = JSON.parse(elem.textContent);
        elem.parentElement.classList.add("hidden");

        // Add the Plotly node
        let chartElement = document.createElement("div");
        elem.parentElement.after(chartElement);

        return { chartElement, jsonData };
      });
      const renderPlots = () => plots.forEach(({ chartElement, jsonData }) => {
        const theme = (determineComputedTheme() === "dark") ? plotlyDarkLayout : plotlyLightLayout;
        const layout = {
          ...jsonData.layout,
          template: { ...theme, ...jsonData.layout?.template }
        };
        Plotly.react(chartElement, jsonData.data, layout);
      });
      renderPlots();
      systemTheme.addEventListener("change", renderPlots);
  };
  const loadPlots = () => initializePlots().catch(console.error);
  if (document.readyState === "complete") {
    loadPlots();
  } else {
    window.addEventListener("load", loadPlots, { once: true });
  }
}

/* ==========================================================================
   Actions that should occur when the page has been fully loaded
   ========================================================================== */

// Add small visual markers without changing the news text or its Markdown source.
document.querySelectorAll('.news-timeline > li').forEach((item) => {
  const text = item.textContent.toLowerCase();
  item.dataset.newsKind = /award|scholarship|grant/.test(text)
    ? 'award' : /open-sourc/.test(text) ? 'release' : 'research';
});

// Reveal only content below the initial viewport. Everything remains visible
// without JS or IntersectionObserver, and reduced-motion preferences are respected.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (!isIntersecting) return;
      target.classList.remove('reveal-pending');
      target.classList.add('reveal-entering');
      target.addEventListener('animationend', () => {
        target.classList.remove('reveal-entering');
      }, { once: true });
      revealObserver.unobserve(target);
    });
  }, { threshold: 0.05 });

  document.querySelectorAll('.publication-card, .news-timeline > li').forEach((item) => {
    if (item.getBoundingClientRect().top >= window.innerHeight) {
      item.classList.add('reveal-pending');
      revealObserver.observe(item);
    }
  });

  reducedMotion.addEventListener('change', ({ matches }) => {
    if (!matches) return;
    revealObserver.disconnect();
    document.querySelectorAll('.reveal-pending, .reveal-entering').forEach((item) => {
      item.classList.remove('reveal-pending', 'reveal-entering');
    });
  });
}

$(document).ready(function () {
  // SCSS SETTINGS - These should be the same as the settings in the relevant files 
  const scssLarge = 925;          // pixels, from /_sass/_themes.scss
  const scssMastheadHeight = 70;  // pixels, from the current theme (e.g., /_sass/theme/_default.scss)

  // Enable the sticky footer
  var bumpIt = function () {
    $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
  }
  $(window).resize(function () {
    didResize = true;
  });
  setInterval(function () {
    if (didResize) {
      didResize = false;
      bumpIt();
    }}, 250);
  var didResize = false;
  bumpIt();

  // FitVids init
  fitvids();

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function () {
    $(".author__urls").fadeToggle("fast", function () { });
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // Restore the follow menu if toggled on a window resize
  jQuery(window).on('resize', function () {
    if ($('.author__urls.social-icons').css('display') == 'none' && $(window).width() >= scssLarge) {
      $(".author__urls").css('display', 'block')
    }
  });

  // Init smooth scroll, this needs to be slightly more than then fixed masthead height
  $("a").smoothScroll({
    offset: -scssMastheadHeight,
    preventDefault: false,
  });

});
