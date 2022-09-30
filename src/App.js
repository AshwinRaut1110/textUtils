import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  // passing props to Navbar, title in this case

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);
  const [darkModeColor, setDarkModeColor] = useState('rgb(56, 56, 56)');

  const showAlert = (message, type) => {
    setAlert({
      message,
      type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {

      setMode('dark');
      document.body.style.backgroundColor = darkModeColor;
      document.body.style.color = 'white';
      showAlert('Dark mode has been enabled.', 'primary');
      // document.title = 'TextUtils - Dark Mode';

    } else {

      setMode('light');
      document.body.classList.remove('bg-dark');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('light mode has been enabled.', 'primary');
      // document.title = 'TextUtils - Light Mode';

    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" aboutText="About textUtils" mode={mode} toggleMode={toggleMode} setDarkModeColor={setDarkModeColor} />
        <Alert alert={alert} />
        <div className="container my-3">
            {/* <About mode={mode} darkModeColor={darkModeColor} /> */}
            <TextForm heading="Enter the text you wish to edit" mode={mode} showAlert={showAlert} darkModeColor={darkModeColor} />
          {/* <Routes>
            <Route exact path="/about" element={} />
            <Route exact path="/" element={} />
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
