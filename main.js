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

(() => {
    const openers = document.querySelectorAll("[data-modal-target]");
    const closeButtons = document.querySelectorAll("[data-modal-close]");

    if (!openers.length) {
        return;
    }

    const openModal = (modal) => {
        if (!modal) {
            return;
        }
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
    };

    const closeModal = (modal) => {
        if (!modal) {
            return;
        }
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
    };

    openers.forEach((button) => {
        button.addEventListener("click", () => {
            const targetId = button.dataset.modalTarget;
            const modal = document.getElementById(targetId);
            openModal(modal);
        });
    });

    closeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const modal = button.closest(".modal");
            closeModal(modal);
        });
    });

    document.addEventListener("click", (event) => {
        const target = event.target;
        if (!(target instanceof HTMLElement)) {
            return;
        }
        if (!target.classList.contains("modal")) {
            return;
        }
        closeModal(target);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") {
            return;
        }
        const modal = document.querySelector(".modal.is-open");
        closeModal(modal);
    });
})();
