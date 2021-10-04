import {Box, Heading, Center} from '@chakra-ui/react'

import {fields} from '@snek-at/jaen-pages'

const IndexPage = () => {
  return (
    <Box>
      <Center mt="45vh">
        <Heading>
          <fields.TextField
            fieldName="home-text"
            initValue="<p>Hello World</p>"
          />
        </Heading>
      </Center>
    </Box>
  )
}
//#endregion

//#region > Exports
export default IndexPage
//#endregion
