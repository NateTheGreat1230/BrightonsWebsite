const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons");
/** @type {import('tailwindcss').Config} */
module.exports = {
    plugins: [
        iconsPlugin({
            collections: getIconCollections(["ri", "ep"]),
        }),
        require("@tailwindcss/typography"),
    ],
    theme: {
        extend: {
            colors: {
                'text': 'var(--text)',
                'background': 'var(--background)',
                'primary': 'var(--primary)',
                'secondary': 'var(--secondary)',
                'accent': 'var(--accent)',
            },
            fontFamily: {
            heading: 'Cairo',
            body: 'Roboto Mono',
        },
        },
    },
};