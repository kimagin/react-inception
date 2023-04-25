import { useState } from 'react'

const MyButton = ({ message }) => {
  const [isClicked, setClick] = useState(false)
  const [buttonClicked, setButtonClick] = useState(false)

  const handelClick = (e) => {
    setClick(!isClicked)

    isClicked
      ? (e.target.innerText = 'Clicked')
      : (e.target.innerText = 'not Clicked')
  }

  return (
    <button
      className={isClicked ? 'bg-red' : ''}
      onClick={(e) => handelClick(e)}>
      {message}
    </button>
  )
}

export default MyButton
