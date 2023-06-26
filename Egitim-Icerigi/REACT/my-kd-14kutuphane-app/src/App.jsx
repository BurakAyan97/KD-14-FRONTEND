import { useState, useEffect } from 'react'
import './assets/styles/app.scss'
import Navi from './components/Navi'
import axios from 'axios'
import Card from './components/Card'
// http://localhost:3000/kitaplar/?kitapKategoriId=1

function App() {
  const [kitap, setKitap] = useState([])
  const [kategori, setKategori] = useState([])
  const [secilenKategori, setSecilenKategori] = useState(0)

  const kategoriGetir = async () => {
    let url = "http://localhost:3000/kategoriler"
    const response = await axios(url)
    const veri = response.data
    setKategori(veri)
    console.log(veri);
  }

  const kitapGetir = async () => {
    let url = "http://localhost:3000/kitaplar"
    if (secilenKategori) {
      url += "?kitapKategoriId=" + secilenKategori
    }
    const response = await axios(url)
    const veri = response.data
    setKitap(veri)
    console.log(veri);
  }
  const yeniKitap=async(yeni)=>{
    let url="http://localhost:3000/kitaplar"
const response=await axios.post(url,yeni)
console.log(response);
kitapGetir();
  }

  const kitapSil = (id) => { setKitap(prev => prev.filter(kit => kit.id !== id)) }

  useEffect(() => {
    kitapGetir();
    kategoriGetir()
  }, [secilenKategori])

  return (
    <>
      <Navi kategoriler={kategori} setSecilenKategori={setSecilenKategori} />
      {/* form elementi yenikitap fonksiyonunu alacak */}
      <Card kitapSil={kitapSil} kitaplar={kitap} />
    </>
  )
}

export default App
