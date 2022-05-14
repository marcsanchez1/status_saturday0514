import { useState } from "react"

export function NameForm() {
  const [name, setName] = useState('')
  const [theNames, setTheNames] = useState([])

  const handleChange = (e) => {
    setName( e.target.value )
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // const newNames = [...setTheNames, name]

    setTheNames([...theNames, name])
  }

  return (
    <div>
      { theNames.map((name, index) => 
        <div key={`name: ${index}`}> { name }</div>)
      }
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name='name' />
        <input type="submit" />
      </form>
    </div>
  )
}

// export default NameForm