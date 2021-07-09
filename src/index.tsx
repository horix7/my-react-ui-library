import * as React from 'react'
import ShopNav from './components/navigation/shopNav'
import ProductCard from "./components/cards/examples/productCard";
import Input from "./components/forms/inputs"
import Select from "./components/forms/select"


interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return (
    <React.Fragment>
      <ShopNav  text={text} />
    <br /> 
      <ProductCard />
      <Input input={{ 
        label: "String",
        placeholder: "String",
        value: "String",
        styleType: 2
        }} />
      <Select  input={{ 
        label: "String",
        placeholder: "String",
        value: "String",
        styleType: 2
        }} 
      />
    </React.Fragment>
 )
}

