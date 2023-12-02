'use client'

import { useState } from 'react'

function randomint(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default function Problem() {
  const initial = [...Array(3)].map((_) => randomint(1, 10))
  const [problems, setProblems] = useState(initial)
  const [answer, setAnswer] = useState(0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(parseInt(e.target.value))
  }
  const handleClick = () => {
    const isCorrect = problems.reduce((a, b) => a + b, 0) === answer
    if (isCorrect) {
      alert('Correct!')
    } else {
      alert('Incorrect!')
    }
  }

  return (
    <div>
      {problems.map((p, i) => (
        <div key={i}> {p} </div>
      ))}
      <form>
        <input type='number' value={answer} onChange={handleChange} />
        <button type='button' onClick={handleClick}>
          Click
        </button>
      </form>
    </div>
  )
}
