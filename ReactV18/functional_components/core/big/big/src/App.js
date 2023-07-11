import Personcard from './components/personCard';
function App() {
  const personcard = [
    {
      name: 'Doe',
      lastname: 'Jane',
      age: 45,
      haircolor: 'Black'
    },
    {
      name: 'Smith',
      lastname: 'John',
      age: 88,
      haircolor: 'Brown'
    },
    {
      name: 'Fillmore',
      lastname: 'Millard',
      age: 50,
      haircolor: 'Brown'
    },
    {
      name: 'Smith',
      lastname: 'Maria',
      age: 62,
      haircolor: 'Brown'
    }
  ];
  return (
    <div className="App">
git ad      {
        personcard.map((person, idx)=>{
          return(<Personcard person = {person} idx = {idx} />

          )
        })
      }
    </div>
  );
}

export default App;
