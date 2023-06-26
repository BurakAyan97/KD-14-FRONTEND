import React,{useState} from 'react'

const CardBas = () => {
const [cardlar, setCardlar] = useState({
    products:[],
    name:"",
    nameError:false
})
    return (
        <section className='section'>
            <h2>Inventory</h2>
            <div>{cardlar.nameError ? (<p>Product Name is required</p>):(<div></div>)}</div>
            <form action="">
                <input type="text"onChange={(event)=>setCardlar({...cardlar,name:event.target.value,nameError:!event.target.value} )} placeholder={cardlar.nameError ? "Product name is required":"Product Name"} value={cardlar.name}/>
                <button className='button' type='button' value={"ADD"} onClick={()=>{
                    if (cardlar.name) {
                        setCardlar({
                            products:[...cardlar.products,{name:cardlar.name}],
                            name:"",
                            nameError:false,
                        })
                        
                    } else {
                        cardlar.name || setCardlar({...cardlar,nameError:true})
                        
                    }
                }}>EKLE</button>
                <div className="cards">
                    {cardlar.products.map((product,index)=><div className='kart' key={index}>
                        <p>{product.name}</p>
                    </div>)}
                </div>
                <button onClick={()=>setCardlar({...cardlar,products:[]})}>SİL</button>
            </form>
        </section>)
}

export default CardBas