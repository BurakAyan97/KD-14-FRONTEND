import React from 'react'
import '../assets/styles/card.scss'

const Card = ({ kitaplar, kitapSil }) => {
    return (
        <div className="card-container">
            {
                kitaplar.map((kitap)=>
                <div className="card" key={kitap.id}>
                    <button onClick={()=>kitapSil(kitap.id)} className='delete' title='KALDIR !'>X</button>
                    <img src={kitap.kitapResmi} alt="" />
                    <div className="card-body">
                        <p>Kitap Adı:{kitap.kitapAdi} </p>
                        <p>Kitap Yazarı:{kitap.kitapYazar}</p>
                        <p>Kitap Kategorisi: {kitap.kitapKategoriId}</p>
                        <p>Kitap Sayfa Sayısı:{kitap.kitapSayfa}</p>
                        <p>Kitap Açıklaması: {kitap.Aciklama}</p>
                    </div>
                </div>
                
                )
            }

        </div>
    )
}

export default Card