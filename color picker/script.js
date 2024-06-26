// Getting color picker input element
const colorPicker = document.getElementById('colorPicker');

// Getting hex code display element
const hexValue = document.getElementById('hexValue');

// Getting RGB code display element
const rgbValue = document.getElementById('rgbValue');

// Getting HSL code display element
const hslValue = document.getElementById('hslValue');

// Getting color circle element
const colorCircle = document.getElementById('colorCircle');

// Getting color palette container element
const colorPalette = document.getElementById('colorPalette');

// Event listener for color picker change
colorPicker.addEventListener('input', function() {
    const selectedColor = colorPicker.value; // Getting selected color value
    hexValue.textContent = selectedColor; // Displaying color's hex code
    const rgbColor = hexToRgb(selectedColor); // Converting hex to RGB
    rgbValue.textContent = `(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`; // Displaying RGB code
    const hslColor = rgbToHsl(rgbColor.r, rgbColor.g, rgbColor.b); // Converting RGB to HSL
    hslValue.textContent = `(${hslColor.h}, ${hslColor.s}%, ${hslColor.l}%)`; // Displaying HSL code
    colorCircle.style.backgroundColor = selectedColor; // Setting background color of color circle

    // Generate color palette for the selected color
    generateColorPalette(selectedColor);
});

// Function to generate color palette
function generateColorPalette(color) {
    // Clearing previous color palette if any
    colorPalette.innerHTML = '';

    // Generating lighter and darker shades of the selected color
    for (let i = 0; i <= 10; i++) {
        // Calculating lighter and darker shades based on iteration
        const lighterShade = lightenColor(color, i / 20);
        const darkerShade = darkenColor(color, i / 20);
        
        // Creating color box elements for lighter and darker shades
        const lighterColorBox = createColorBox(lighterShade);
        const darkerColorBox = createColorBox(darkerShade);

        // Appending color box elements to the color palette container
        colorPalette.appendChild(lighterColorBox);
        colorPalette.appendChild(darkerColorBox);
    }
}

// Function to create a color box element
function createColorBox(color) {
    const colorBox = document.createElement('div'); // Creating color box element
    colorBox.classList.add('color-box'); // Adding class to color box element
    colorBox.style.backgroundColor = color; // Setting background color of color box
    return colorBox;
}

// Function to lighten color
function lightenColor(color, amount) {
    return '#' + color.match(/[a-f0-9]{2}/g).map(function (channel) {
        return ('0' + Math.min(255, Math.round(parseInt(channel, 16) + 255 * amount)).toString(16)).slice(-2);
    }).join('');
}

// Function to darken color
function darkenColor(color, amount) {
    return '#' + color.match(/[a-f0-9]{2}/g).map(function (channel) {
        return ('0' + Math.max(0, Math.round(parseInt(channel, 16) - 255 * amount)).toString(16)).slice(-2);
    }).join('');
}

// Function to convert hex color to RGB
function hexToRgb(hex) {
    // Remove '#' if present
    hex = hex.replace(/^#/, '');
    // Convert to RGB
    const bigint = parseInt(hex, 16);
    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255
    };
}

// Function to convert RGB color to HSL
function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // achromatic
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }

    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        l: Math.round(l * 100)
    };
}
