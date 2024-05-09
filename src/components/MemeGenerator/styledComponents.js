// Style your components here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  background-size: cover;
  background-color: #ffffff;
  padding: 20px;
`
export const MemeInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #ffffff;
  padding: 20px;
  margin: 20px;
  width: 40%;
`

export const Heading = styled.h1`
  color: #35469c;
  font-size: 28px;
  font-family: 'Open Sans';
  font-weight: bold;
`
export const InputLabel = styled.label`
  color: #7e858e;
  font-size: 16px;
  font-family: 'Open Sans';
  font-weight: 400;
  margin-top: 5px;
`
export const InputBox = styled.input`
  color: #d7dfe9;
  font-size: 14px;
  font-family: 'Open Sans';
  font-weight: 400;
  border: solid 2px #5a7184;
  border-radius: 6px;
  padding: 8px;
  width: 80%;
  margin: 10px;
`
export const MemeOutputContainer = styled.div`
  width: 40%;
`
