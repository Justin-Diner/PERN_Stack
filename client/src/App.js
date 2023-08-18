import './App.css';
import InputToDo from './components/InputToDo';
import ListToDos from './components/ListToDos';

function App() {
  return (
    <div className="App">
      <div id="homepage_container">
        <InputToDo />
        <ListToDos />
      </div>
    </div>
  );
}

export default App;
