import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';

import Home from './components/pages/home/Home';

import Indonesia from './components/pages/indonesia/Indonesia';
import Thailand from './components/pages/thailand/Thailand';
import Form from './components/header/Form';
import Greece from './components/pages/greece/Greece';
import Adventures from './components/pages/adventures/Adventures';
import Food from './components/pages/foods_drinks/Food';
import India from './components/pages/india/India';
import Experinces from './components/pages/experinces_tours/Experinces';

import Destination from './components/pages/Destination/Destination';
import Wildlife from './components/pages/wildlife_tour/Wildlife';
import Heritage from './components/pages/Heritage/Heritage';
import Transportation from './components/pages/transportation/Transportation';
import Ayurveda from './components/pages/Ayurveda_tour/Ayurveda';
import Festival from './components/pages/Festival_tour/Festival';
import Footer from './components/pages/footer/Footer';
import Travel_saftey from './components/pages/travel_safety/Travel_saftey';




function App() {
  return (
    <div className="App">
      
      <Router>
        
       <Header/>
        
        <Routes>
          
          <Route index element={<Home/>}></Route>  
          <Route path='/*' element={<h1>error page</h1>}></Route>
          <Route path='/indonesia_tour' element={<Indonesia/>}></Route>
          <Route path='/thailand_tour' element={<Thailand/>}></Route>
          <Route path='/Greece_tour' element={<Greece/>}></Route>
          <Route path='/India_tour' element={<India/>}></Route>
          <Route path='/adventures_activity' element={<Adventures/>}></Route>
          <Route path='/food_drinks' element={<Food/>}></Route>
          <Route path='/experinces_tours' element={<Experinces/>}></Route>
          <Route path='/destination' element={<Destination/>}></Route>
          <Route path='/wildlife_tours' element={<Wildlife/>}></Route>
          <Route path='/heritage_tours' element={<Heritage/>}></Route>
          <Route path='/transportation' element={<Transportation/>}></Route>
          <Route path='/ayurveda_tour' element={<Ayurveda/>}></Route>
          <Route path='/festival_tour' element={<Festival/>}></Route>
          <Route path='/travel_saftey' element={<Travel_saftey/>}></Route>
          
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;




