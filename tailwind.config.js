/** @type {import('tailwindcss').Config} */
module.exports = {
  /* couldn't make tailwind work and the issue was b/c the content path was 
  wrong, I originally had it as ./vekt/client/component, can just be ./client*/
  content: ['./client/**/*.{js,jsx,html}'],
  theme: {
    extend: {},
  },
  plugins: [],
}

