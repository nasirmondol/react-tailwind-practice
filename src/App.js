import './App.css';
import Header from './components/Header/Header';
import PricingOptions from './components/PricingOptions/PricingOptions';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1 className='text-6xl'>Welcome to my pricing club!!</h1>
      <PricingOptions></PricingOptions>
    </div>
  );
}

export default App;
