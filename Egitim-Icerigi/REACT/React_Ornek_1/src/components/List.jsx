import React from 'react'

const fruitList=[{id:1,fruitName:"Apple",color:"green"},{id:2,fruitName:"Apple",color:"red"}]
const List = () => {
  return (
    <div>
        <ul>
            {fruitList.map((meyve)=>(<li>
                <p>{meyve.id}</p>
                <p>{meyve.fruitName}</p>
                <p>{meyve.color}</p>
            </li>))}
        </ul>
    </div>
  )
}

export default List