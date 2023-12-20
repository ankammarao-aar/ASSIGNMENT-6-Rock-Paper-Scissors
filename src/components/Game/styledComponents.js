import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  height: 100vh;
  padding: 12px;
`

export const GameCard = styled.div`
  display: flex;
  justify-content: center;
`

export const GameImageContainer = styled.div`
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 82px;
  margin-bottom: 82px;
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`

export const Image = styled.img`
  height: 136px;
`

export const TriggerButton = styled.button`
  font-family: 'Bree Serif';
  font-size: 18px;
  background-color: #ffffff;
  color: #223a5f;
  width: 80px;
  padding: 6px;
  border: none;
  border-radius: 6px;
  margin-left: 72%;
  cursor: pointer;
  outline: none;

  @media screen and (min-width: 562px) {
    margin-left: 90%;
  }
`
export const CloseContainer = styled.div`
  background-color: #ffffff;
  padding: 6px;
  display: flex;
  flex-direction: column;
`

export const ButtonCard = styled.div`
  align-self: flex-end;
`
export const CloseButton = styled.button`
  border: none;
`

export const RulesCard = styled.div`
  padding: 6px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;

  @media screen and (min-width: 768px) {
    padding-left: 42px;
    padding-right: 42px;
  }
`

export const RulesImg = styled.img`
  height: 200px;

  @media screen and (min-width: 768px) {
    height: 350px;
  }
`

export const ResultContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 82px;
`

export const ResultCard = styled.div`
  text-align: center;
`

export const ResultText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
`

export const PlayCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`

export const ResultPara = styled.p`
  font-family: 'Roboto';
  font-size: 26px;
  font-weight: bold;
  color: #ffffff;
`
export const PlayButton = styled.button`
  font-family: 'Bree Serif';
  color: #223a5f;
  background-color: #ffffff;
  width: 162px;
  padding: 12px;
  border: none;
  border-radius: 12px;
  margin-top: 0px;
  margin-bottom: 10px;
  cursor: pointer;
  outline: none;
`
