const breakpoints = ['0em', '30em', '48em', '62em', '80em', '96em']

export const mq = breakpoints.map(bp => `@media (min-width: ${bp})`)
