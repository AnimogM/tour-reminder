import { useState } from 'react';
import Birthday from './components/Birthday';
import Tours from './components/Tours';

function App() {
  const[menu, setMenu] = useState("tours");

  return (
    <div>
      <nav className="header">
        <button className={menu === "birthday"? 'active': ''} onClick={()=> setMenu("birthday")}>Birthday Reminder</button>
        <button className={menu === "tour"? 'active': ''} onClick={()=> setMenu("tour")}>Tours</button>
      </nav>
     <main>
        {menu === "birthday"? <Birthday/>: <Tours/>}
     </main>
    </div>
  );
}

export default App;
