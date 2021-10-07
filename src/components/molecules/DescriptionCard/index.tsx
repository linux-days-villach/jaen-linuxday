
import {chakra, Heading, Box, Flex, useColorModeValue} from '@chakra-ui/react'

import {
  createLottie,
  Lottie,
  LottieFnFn,
  LottieFnResult
} from '@snek-at/react-lottie'

const backgrounds = [
  `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`
]

interface DescriptionCardProps {
  title: string
  lottie: React.ReactNode
  index: number
  text: React.ReactNode
}

const DescriptionCard = (props: DescriptionCardProps) => {
  const {title, lottie, index, text} = props
  
  const LottieAnimation: LottieFnFn = () => container => {
    let creator: LottieFnResult['creator']
    const containerProps: LottieFnResult['containerProps'] = {
      style: {width: "100%"}
    }
  
    creator = createLottie({
      container,
      animationData: lottie,
      loop: false
    })
  
    return {creator, containerProps}
  }

  return (
    <Lottie lottie={LottieAnimation()} forceReloadDeps={[LottieAnimation()]}>
      {({container, animation}) => (
        <Flex
          onMouseEnter={() =>
            animation.playSegments([0, animation.totalFrames], true)
          }
          boxShadow={'lg'}
          maxW={'640px'}
          direction={{base: 'column', lg: 'row'}}
          width={'full'}
          rounded={'xl'}
          p={10}
          justifyContent={'space-between'}
          position={'relative'}
          bg={useColorModeValue('white', 'gray.800')}
          _before={{
            content: '""',
            position: 'absolute',
            zIndex: '-1',
            height: 'full',
            maxW: '640px',
            width: 'full',
            filter: 'blur(40px)',
            transform: 'scale(0.98)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            top: 0,
            left: 0,
            backgroundImage: backgrounds[index % 4]
          }}>
            <Box
              width={{base: '150px', lg: '1000px'}}
              alignSelf={'center'}
              m={{base: '0 0 35px 0', lg: '0 35px 0 0'}}
            >
              {container}
            </Box>
          <Flex
            direction={'column'}
            textAlign={'left'}
            justifyContent={'space-between'}>
            <Heading fontFamily={'Ubuntu'} as="h5" size="lg">
              {title}
            </Heading>
            <chakra.p
              fontFamily={'Fira Sans'}
              fontWeight={'medium'}
              pt={4}>
              {text ||
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'}
            </chakra.p>
          </Flex>
        </Flex>
      )}
    </Lottie>

  )
}

export default DescriptionCard
