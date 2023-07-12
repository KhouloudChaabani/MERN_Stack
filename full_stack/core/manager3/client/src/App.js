import Form from './components/Form';
import ShowOne from './components/showoneproduct';
import Show from './components/showproduct';
import Update from './components/update';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';

function App() {
  const [refresh,setrefresh]=useState("");
  return (
    <div className="App">
    <Form setrefresh={setrefresh}/>
    <Routes>
    <Route path='/' element={<Show refresh={refresh}/>} />
    <Route path='/products/:id' element={<ShowOne />} />
    <Route path='/products/edit/:id' element={<Update />} />
    </Routes>
    </div>
  );
}
export default App;