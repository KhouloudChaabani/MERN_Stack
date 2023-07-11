import './App.css';
import People from './components/People';
import Form from './components/Form';
import ErrorPage from './ErrorPage';
import {
  Routes,
  Route,
} from "react-router-dom";
function App() {

  return (
    <div className="App">
      <fieldset>
        <legend>App.js</legend>
        <Form />
        <Routes>
          <Route path='/:value/:id' element={<People/>} />
          <Route path='/*' element={<ErrorPage/>} />
        </Routes>
      </fieldset>
    </div>
  );
}

export default App;