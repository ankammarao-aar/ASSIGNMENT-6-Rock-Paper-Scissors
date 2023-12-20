import styled from 'styled-components'

export const HeaderContainer = styled.div`
  border: 2px solid #ffffff;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
  padding-left: 32px;
  padding-right: 32px;

  @media screen and (min-width: 768px) {
    margin-left: 72px;
    margin-right: 72px;
  }
`

export const Heading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 20px;
  color: #ffffff;
  margin-top: 0px;
  margin-bottom: 4px;
`

export const ScoreCard = styled.div`
  background-color: #ffffff;
  width: 80px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
`
export const ScoreText = styled.p`
  font-family: 'Bree Serif';
  font-size: 20px;
  color: #223a5f;
  margin-top: 12px;
  margin-bottom: 0px;
`
export const ScoreDigit = styled.p`
  font-family: 'Roboto';
  color: #223a5f;
  font-size: 42px;
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 0px;
`
