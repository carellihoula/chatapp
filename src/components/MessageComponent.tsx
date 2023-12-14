import styled from "styled-components"
type Props = {
    isSender: boolean;
}

type MessageContentProps = {
    sender: boolean;
}

const MessageComponent:React.FC<Props> = ({isSender}) => {

  return (
    <Messagestyled>
      
      <MessageContent sender={isSender}>
            I'm a software developer
      </MessageContent>
    </Messagestyled>
  )
}

const Messagestyled = styled.div`
display: flex;

`

const MessageContent = styled.div<MessageContentProps>`
    display: flex;
    width: 200px;
    padding: 8px 19px;
    font-family: 'Work Sans';
    align-items: flex-start;
    gap: 10px;
     //20px 20px 2px 20px'
    border-radius:${props => props.sender ? '2px 20px 2px 20px' : '2px 20px 2px 20px'};
    background: #e6e4e4;
    margin-left:-10px;

`

export default MessageComponent
