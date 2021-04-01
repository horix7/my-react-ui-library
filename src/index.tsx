import * as React from 'react'
import ShopNav from './components/navigation/shopNav'
import ProductCard from "./components/cards/product_card";

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return (
    <React.Fragment>
      <ShopNav  text={text} />
    <br />
      <ProductCard />
    </React.Fragment>
 )
}

