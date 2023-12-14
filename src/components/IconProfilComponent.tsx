import styled from "styled-components"
import image from '../assets/images/profileIcon.png'

const IconProfilComponent = () => {

  return (
    <IconProfilComponentStyled>
        <img src ={image} alt="profile"/>
    </IconProfilComponentStyled>
  )
}
const IconProfilComponentStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    border: 2px solid #FFF ;
    width: 55px;
    img{
        width: 50px;
        height: 50px;
        border-radius: 50px;
    }
`

export default IconProfilComponent
