import './App.css';
import { Routes, Route } from 'react-router-dom'
import Main from './components/Main';
import Form from './components/Form';
import Edit from './components/Edit';
import Showone from './components/Showone';
function App() {
  return (
    <div className="App">
      <fieldset>
        <legend>App.js</legend>
        <Routes>
          <Route path='/' element = {<Main/>} />
          <Route path='/new' element = {<Form/>} />
          <Route path='/edit/:id' element = {<Edit/>} />
          <Route path='/author/:id' element = {<Showone/>} />

        </Routes>
      </fieldset>
    </div>
  );
};

export default App;