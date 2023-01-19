import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'


// 컴포넌트 import
import Navigation from './components/Navigation';
import Main from './components/Main';
import Item from './components/Item';
import Search from './components/Search';


function App() {
  const [index, setIndex] = useState(0);
  let [animations, setAnimations] = useState([]);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="App">
      <section>
        <Routes>
          <Route path='/' element={<Navigation></Navigation>}>
            <Route index element={<Main index={index} handleSelect={handleSelect}></Main>}></Route>
            <Route path='/search' element={<Search animations={animations} setAnimations={setAnimations}></Search>}></Route>
            <Route path='/items/:id' element={<Item animations={animations}></Item>}></Route>
          </Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;