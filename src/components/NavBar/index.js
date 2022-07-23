// Write your code here.
import './index.css'

const NavBar = props => {
  const {logo, alt, score, topScore} = props
  return (
    <nav className="navContainer">
      <div className="logoContainer">
        <img src={logo} alt={alt} />
        <p>EmojiGame</p>
      </div>
      <div className="scoreContainer">
        <p>Score: {score}</p>
        <p>Top Score: {topScore}</p>
      </div>
    </nav>
  )
}
export default NavBar
