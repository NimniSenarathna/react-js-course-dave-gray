import React from 'react'

const Content = () => {

    const handleNameCheck = () => {
        const names = ["Bob", "John", "Kevin"];
        const int = Math.floor(Math.random() * 3);
        return names[int]
    } 

    const handleClick = () => {
      console.log("You clicked it..")
    }
    const handleClick2 = (name) => {
      console.log(`${name} was Clicked..!`)
    }

    const handleClick3 = (e) => {
      console.log(e.target.innerText)
    }

  return (
    <main>
        <p onDoubleClick={handleClick}>
            Hello {handleNameCheck()}!
        </p>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={() => handleClick2('David')}>Click Me</button>
        <button onClick={(e) => handleClick3(e)}>Click Me</button>
    </main>
  )
}

export default Content