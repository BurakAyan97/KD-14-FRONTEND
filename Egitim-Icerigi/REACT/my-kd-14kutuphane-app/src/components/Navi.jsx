import React from 'react'
import '../assets/styles/navi.scss'

const Navi = ({kategoriler,setSecilenKategori}) => {
  return (
    <nav>
        <h3>BilgeAdam-Kütüphane</h3>
        <ul>{kategoriler.map((kategori)=><li key={kategori.kategoriId}>
            <span onClick={()=>setSecilenKategori(kategori.kategoriId)}>{kategori.kategoriAdi}</span>
            </li>)}

        </ul>
    </nav>
  )
}

export default Navi