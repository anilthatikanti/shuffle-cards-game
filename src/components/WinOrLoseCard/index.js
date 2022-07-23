// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {reload, score} = props
  let {topScore} = props

  const replay = () => {
    reload()
  }

  const image =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const winOrLose = score === 12 ? 'You Win' : 'You Lose'
  topScore = score === 12 ? score : 12

  return (
    <div className="lcontainer">
      <div className="LoseContainer">
        <div className="LoseArrange">
          <h1 className="loseHeading">{winOrLose}</h1>
          <p className="loseParagraph">Score</p>
          <p className="score">
            {score}/{topScore}
          </p>
          <button type="button" onClick={replay} className="selectBtn">
            Play again
          </button>
        </div>
        <img className="LostLogo" src={image} alt="lose Emoji" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
