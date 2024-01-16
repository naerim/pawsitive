import React, { useState } from 'react'

const SignUpContainer = () => {
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nameInput = e.target.value
    setName(nameInput)

    if (nameInput.length < 2 || nameInput.length > 20) {
      setNameError('실명을 입력해주세요.')
    } else setNameError('')
  }
  return (
    <>
      <h2>NEW ACCOUNT</h2>
      <div>
        <label htmlFor="name">
          이름
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </label>
        <div>{nameError}</div>
      </div>
    </>
  )
}

export default SignUpContainer
