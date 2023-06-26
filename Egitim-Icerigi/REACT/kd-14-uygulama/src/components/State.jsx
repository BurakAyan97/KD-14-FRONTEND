import React, { useState } from 'react'

const State = () => {
    return (
        <section className='section'>
            <h2>State-Component's memory</h2>
            <MyButton />
            <hr />
            <MyButtonState />
            <hr />
            <PhotoGallery />
        </section>
    )
}

const MyButton = () => {
    let counter = 0;
    const handleClick = () => {
        counter++;
        console.log(counter);
    }
    return (
        <button onClick={handleClick}>HELLO {counter}</button>
    )
}



const MyButtonState = () => {
    const [counter, setCounter] = useState(0)
    const handleClick = () => {
        setCounter(counter + 1)//trigger rerenderer
        console.log(counter);
    }
    return (
        <button onClick={handleClick}>HELLO {counter}</button>
    )
}

const verilerim = [{ ad: "Onur Alp", Soyad: "Aydın", imgUrl: "https://pbs.twimg.com/media/D4xjK7nWAAYcmmD.jpg:large" }, { ad: "Yuşa", Soyad: "Tosun", imgUrl: "Uygulama-Icerigi/REACT/kd-14-uygulama/src/assets/Yusa-Photo.jpg" }, { ad: "Beste", Soyad: "Yasak", imgUrl: "../assets/styles/Beste-Yasak.png" },{ ad: "Çağdaş", Soyad: "Yarıcı", imgUrl: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1cPGRI.img?w=650&h=350&m=6&x=66&y=77&s=293&d=138" },{ ad: "Tunahan", Soyad: "Söyler", imgUrl: "" },{ ad: "Doğukan", Soyad: "Doğuş", imgUrl: "" },]


const PhotoGallery = () => {
    const [galeriIndex, setGaleriIndex] = useState(0)
    const handleNextClick = () => {
        if (galeriIndex === verilerim.length - 1) {
            setGaleriIndex(0)
        } else {
            setGaleriIndex(galeriIndex+1)
        }
    }
    return (
        <div className="gallery-cards">
            <div className="card">
                <figure>
                    <img src={verilerim[galeriIndex].imgUrl} alt={verilerim[galeriIndex].ad} />
                    <figcaption>{verilerim[galeriIndex].ad}</figcaption>
                    <figcaption>{verilerim[galeriIndex].Soyad}</figcaption>
                </figure>
            </div>
            <button onClick={handleNextClick}>NEXT</button>
        </div>
    )
}



export default State