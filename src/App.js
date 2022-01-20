import { Routes, Route } from 'react-router-dom';

import SideBar from './components/SideBar';
import Birthday from './pages/Birthday/Birthday';
import Review from './pages/Review/Review';
import Tours from './pages/Tours/Tours';

function App() {

  return (
    <>
     <SideBar/>
     <Routes>
        <Route exact path='/' element={<Birthday/>}/>
        <Route path='/tours' element={<Tours/>}/>
        <Route path='/review' element={<Review/>}/>
     </Routes>
    </>
  );
}

export default App;
