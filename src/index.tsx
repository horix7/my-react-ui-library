import * as React from 'react'
import ShopNav from './components/navigation/shopNav'


interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <ShopNav  text={text} />
}

