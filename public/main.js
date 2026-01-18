(() => {
    const toggle = document.getElementById("theme-toggle");
    if (!toggle) {
        return;
    }

    const root = document.documentElement;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const getActiveTheme = () => {
        const stored = localStorage.getItem("theme");
        if (stored) {
            return stored;
        }
        return mediaQuery.matches ? "dark" : "light";
    };

    const labelLight = toggle.dataset.labelLight || "Dark Mode";
    const labelDark = toggle.dataset.labelDark || "Light Mode";

    const updateToggleLabel = (theme) => {
        toggle.textContent = theme === "dark" ? labelDark : labelLight;
        toggle.setAttribute("aria-pressed", theme === "dark");
    };

    const applyStoredTheme = () => {
        const stored = localStorage.getItem("theme");
        if (stored) {
            root.setAttribute("data-theme", stored);
        } else {
            root.removeAttribute("data-theme");
        }
        updateToggleLabel(getActiveTheme());
    };

    toggle.addEventListener("click", () => {
        const current = getActiveTheme();
        const next = current === "dark" ? "light" : "dark";
        localStorage.setItem("theme", next);
        root.setAttribute("data-theme", next);
        updateToggleLabel(next);
    });

    mediaQuery.addEventListener("change", () => {
        if (localStorage.getItem("theme")) {
            return;
        }
        updateToggleLabel(mediaQuery.matches ? "dark" : "light");
    });

    applyStoredTheme();
})();
