import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import {fetchProducts} from './redux/productsSlice'
import { useEffect } from 'react';


function App() {

  const products=useSelector(state=>state.products)
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(fetchProducts())
  },[dispatch])


  // useEffect(()=>{
  //  console.log('prpducts : ',products)
  // },[products])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
