module.exports = {
  remote: 'linux-days-villach/jaen-linuxday',
  initialHideUI: false, // optional hide UI on load
  plugins: {
    pages: {
      resolve: require('@snek-at/jaen-pages/jaen-register'),
      templates: []
    }
  }
}
