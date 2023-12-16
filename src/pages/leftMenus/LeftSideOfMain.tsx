import {FC, useState} from 'react'
import styled from 'styled-components'
import HeaderLeft from './HeaderLeft'
import SearchBarComponent from '../../components/SearchBarComponent'
import { IoFilterSharp } from "react-icons/io5";
import DividerComponent from '../../components/DividerComponent';
import FooterLeft from './FooterLeft';
import UserMessage from './UserMessage';

const LeftSideOfMain: FC = () => {
  const [value, setValue] = useState<string>('')
  //const borderTypes: string[] = ['full', 'center', 'left', 'right']

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <LeftSideOfMainStyle>

        <HeaderLeft />

        <SearchAndFilterComponent>
          <SearchBarComponent value={value} handleChange={handleChange}/>
          <IoFilterSharp color={'#54656F'} size={24}/>
        </SearchAndFilterComponent>

        <DividerComponent justifyBorder='full'/>

        <MessageOverview>
            <UserMessage />
        </MessageOverview>

        <ContainerFootLeft>
          <FooterLeft />
        </ContainerFootLeft>

    </LeftSideOfMainStyle>
  )
}

const LeftSideOfMainStyle = styled.div`
background: #FFF;
width: 30%;
height: 100%;
position: relative;

`

const SearchAndFilterComponent = styled.div`
display:flex;
gap:15px;
width: 100%;
justify-content: center;
align-items: center;
margin-top: 20px;
margin-bottom: 15px;
`
const ContainerFootLeft = styled.div`
display: flex;
width: 100%;
justify-content: center;
`

const MessageOverview = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin-top: 20px;
margin-bottom: 20px;
`
export default LeftSideOfMain
