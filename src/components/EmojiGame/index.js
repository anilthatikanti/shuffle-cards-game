import {Component} from 'react'

import EmojiCard from '../EmojiCard'

import NavBar from '../NavBar'

import './index.css'
/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
class EmojiGame extends Component {
  state = {selectedEmoji: [], topScore: 0, score: 0, isClicked: false}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  selectEmoji = id => {
    const {selectedEmoji} = this.state
    // const {emojisList} = this.props

    if (selectedEmoji.indexOf(id) === -1) {
      if (selectedEmoji.length < 12) {
        this.setState(prevState => ({
          selectedEmoji: [...prevState.selectedEmoji, id],
          score: prevState.score + 1,
        }))
        this.shuffledEmojisList()
      } else {
        this.setState(prevState => ({
          selectedEmoji: [...prevState.selectedEmoji, id],
          score: prevState.score + 1,
        }))
        return true
      }
    }
    return false
  }

  render() {
    const {emojisList} = this.props
    const {topScore, score} = this.state
    const logo = 'https://assets.ccbp.in/frontend/react-js/game-logo-img.png'
    const alt = 'emoji logo'

    return (
      <div className="container">
        <NavBar logo={logo} alt={alt} score={score} topScore={topScore} />
        <div className="cards">
          <ul className="ulist">
            {emojisList.map(eachCard => (
              <EmojiCard
                cardDetails={eachCard}
                key={eachCard.id}
                selectEmoji={this.selectEmoji}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default EmojiGame
