// Write your code here.
import './index.css'

const NavBar = props => {
  const {logo, alt, score, topScore, isClicked} = props
  const scoringArea =
    isClicked || score === 12 ? null : (
      <div className="scoreContainer">
        <p>Score: {score}</p>
        <p>Top Score: {topScore}</p>
      </div>
    )
  return (
    <nav className="navContainer">
      <div className="logoContainer">
        <img src={logo} alt={alt} />
        <h1>Emoji Game</h1>
      </div>
      {scoringArea}
    </nav>
  )
}
export default NavBar
