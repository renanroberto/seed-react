import React, { useState, useEffect } from 'react'


function ShowUser (user) {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('ShowUser atualizado')
  })

  const increase = () => {
    setCounter(counter + 1)
  }

  return (
    <>
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
      <div><button onClick={increase}>{counter}</button></div>
    </>
  )
}

export default React.memo(ShowUser)
