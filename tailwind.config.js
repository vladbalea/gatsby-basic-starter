module.exports = {
    content: [
        "./src/pages/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        screens: {
            "compact": {"max": "600px"}, // 99.96% of phones in portrait
            "medium": {"min": "600px", "max": "840px"}, // 93.73% of tablets in portrait, large unfolded inner displays in portrait
            "expanded": {"min": "840px"}, // 97.22% of tablets in landscape, large unfolded inner displays in landscape
        },
        extend: {},
    },
    plugins: [],
}

