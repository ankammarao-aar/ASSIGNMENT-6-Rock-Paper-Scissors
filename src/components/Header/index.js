import ScoreContext from '../../context/ScoreContext'

import {
  HeaderContainer,
  Heading,
  ScoreCard,
  ScoreText,
  ScoreDigit,
} from './styledComponents'

const Header = () => (
  <ScoreContext.Consumer>
    {value => {
      const {score} = value

      return (
        <HeaderContainer>
          <div>
            <Heading>
              ROCK <br />
              PAPER
              <br />
              SCISSORS
            </Heading>
          </div>
          <ScoreCard>
            <ScoreText>Score</ScoreText>
            <ScoreDigit>{score}</ScoreDigit>
          </ScoreCard>
        </HeaderContainer>
      )
    }}
  </ScoreContext.Consumer>
)

export default Header
