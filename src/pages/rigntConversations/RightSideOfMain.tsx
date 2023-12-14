import {FC} from 'react'
import styled from 'styled-components'
import HeaderRight from './HeaderRight'
import ChatAreaRightBottom from './ChatAreaRightBottom'
import bg from '../../assets/images/backgroundWhatsapp.jpeg'
import MessageComponent from '../../components/MessageComponent'

const RightSideOfMain: FC = () => {
  return (
    <RightSideOfMainStyle>
      <HeaderRight />
      <ConversationArea>
          <MessageComponent isSender={true}/>
      </ConversationArea>
      <ChatAreaRightBottom />
    </RightSideOfMainStyle>
  )
}

const RightSideOfMainStyle = styled.div`
    display: flex;
    flex-direction: column;
    background: url(${bg}), lightgray 50% / cover no-repeat;
    width: 70%;
    height: 100%;
    position: relative;
`

const ConversationArea = styled.div`
    display: flex;
    justify-content: center;
    margin-top:100px;
`

export default RightSideOfMain
