import {FC, useState} from 'react'
import styled from 'styled-components'
import HeaderRight from './HeaderRight'
import ChatAreaRightBottom from './ChatAreaRightBottom'
import bg from '../../assets/images/backgroundWhatsapp.jpeg'
import MessageComponent from '../../components/MessageComponent'
import {messages} from '../../../utils'

interface ConversationAreaProps {
  isSender: boolean
}


const RightSideOfMain: FC = () => {
  const [isSender, setisSender] = useState<boolean>(false)

  return (
    <RightSideOfMainStyle>
      <HeaderRight />
      <ConversationArea>
          {
            messages.map((msg,index) =>{
              const time = new Date(msg.timestamp).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
              return (
                <StyledMessageComponent isSender={msg.isSender} key={index}>
                  <MessageComponent isSender={msg.isSender} message={msg.text} time={time}/>
                </StyledMessageComponent>
              )
            })
          }
          
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
    flex-direction: column;
    padding: 20px 40px;
    
    
`

const StyledMessageComponent = styled.div<ConversationAreaProps>`
    align-self: ${props => props.isSender ? 'flex-start' : 'flex-end'};
    /* Autres styles pour le composant MessageComponent */
`;

export default RightSideOfMain
