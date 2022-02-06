module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: { 
        'highlight1': '#FF00B8',
        'highlight2': '#00C2FF',
        'neutral':    'var(--d-neutral)',
        'background': 'var(--d-background)', 
      },
    },
  },
  plugins: [],
}
