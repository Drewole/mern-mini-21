import react, {useState,useEffect} from 'react'
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";
import Table from './components/Table';
import SearchBar from './components/SearchBar'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://via.placeholder.com/50"
 className="App-logo" alt="logo" />

      </header>
      <SearchBar />
      <Table />

    </div>
  );
}

export default App;
