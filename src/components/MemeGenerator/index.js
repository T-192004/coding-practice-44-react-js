import {Component} from 'react'
import {
  AppContainer,
  MemeInputContainer,
  Heading,
  InputLabel,
  InputBox,
  SelectBox,
  OptionBox,
  GenerateButton,
  MemeOutputContainer,
  MemeOutput,
  OutputText,
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
  state = {
    inputImageUrl: '',
    inputTopText: '',
    inputBottomText: '',
    activeFontSize: fontSizesOptionsList[0].displayText,
    showMeme: false,
  }

  updateImageUrl = event => {
    this.setState({inputImageUrl: event.target.value})
  }

  updateTopText = event => {
    this.setState({inputTopText: event.target.value})
  }

  updateBottomText = event => {
    this.setState({inputBottomText: event.target.value})
  }

  updateFontSize = event => {
    this.setState({activeFontSize: event.target.value})
  }

  onGenerateMeme = event => {
    event.preventDefault()
    this.setState({showMeme: true})
  }

  render() {
    const {
      inputImageUrl,
      inputTopText,
      inputBottomText,
      activeFontSize,
      showMeme,
    } = this.state
    console.log(activeFontSize)
    return (
      <AppContainer>
        <MemeInputContainer onSubmit={this.onGenerateMeme}>
          <Heading>Meme Generator</Heading>
          <InputLabel htmlFor="image">Image URL</InputLabel>
          <InputBox
            type="text"
            id="image"
            value={inputImageUrl}
            onChange={this.updateImageUrl}
            placeholder="Enter the Image URL"
          />
          <InputLabel htmlFor="topText">Top Text</InputLabel>
          <InputBox
            type="text"
            id="topText"
            value={inputTopText}
            onChange={this.updateTopText}
            placeholder="Enter the top text"
          />
          <InputLabel htmlFor="bottomText">Bottom Text</InputLabel>
          <InputBox
            type="text"
            id="bottomText"
            value={inputBottomText}
            onChange={this.updateBottomText}
            placeholder="Enter the bottom text"
          />
          <InputLabel htmlFor="fontSize">Font Size</InputLabel>
          <SelectBox
            value={activeFontSize}
            id="fontSize"
            onChange={this.updateFontSize}
          >
            {fontSizesOptionsList.map(eachSize => (
              <OptionBox key={eachSize.optionId} value={eachSize.displayText}>
                {eachSize.displayText}
              </OptionBox>
            ))}
          </SelectBox>
          <GenerateButton type="submit">Generate</GenerateButton>
        </MemeInputContainer>
        <MemeOutputContainer>
          {showMeme && (
            <MemeOutput bgImage={inputImageUrl} data-testid="meme">
              <OutputText fontSize={activeFontSize}>{inputTopText}</OutputText>
              <OutputText fontSize={activeFontSize}>
                {inputBottomText}
              </OutputText>
            </MemeOutput>
          )}
        </MemeOutputContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
