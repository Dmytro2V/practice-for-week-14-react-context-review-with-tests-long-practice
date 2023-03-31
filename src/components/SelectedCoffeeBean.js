import {useContext} from 'react'
import {useContextBean} from '../context/CoffeeContext'

const SelectedCoffeeBean = () => {
  console.log('------  ------------',useContextBean);
  return (
    <div className="selected-coffee">
      <h2>Current Selection: </h2>
    </div>
  );
}

export default SelectedCoffeeBean