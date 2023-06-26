import React from 'react'
import Icon from './icons/Icon'


const ConditionalRendering = () => {
  return (
    <section className='section'>
        <h2>Conditional Rendering -Eşyaları Hazırladım</h2>
        <ul>
            <SetItem name={"Mert"} isPacked={true}/>
            <SetItem name={"Halit"} isPacked={true}/>
            <SetItem name={"Onur"} isPacked={false}/>
            <SetItem name={"Alp"} isPacked={false}/>
            <SetItem />
           
        </ul>
    </section>
  )
}



const SetItem = ({name="KD-14",isPacked=true}) => {
  return (
<li>{name} {isPacked && <Icon fillColor='black' width='15px'/>}</li>
  )
}


export default ConditionalRendering