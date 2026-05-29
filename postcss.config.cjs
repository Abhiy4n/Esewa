const tailwindcss = require('tailwindcss/lib/plugin.js');
const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        tailwindcss(),
        autoprefixer(),
    ],
};
