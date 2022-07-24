// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {reload, score} = props

  const replay = () => {
    reload()
  }

  const image =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const winOrLose = score === 12 ? 'You Won' : 'You Lose'
  const Score = score === 12 ? 'Best Score' : 'Score'

  return (
    <div className="l-container">
      <div className="LoseContainer">
        <div className="LoseArrange">
          <h1 className="loseHeading">{winOrLose}</h1>
          <p className="loseParagraph">{Score}</p>
          <p className="score">{score}/12</p>
          <button type="button" onClick={replay} className="selectBtn">
            Play Again
          </button>
        </div>
        <img className="LostLogo" src={image} alt="win or lose" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
