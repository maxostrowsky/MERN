import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard lastname='Doe' firstname='Jane' age='45' haircolor='Brown'/>
      <PersonCard lastname='Smith' firstname='John' age='33' haircolor='Bald'/>
      <PersonCard lastname='Fillmore' firstname='Milliard' age='22' haircolor='Blonde'/>
      <PersonCard lastname='Ostrowsky' firstname='Max' age='27' haircolor='Brown'/>
    </div>
  );
}

export default App;
