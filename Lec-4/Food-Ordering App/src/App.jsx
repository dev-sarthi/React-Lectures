import Header from './Header'
import RestaurantCard from './RestrauntCard'
import './App.css'
import restaurants from '../utils/mockdata'
import { useState } from 'react'

const[listofres,setlistofres]=useState(restaurants)

// let listofres=[restaurants[0],restaurants[1],restaurants[2],restaurants[3],restaurants[4],restaurants[5],restaurants[6],restaurants[7],restaurants[8],restaurants[9]];
const Body = () => (
  <div className="body">
    <div className="search">
      Search
    </div>
    <button
  className="filter-btn"
  onClick={() => {

    
    const filterres = restaurants.filter((element) => {
      return element.rating > 4.5; 
    });

    setlistofres(filterres);
  }}
>Filter
</button>
    <div className="res-container">

      {listofres.map((element) => {
        return (
          <RestaurantCard
            key={element.id}
            resdata={element}
          />
        );
      })}
    </div>

  </div>

)

const App = () => (
  <>
    <Header />
    <Body />
  </>
)




export default App;
