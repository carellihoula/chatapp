import {FC} from 'react'
import styled from 'styled-components'
import HeaderRight from './HeaderRight'
import ChatAreaRightBottom from './ChatAreaRightBottom'
import bg from '../../assets/images/backgroundWhatsapp.jpeg'

const RightSideOfMain: FC = () => {
  return (
    <RightSideOfMainStyle>
      <HeaderRight />
      <ChatAreaRightBottom />
    </RightSideOfMainStyle>
  )
}

const RightSideOfMainStyle = styled.div`
    background: url(${bg}), lightgray 50% / cover no-repeat;
    width: 70%;
    height: 100%;
`

export default RightSideOfMain
