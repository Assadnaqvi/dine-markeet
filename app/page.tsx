import React from 'react'
import Hero from './components/hero'
import Products from './components/Products'

import Promotions from './components/promptions'
import UniqueJewellery from './components/uniquejewellery'
import Subscribe from './components/subscribe'
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