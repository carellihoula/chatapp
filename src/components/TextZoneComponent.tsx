//import React from 'react'

import styled from "styled-components"
import IconStandard from "./IconStandard"
import { MdPhotoCamera } from "react-icons/md";
import { ChangeEvent, FC, useState } from "react";

const TextZoneComponent: FC = () => {

  const [text, setText] = useState<string>('')

  const textAreaStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
    resize: 'none',
    width: '100%',
    paddingTop: '10px',
    boxSizing: 'border-box',
    minHeight: '100%',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
   
  }

  const handleChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }
  return (
    <TextZoneComponentStyled>
      <IconStandard Icon={MdPhotoCamera} size={24}/>
      <textarea  placeholder="type a message" 
        value={text}
        onChange={handleChange}
        style={textAreaStyles}
      />
      
    </TextZoneComponentStyled>
  )
}

const TextZoneComponentStyled = styled.div`
    
    display:flex;
    align-items: center;
    width: 100vh;
    height: 50px;
    gap: 10px;
    padding-left: 10px;
    border-radius: 10px;
    background: #FFF;
    textarea{   
    color: var(--Color-3, #6B7C85);
    font-family: 'Work Sans', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.35px;
    }

`
export default TextZoneComponent
