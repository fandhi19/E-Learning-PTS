
      const themeToggleBtn = document.getElementById("themeToggleBtn");
      if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
          const isDark = document.documentElement.classList.toggle("dark");
          localStorage.setItem("theme", isDark ? "dark" : "light");
        });
      }
    