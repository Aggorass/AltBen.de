document.getElementById("toggleColor").addEventListener("click", () => {
    const root = document.documentElement;
    root.style.setProperty("--farbe1", 
      root.style.getPropertyValue("--farbe1") === "#00ffff" ? "#ff00ff" : "#00ffff"
    );
  });
  