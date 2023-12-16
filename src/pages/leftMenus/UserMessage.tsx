import React from 'react'
import styled from 'styled-components'
import profileImage from '../../assets/images/profileIcon.png'
import IconProfilComponent from '../../components/IconProfilComponent'

const UserMessage:React.FC = () => {
  return (
    <UserMessageStyled>
        <UserPhotoAndMessage>
            <div>
            <IconProfilComponent imageUrl={profileImage}/>
            </div>
            <div className='name-message-author'>
                <p className="name">Merry Longs</p>
                <p className="message">Hello sir I’ve sent you the link</p>
            </div>
        </UserPhotoAndMessage>
        
        <div className='time-and-messages-unread'>
            <small>12:28</small>
            <p>203</p>
        </div>
      
    </UserMessageStyled>
  )
}

const UserMessageStyled = styled.div`
display: flex;
justify-content: space-between;
padding : 0 15px;
align-items: center;
gap:15px;

.name-message-author{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    .name{
        color: var(--Color-3, #6B7C85);
        font-family: 'Work Sans';
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: -0.5px;
    }
    .message{
        color: var(--Color-3, #6B7C85);
        font-family: Work Sans;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.4px;
    }
}
.time-and-messages-unread{
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    gap: 10px;
}
.time-and-messages-unread p{
    border-radius: 10px;
    background: var(--Green-1, #25D366);
    padding: 5px; 
    color: #FFF;
    font-family: 'Work Sans';
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.35px;
}

.time-and-messages-unread small{
    color: var(--Color-3, #6B7C85);
    font-family: 'Work Sans';
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.35px;
}
`

const UserPhotoAndMessage = styled.div`
display: flex;
gap: 10px;

`

export default UserMessage
