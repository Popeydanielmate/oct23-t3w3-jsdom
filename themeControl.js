const themes = {
    light: {
        background: "white",
        color: "darkgrey"
    },
    dark: {
        background: "darkgrey",
        color: "white"
    }
};

function changeCssTheme(themeName){
    // themes[themeName].variable
    for(const variable in themes[themeName]){
        document.documentElement.style.setProperty(`--${variable}`, themes[themeName][variable]);
        console.log("Updated CSS variable --" + variable);
    }
}

function setThemeToDark(){
    changeCssTheme("dark");
}

function setThemeToLight(){
    changeCssTheme("light");
}

function toggleCssTheme(){
    let currentBackgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--background");

    console.log("Current background color is: " + currentBackgroundColor);

    if (currentBackgroundColor == "white"){
        // we are already in light theme, set it to dark
    } else {
        // we are in dark theme, set it to light
    }
}




changeCssTheme("dark");