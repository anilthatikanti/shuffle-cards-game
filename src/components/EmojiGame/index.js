import {Component} from 'react'

import EmojiCard from '../EmojiCard'

import NavBar from '../NavBar'

import WinOrLossCard from '../WinOrLoseCard'

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

    if (selectedEmoji.includes(id)) {
      this.setState({isClicked: true})
    } else {
      this.shuffledEmojisList()
      this.setState(prevState => ({
        selectedEmoji: [...prevState.selectedEmoji, id],
        score: prevState.score + 1,
      }))
    }
  }

  reload = () => {
    const {score, topScore} = this.state
    this.setState({
      selectedEmoji: [],
      score: 0,
      isClicked: false,
    })
    if (score > topScore) {
      this.setState({topScore: score})
    }
  }

  render() {
    const {emojisList} = this.props
    const {topScore, score, isClicked, selectedEmoji} = this.state
    const lengthOfSelectItems = selectedEmoji.length
    const logo = 'https://assets.ccbp.in/frontend/react-js/game-logo-img.png'
    const alt = 'emoji logo'

    return (
      <div className="container">
        <NavBar
          logo={logo}
          alt={alt}
          score={score}
          topScore={topScore}
          isClicked={isClicked}
        />
        {isClicked || lengthOfSelectItems === 12 ? (
          <WinOrLossCard
            score={score}
            reload={this.reload}
            topScore={topScore}
          />
        ) : (
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
        )}
      </div>
    )
  }
}
export default EmojiGame
