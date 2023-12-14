import {FC} from 'react'
import styled from 'styled-components'

const RightSideOfMain: FC = () => {
  return (
    <RightSideOfMainStyle>
      d
    </RightSideOfMainStyle>
  )
}

const RightSideOfMainStyle = styled.div`
    background: green;
    width: 70%;
    height: 100%;
`

export default RightSideOfMain
