import React from 'react';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './components/pages/Home';
import Chat from './components/pages/Chat';
import Contact from './components/pages/Contact';
import './App.css';

function App() {
  return ( //Creation of routes to help make transition between pages smoother
    // have to use Routes instead of switch where switch would help 
    //specify where you will end up based on what element of the navabar you press
    <Router>
      <Navbar/>
      <Routes> 
        <Route exact path="/" element={<Home/>}/>
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
    
    // <Router>
    //   <nav>
    //     <Link to="/"><Home /></Link>
    //   </nav>
    // </Router>
    // <div className="App">
    //   <Navbar />
    // </div>
    // <Router>
    //   <div className="App">
    //     <Navbar/>
    //     <div className="content">
    //       <Routes>
    //         <Route path="/">
    //           <Home />
    //         </Route>
    //       </Routes>
    //     </div>
    //   </div>
    // </Router>
    

    
    
  );
}

export default App;
