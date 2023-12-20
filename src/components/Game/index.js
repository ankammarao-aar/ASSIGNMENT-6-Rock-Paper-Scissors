import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'

import ScoreContext from '../../context/ScoreContext'
import Header from '../Header'

import {
  MainContainer,
  GameCard,
  GameImageContainer,
  Button,
  Image,
  TriggerButton,
  CloseContainer,
  ButtonCard,
  CloseButton,
  RulesCard,
  RulesImg,
  ResultContainer,
  ResultCard,
  ResultText,
  PlayCard,
  ResultPara,
  PlayButton,
} from './styledComponents'

const closeIcon = <RiCloseLine />

class Game extends Component {
  state = {
    isActive: false,
    yourImage: '',
    opponentImage: '',
    score: 0,
    result: '',
  }

  onClickRock = () => {
    const {choicesList} = this.props
    const {score} = this.state
    const randomImg = Math.floor(Math.random(choicesList.length) * 3)
    const opponentImage = choicesList[randomImg]

    if (choicesList[0] === opponentImage) {
      this.setState({
        yourImage: choicesList[0].imageUrl,
        opponentImage: choicesList[0].imageUrl,
        result: 'IT IS DRAW',
      })
    } else if (choicesList[2] === opponentImage) {
      this.setState({
        yourImage: choicesList[0].imageUrl,
        opponentImage: choicesList[2].imageUrl,
        result: 'YOU LOSE',
        score: score - 1,
      })
    } else {
      this.setState({
        yourImage: choicesList[0].imageUrl,
        opponentImage: choicesList[1].imageUrl,
        result: 'YOU WON',
        score: score + 1,
      })
    }
    this.setState({isActive: true})
  }

  onClickScissor = () => {
    const {choicesList} = this.props
    const {score} = this.state
    const randomImg = Math.floor(Math.random(choicesList.length) * 3)
    const opponentImage = choicesList[randomImg]

    if (choicesList[1] === opponentImage) {
      this.setState({
        yourImage: choicesList[1].imageUrl,
        opponentImage: choicesList[1].imageUrl,
        result: 'IT IS DRAW',
      })
    } else if (choicesList[0] === opponentImage) {
      this.setState({
        yourImage: choicesList[1].imageUrl,
        opponentImage: choicesList[0].imageUrl,
        result: 'YOU LOSE',
        score: score - 1,
      })
    } else {
      this.setState({
        yourImage: choicesList[1].imageUrl,
        opponentImage: choicesList[2].imageUrl,
        result: 'YOU WON',
        score: score + 1,
      })
    }
    this.setState({isActive: true})
  }

  onClickPaper = () => {
    const {choicesList} = this.props
    const {score} = this.state
    const randomImg = Math.floor(Math.random(choicesList.length) * 3)
    const opponentImage = choicesList[randomImg]

    if (choicesList[2] === opponentImage) {
      this.setState({
        yourImage: choicesList[2].imageUrl,
        opponentImage: choicesList[2].imageUrl,
        result: 'IT IS DRAW',
      })
    } else if (choicesList[1] === opponentImage) {
      this.setState({
        yourImage: choicesList[2].imageUrl,
        opponentImage: choicesList[1].imageUrl,
        result: 'YOU LOSE',
        score: score - 1,
      })
    } else {
      this.setState({
        yourImage: choicesList[2].imageUrl,
        opponentImage: choicesList[0].imageUrl,
        result: 'YOU WON',
        score: score + 1,
      })
    }
    this.setState({isActive: true})
  }

  onClickPlayAgain = () => {
    this.setState({isActive: false})
  }

  resultView = () => {
    const {yourImage, opponentImage, result} = this.state

    return (
      <>
        <Header />
        <ResultContainer>
          <ResultCard>
            <ResultText>YOU</ResultText>
            <Image src={yourImage} alt="your choice" />
          </ResultCard>
          <ResultCard>
            <ResultText>OPPONENT</ResultText>
            <Image src={opponentImage} alt="opponent choice" />
          </ResultCard>
        </ResultContainer>

        <PlayCard>
          <ResultPara>{result}</ResultPara>
          <PlayButton type="button" onClick={this.onClickPlayAgain}>
            PLAY AGAIN
          </PlayButton>
        </PlayCard>
      </>
    )
  }

  playingView = () => {
    const {choicesList} = this.props

    return (
      <>
        <Header />
        <GameCard>
          <GameImageContainer>
            <Button
              type="button"
              data-testid="rockButton"
              onClick={this.onClickRock}
            >
              <Image src={choicesList[0].imageUrl} alt={choicesList[0].id} />
            </Button>
            <Button
              type="button"
              data-testid="scissorsButton"
              onClick={this.onClickScissor}
            >
              <Image src={choicesList[1].imageUrl} alt={choicesList[1].id} />
            </Button>
            <Button
              type="button"
              data-testid="paperButton"
              onClick={this.onClickPaper}
            >
              <Image src={choicesList[2].imageUrl} alt={choicesList[2].id} />
            </Button>
          </GameImageContainer>
        </GameCard>
      </>
    )
  }

  render() {
    const {isActive, score} = this.state

    return (
      <ScoreContext.Provider value={{score}}>
        <MainContainer>
          {isActive ? this.resultView() : this.playingView()}

          <Popup
            modal
            trigger={<TriggerButton type="button">Rules</TriggerButton>}
            position="end"
          >
            {close => (
              <CloseContainer>
                <ButtonCard>
                  <CloseButton type="button" onClick={() => close()}>
                    {closeIcon}
                  </CloseButton>
                </ButtonCard>
                <RulesCard>
                  <RulesImg
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </RulesCard>
              </CloseContainer>
            )}
          </Popup>
        </MainContainer>
      </ScoreContext.Provider>
    )
  }
}

export default Game
