//import React from 'react'
import styled from 'styled-components'
import TextZoneComponent from '../../components/TextZoneComponent'
import IconStandard from '../../components/IconStandard'
import { BsEmojiSmile } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";
import { BiSolidMicrophone } from "react-icons/bi";

const ChatAreaRightBottom = () => {
  return (
    <ChatAreaRightBottomStyled>
      <ContainerComponent >
        <IconStandard size={24} Icon={BsEmojiSmile}/>
        <IconStandard size={24} Icon={GrAttachment}/>
        <TextZoneComponent />
        <IconStandard size={24} Icon={BiSolidMicrophone}/> 
      </ContainerComponent>      
    </ChatAreaRightBottomStyled>
  )
}

const ChatAreaRightBottomStyled = styled.div`
display:flex;
align-items: center;
justify-content:center;
background: #F0F2F5;
width: 100%;
height: 90px;
position: absolute;
bottom: 0; 
`

const ContainerComponent = styled.div`
display: flex;
align-items: center;
//justify-content: center;
gap:25px;

`

export default ChatAreaRightBottom
