// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {cardDetails, selectEmoji} = props
  const {id, emojiName, emojiUrl} = cardDetails

  const onClickEmoji = () => {
    selectEmoji(id)
  }

  return (
    <li className="list">
      <button
        type="button"
        testid={emojiName}
        className="btn"
        onClick={onClickEmoji}
      >
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
