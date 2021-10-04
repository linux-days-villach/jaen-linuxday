import {fields, JaenTemplate} from '@snek-at/jaen-pages'
import {Box, Container, Text} from '@chakra-ui/react'

const SamplePage: JaenTemplate = () => {
  return (
    <Box mt="25vh">
      <Container centerContent>
        <fields.ImageField
          fieldName="sample-image"
          initValue={{src: '', alt: 'sampleimage'}}
        />
        <Text mt="5">
          <fields.TextField
            fieldName="sample-text"
            initValue="<p>Fill me</p>"
            rtf={true}
          />
        </Text>
      </Container>
    </Box>
  )
}

SamplePage.TemplateName = 'SamplePage'

export default SamplePage
