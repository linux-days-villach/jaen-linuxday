import myTheme from '../src/@snek-at/jaen/@chakra-ui/theme'

export const parameters = {
  chakra: {theme: myTheme},
  actions: {argTypesRegex: '^on[A-Z].*'},
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
