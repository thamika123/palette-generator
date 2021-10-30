module.exports = {
    purge: [
        "./src/**/*.html",
        "./src/**/*.jsx"
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            "sans": ["Lato"],
        },            
        extend: {
            boxShadow: {
                "lg": "5px 10px 30px #e5e7eb",
            },
            fontSize: {
                "lg": "1.25rem",
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
