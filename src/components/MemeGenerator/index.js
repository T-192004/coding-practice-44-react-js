import Component from 'react'
import {
  AppContainer,
  MemeInputContainer,
  Heading,
  MemeOutputContainer,
  InputLabel,
  InputBox,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  render() {
    console.log('EME')
    return (
      <AppContainer>
        <MemeInputContainer>
          <Heading>Meme Generator</Heading>
          <InputLabel>Image URL</InputLabel>
          <InputBox type="text" placeholder="Enter the Image URL" />
          <InputLabel>Top Text</InputLabel>
          <InputBox type="text" placeholder="Enter the top text" />
          <InputLabel>Bottom Text</InputLabel>
          <InputBox type="text" placeholder="Enter the bottom text" />
        </MemeInputContainer>
      </AppContainer>
    )
  }
}
export default MemeGenerator
