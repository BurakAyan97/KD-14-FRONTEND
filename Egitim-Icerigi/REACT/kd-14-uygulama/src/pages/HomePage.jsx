import React from 'react'
import ConditionalRendering from '../components/ConditionalRendering'
import RenderingLists from '../components/RenderingLists'
import State from '../components/State'
import InputState from '../components/inputState'
import CardBas from '../components/CardBas'

const HomePage = () => {
  return (
    <div>
        <ConditionalRendering/>
        <RenderingLists/>
        <State/>
        <InputState/>
        <CardBas/>
    </div>
  )
}

export default HomePage