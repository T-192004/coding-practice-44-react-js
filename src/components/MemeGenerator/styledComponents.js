// Style your components here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: cover;
  background-color: #ffffff;
  padding: 20px;
`
export const MemeInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #ffffff;
  padding: 20px;
  margin: 20px;
  width: 40%;
  height: 60%;
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
  color: #5a7184;
  font-size: 14px;
  font-family: 'Open Sans';
  font-weight: 400;
  border: solid 2px #d7dfe9;
  border-radius: 6px;
  padding: 8px;
  width: 80%;
  margin: 10px;
`
export const SelectBox = styled.select`
  color: #5a7184;
  font-size: 14px;
  font-family: 'Open Sans';
  font-weight: 400;
  border: solid 2px #d7dfe9;
  border-radius: 6px;
  padding: 8px;
  width: 80%;
  margin: 10px;
`
export const OptionBox = styled.option`
  color: #5a7184;
  font-size: 14px;
  font-family: 'Open Sans';
  font-weight: 400;
`
export const GenerateButton = styled.button`
  background-color: #0b69ff;
  border-radius: 6px;
  width: 120px;
  padding: 8px;
  text-align: center;
  color: #ffffff;
  border: none;
  margin: 10px;
  font-family: 'Open Sans';
  font-size: 16px;
`
export const MemeOutputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #ffffff;
  padding: 20px;
  margin: 20px;
  width: 40%;
  height: 60%;
`

export const MemeOutput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width:100%;
  height:100%;
  background-image: url(${props => props.bgImage});
`
export const OutputText = styled.p`
  color: #ffffff;
  font-size: ${props => props.fontSize}px;
  font-family: 'Roboto';
`
