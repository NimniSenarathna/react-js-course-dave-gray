import {useState} from 'react'

const Content = () => {

    const [name, setName] = useState('David');
    const [count, setCount] = useState(0);

    const handleNameCheck = () => {
        const names = ["Bob", "John", "Kevin"];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
    } 

    const handleClick = () => {
      setCount(count + 1)
      console.log(count)
    }
    const handleClick2 = () => {
      console.log(count)
    }

  return (
    <main>
        <p onDoubleClick={handleClick}>
            Hello {name}!
        </p>
        <button onClick={handleNameCheck}>Change Name</button>
        <button onClick={handleClick}>Click It</button>
        <button onClick={handleClick2}>Click Me</button>
    </main>
  )
}

export default Content