import {FC} from 'react'
import styled from 'styled-components'
import HeaderLeft from './HeaderLeft'
import IconStandard from '../../components/IconStandard'

const LeftSideOfMain: FC = () => {
  return (
    <LeftSideOfMainStyle>
        <HeaderLeft />
    </LeftSideOfMainStyle>
  )
}

const LeftSideOfMainStyle = styled.div`
background: grey;
width: 30%;
height: 100%;

`

export default LeftSideOfMain
