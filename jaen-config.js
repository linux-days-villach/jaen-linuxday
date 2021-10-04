module.exports = {
  remote: 'linux-day-villach/jaen-linuxday',
  initialHideUI: false, // optional hide UI on load
  plugins: {
    pages: {
      resolve: require('@snek-at/jaen-pages/jaen-register'),
      templates: [require('./src/templates/SamplePage.tsx')]
    }
  }
}
