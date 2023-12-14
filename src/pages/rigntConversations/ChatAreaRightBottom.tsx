//import React from 'react'
import styled from 'styled-components'
import TextZoneComponent from '../../components/TextZoneComponent'

const ChatAreaRightBottom = () => {
  return (
    <ChatAreaRightBottomStyled>
        <TextZoneComponent />
        
    </ChatAreaRightBottomStyled>
  )
}

const ChatAreaRightBottomStyled = styled.div`
display:flex;
align-items: center;
//justify-content:space-around;
background: #F0F2F5;
width: 100%;
height: 90px;
position: fixed;
bottom: 0;
  
`

export default ChatAreaRightBottom
