module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    fontFamily: {
      'sans': ['Roboto', '"Noto Sans TC"','sans-serif'],
    },
    container: {
      center: true,
      padding:{
        DEFAULT:'20px',
        md:'16px',
      },
    },
    extend: {
      colors :{
        'main':{ 
          light: '#FBF2F2',
          DEFAULT:'#AA0601',
          dark:'#650300',
        },
      },

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}