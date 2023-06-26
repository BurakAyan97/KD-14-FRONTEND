import React from 'react'

const RenderingLists = () => {
  return (
 <div>
     <ListFruits/>
     <ShowBrands/>
     <FilterStudents meslek={"student"}/>
     <FilterStudents meslek={"instructor"}/>
 </div>

  )
}



const ListFruits = () => {
    const fruits=[<p>Apple</p>,<p>Strawberry</p>,<p>Cherry</p>,<p>Pineapple</p>,<p>Apricot</p>,<p>Peach</p>]
  return (
    <section className='section'>
        <h2>Rendering Lists Fruits</h2>
        {/* {fruits} */}
        <div>{fruits}</div>
    </section>
  )
}


const ShowBrands = () => {
    const brands=["Adidas","Puma","Nike","Gucci","Prada","Kardeşler Kundura"]
    const brandList=brands.map((brand,index)=><li>{index+1}-{brand}</li>)
  return (
    <section className="section">
        <h2>BRANDS</h2>
        <ul>
            {/* {brands.map((brand,index)=><li>{index+1}-{brand}</li>)} */}
            {brandList}
        </ul>
    </section>
  )
}

const FilterStudents = ({meslek}) => {
    const people=[{id:1,name:"Deniz",surname:"Akça",job:"student"},{id:2,name:"Burak",surname:"Ayan",job:"student"},{id:3,name:"Mert",surname:"Karaibrahimoğlu",job:"student"},{id:4,name:"Onur Alp",surname:"Aydın",job:"instructor"}]
  return (
    <section className='section'>
        <h2>Filtering jobs</h2>
        <ul>
            {people.filter((person)=>person.job.toLowerCase()===meslek.toLowerCase()).map((person)=><li>{person.id}-{person.name}-{person.surname}-{person.job}</li>)}
        </ul>
    </section>
  )
}



export default RenderingLists