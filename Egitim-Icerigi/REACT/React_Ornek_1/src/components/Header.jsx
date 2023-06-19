import React from 'react'

const Header = () => {
  return (
    <header>
<Logo/>
<Bio/>
    </header>
  )
}


 const Logo = () => {
  return (
    <section className='logo'>
        <img src="https://ekare.com.tr/assets/img/references/bilge/01.jpg" alt="Bilgeadam-logo" />
        <h1>KD-14-REACT</h1>
    </section>
  )
}

const person={
    name:"Onur Alp",
    surname:"Aydın",
    imgUrl:"https://pbs.twimg.com/media/FknZy7BX0BgXt2H.jpg",
    theme:{backgroundColor:"black",color:"green"}
}
const Bio = () => {

  return (
<div style={person.theme}>
    <h1>SİTEME HOŞGELDİNİZ</h1>
<h2>{person.name}</h2>
<h2>{person.surname}</h2>
<img src={person.imgUrl} alt={person.name} width={'200px'} height={'200px'} />
</div>  )
}



export default Header