import './App.css';
import PersonCard from "./components/PersonCard"

const Arr=[
  {firstName:"Doe", lastName:"Jane",age:25,hairColor:"Black"},
  {firstName:"Smith", lastName:"John",age:88,hairColor:"Brown"},
  {firstName:"Fillmore", lastName:"Millard",age:50,hairColor:"Brown"},
  {firstName:"Smith", lastName:"Maria",age:62,hairColor:"Brown"}
]


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {Arr.map((person)=>{return <PersonCard person={person}  />})}
        
      </header>
    </div>
  );
}

export default App;
