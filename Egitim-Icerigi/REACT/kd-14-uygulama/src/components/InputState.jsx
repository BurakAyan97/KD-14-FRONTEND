import React, { useState } from 'react'

const InputState = () => {
    const [yazi, setYazi] = useState("TUNAHAN")
    return (
        <section className="section">
            <input type="text" value={yazi} onChange={(event) => setYazi(event.target.value)} />
            <p>
                {yazi}
            </p>
            <button onClick={(e) => setYazi("")}>SİL</button>
            <hr />
            <CheckBoxCheck/>
            <hr />
        </section>
    )

}

const CheckBoxCheck = () => {
    const [like, setLike] = useState(true)
  return (
    <>
    <label >REACT'I SEVDİM</label>
    <input type="checkbox" onChange={(event)=>setLike(event.target.checked)}  checked={like}/>
    <p>Sen React'ı {like ? "sevdin":"sevmedin"}</p>
    </>
  )
}




export default InputState