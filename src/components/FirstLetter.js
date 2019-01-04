import React, { Component, useState } from 'react'

/*
const FirstLetter = () => {
  const [text, setText] = useState('')
  const [letter, setLetter] = useState('')

  const updateText = (e) => {
    setText(e.target.value)
  }

  const getFirstLetter = () => {
    const newLetter = text[0]

    setLetter(newLetter)
  }

  return (
    <>
      <div>
        <input
          type='text'
          value={text}
          onChange={updateText}
        /> {' '}
        <button onClick={getFirstLetter}>GO</button>
      </div>
      <div>A primeria letra é: {letter.toUpperCase()}</div>
    </>
  )
}
*/

class FirstLetter extends Component {
  state = { text: '', letter: '' }

  updateText = (e) => {
    this.setState({ text: e.target.value })
  }

  getFirstLetter = () => {
    const letter = this.state.text[0]

    this.setState({ letter })
  }

  render() {
    return (
      <>
        <div>
          <input
            type='text'
            value={this.state.text}
            onChange={this.updateText}
          /> {' '}
          <button onClick={this.getFirstLetter}>GO</button>
        </div>
        <div>A primeria letra é: {this.state.letter.toUpperCase()}</div>
      </>
    )
  }
}

export default FirstLetter
