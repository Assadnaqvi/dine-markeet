import React from 'react'
import Hero from './components/hero'
import Products from './components/Products'
import {client} from "./lib/sanityClient"
import Promotions from './components/promptions'
import UniqueJewellery from './components/uniquejewellery'
import Subscribe from './components/subscribe'
/*

export const getProductData=async ()=>{
  const res=await client.fetch(`*[_type=="product"]{
  
    title,
    description
  }`);
return res



}
interface IProduct{

  title:string,
  description:string
}




export default async function Home(){
  const data:IProduct[]= await getProductData()
 console.log(data)
  return  ( <div>
      {data.map((item)=>(
        <h1>{item.title}</h1>
      ))  }

    </div>

  )
}
*/

const page = () => {
  return (
    <div>
<Hero/>
<Promotions/>
<Products/>
    <UniqueJewellery/>
    <Subscribe/>
    </div>
 
 )
}

export default page 