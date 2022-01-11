// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailList, imageChange, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailList

  const changeImage = () => {
    imageChange(id)
  }

  const changeOpacity = isActive ? 'opacity-class' : 'thumbnail-image'

  return (
    <li className="list-item">
      <button type="button" className="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={changeOpacity}
          onClick={changeImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
