import logo from './logo.svg';
import './App.css';

function Header() {
  return <header>
    <h1><a href="/">React</a></h1>
  </header>
}

function App() {
  return (
    <div>
      <Header></Header>
        <nav>
        </nav>
    </div>
  );
}

export default App;
