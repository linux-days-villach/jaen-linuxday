import styled from '@emotion/styled'
import {keyframes} from '@emotion/react'
import {Keyframes} from '@emotion/serialize'

import {Box} from '@chakra-ui/react'

const float: Keyframes = keyframes`
	0% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
	50% {
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(-20px);
	}
	100% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
`

export const SponsorImage = styled(Box)`
  .sponsorimagediv {
    width: 300px;
    height: 180px;
    animation: ${float};
    animation-duration: 6s;
    animation-iteration-count: infinite;
    animation-timing-function: 'ease-in-out';
    :nth-child(4n) {
      animation-delay: 1s;
    }
    :nth-child(4n - 1) {
      animation-delay: 2s;
    }
    :nth-child(4n - 2) {
      animation-delay: 3s;
    }
  }
  .sponsorimage {
    object-fit: contain;
  }
`
