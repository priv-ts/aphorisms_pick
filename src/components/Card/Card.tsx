import React from 'react'

type Aphorism = {
  id: number
  text: string
}

interface Props {
  aphorism: Aphorism
}

const Card: React.FC<Props> = (props) => {
  return (
    <>
      <h3>Card</h3>
      <p>{props.aphorism.id}</p>
    </>
  )
}

export default Card
