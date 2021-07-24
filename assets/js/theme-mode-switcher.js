let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#theme-mode-icon");
// console.log(darkMode);

// Check if dark mode is enabled
// if it's enabled, turn it off
//  if it's disabled, turn it off

const enableDarkMode = () => {
    // add the class darkmode to the body
    document.body.classList.add("darkmode");
    // update darkMode in the localStorage
    localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
    // add the class darkmode to the body
    document.body.classList.remove("darkmode");
    // update darkMode in the localStorage
    localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
    enableDarkMode();
}

darkModeToggle.addEventListener("click", () =>  {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode();
        console.log("enableDarkMode");
    }
    else {
        disableDarkMode();
        console.log("disableDarkMode");
    }

});