/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {
            fontSize: {
                'xs': '12px',
                '2xs': '10px',
                '3xs': '8px'
            },
            keyframes: {
                'fade': {
                    from: {
                        opacity: 0.8
                    },
                    to: {
                        opacity: 1
                    }
                },
                'fade-back': {
                    from: {
                        opacity: 0.8
                    },
                    to: {
                        opacity: 1
                    }
                },
                'fade-in': {
                    from: { opacity: 0, transform: 'translateY(-10px)' },
                    to: { opacity: 1, transform: 'translateY(0)' }
                },
                'text-in-out':{
                    from: {width: '80%'},
                    '30%': {width: 0},
                    to: {width: '80%'},
                },
                'text-in-out-re':{
                    from: {width: '80%'},
                    '30%': {width: 0},
                    to: {width: '80%'},
                },
                'text-slide-in':{
                    from: {transform: 'translateX(0)'},
                    '25%': {transform: 'translateX(-100%)', opacity: 0},
                    '50%': {transform: 'translateX(100%)'},
                    '75%': { opacity: 1},
                    to: {transform: 'translateX(0)'},
                },
                'text-slide-in-re':{
                    from: {transform: 'translateX(0)'},
                    '50%': {transform: 'translateX(-100%)'},
                    to: {transform: 'translateX(0)'},
                },
                
                // 'text-in-out-re':{
                //     from:{opacity: 0},
                //     '50%':{transform: 'translateX(-200%)'},
                //     '70%': {opacity: 1},
                //     to: {transform: 'translateX(0)'}
                // },
                'fade-tb' : {
                    from : {opacity: 0, transform: 'translateY(-10px)'},
                    to : {opacity: 1, transform: 'translateY(0)'},
                }
            },
            animation: {
                fade: 'fade 300ms ease forwards',
                fadeback: 'fade-back 300ms ease forwards',
                'fade-in': 'fade-in 1s ease forwards',
                'fade-in-out' : 'text-in-out 3s ease forwards',
                'fade-in-out-re' : 'text-in-out-re 3s ease forwards',
                'text-slide' : 'text-slide-in 2s ease-in forwards',
                'text-slide-re' : 'text-slide-in-re 2s ease-out reverse forwards',
                'fade-tb' : 'fade-tb 2s ease-in-out forwards',
                'fade-tb-re' : 'fade-tb 2s ease-in-out forwards reverse',
            }
        },
    },
    plugins: [
    ]
}

