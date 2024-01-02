import React from 'react'

const Content = () => {

    const handleNameCheck = () => {
        const names = ["Bob", "John", "Kevin"];
        const int = Math.floor(Math.random() * 3);
        return names[int]
    } 

  return (
    <main>
        <p>
            Hello {handleNameCheck()}!
        </p>
    </main>
  )
}

export default Content