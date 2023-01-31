import { useState } from 'react';
import { data } from './data';
import nextBtn from './next.png';
import previousBtn from './previous.png';
import './App.css';

function App() {

  const [firstPlace, setPlace] = useState(0);
  const {id, image, name, description} = data[firstPlace];
  //console.log(africa[firstPlace]);

  const nextPicture = () => {
    setPlace((firstPlace => {
      firstPlace ++;
      if (firstPlace > data.length -1) {
        firstPlace = 0;
      }
      return firstPlace;
    }))
  }

  const previousPicture = () => {
    setPlace((firstPlace => {
      firstPlace --;
      if (firstPlace < 0) {
        return data.length -1;
      }
      return firstPlace;
    }))
  }

  return (
    <div>
      <div className="container">
        <h1>Best places in Africa</h1>
        <h2>Akuna matata:)</h2>
        <div className="pictures-carousel">
          <button onClick={previousPicture} className="carousel-btn"><img src={previousBtn} width="30px" alt="arrow"/></button>
          <img src={image} width="400px" alt="zanzibar"/>
          <button onClick={nextPicture} className="carousel-btn"><img src={nextBtn} width="30px" alt="arrow"/></button>
        </div>
        <h3>{id}. {name}</h3>
        <div className="textBox">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default App;