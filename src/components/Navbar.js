import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) { // props are acceopted as arguments in side this function

  // colors for the color pallete
  const colors = {
    blue: 'rgb(16 18 57)',
    purple: 'rgb(67, 0, 69)',
    orange: 'rgba(255, 128, 0, 0.795)',
    black: 'rgb(56, 56, 56)'
  }

  // to handle click on the color pallete buttons
  const changeColorPallete = (e) => {
    const color = colors[e.target.id];
    props.setDarkModeColor(color);
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
          </ul>
          {/* add the other button here */}
          <div className='colorPalette' onClick={changeColorPallete}>
            <button id='blue' className='palettedOptions'></button>
            <button id='purple' className='palettedOptions'></button>
            <button id='orange' className='palettedOptions'></button>
            <button id='black' className='palettedOptions'></button>
          </div>

          {/* <div className='colorPalette' onClick={changeColorPallete}>
            <button id='blue' className='palettedOptions'></button>
          </div> */}

          <div className="form-check form-switch">
            <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Toggle Dark Mode</label>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
          </div>
        </div>
      </div>
    </nav>
  )
}

// we can set types for props
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

// setting default props
Navbar.defaultProps = {
  title: "title",
  aboutText: "About"
}

// write rfc for react functin based component