module.exports = {
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                main: {
                    bg: '#050709',
                    font: '#291507',
                    fav: '#E3E1DC',
                },
                search: {
                    selected: '#979797',
                },
                numberDetail: {
                    selected: '#544439',
                    normal: '#E0E0E0',
                },
            },
        },
        fontFamily: {
            logo: '"Mystery Quest"',
            body: '"Montserrat"',
        },
        backgroundImage: (theme) => ({
            'home-cat':
                "url('/src/images/4c7c4af04c6f8215244645b0d95c06e4.png')",
            'popular-cat':
                "url('/src/images/5adeec61af9e8139176bef6da50ea692.png')",
            'logo-white': "url('/src/images/CatwikiLogoWhite.svg')",
            logo: "url('/src/images/CatwikiLogo.svg')",
        }),
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
