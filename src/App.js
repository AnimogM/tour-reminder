import { Routes, Route } from 'react-router-dom';

import SideBar from './components/SideBar';
import Birthday from './pages/Birthday/Birthday';
import Reviews from './pages/Review/Reviews';
import Tours from './pages/Tours/Tours';
import FoodMenu from './pages/FoodMenu/FoodMenu';
import Accordions from './pages/Accordion/Accordions';
import NotFound from './pages/NotFound';

function App() {

  return (
    <>
     <SideBar/>
     <Routes>
        <Route exact path='/' element={<Birthday/>}/>
        <Route path='/tours' element={<Tours/>}/>
        <Route path='/review' element={<Reviews/>}/>
        <Route path='/food-menu/' element={<FoodMenu/>}/>
        <Route path='/accordion/' element={<Accordions/>}/>
        <Route path='*' element={<NotFound/>}/>
     </Routes>
    </>
  );
}

export default App;
