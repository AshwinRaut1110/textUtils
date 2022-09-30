import React, { useState } from 'react'
import EmailsP from './EmailsP';

export default function TextForm(props) {

  const [text, setText] = useState(''); // using useState, setText is used to set our text, the useState can only be used inside the function component
  const [emailsText, setEmailsText] = useState('');

  const toUpper = () => {
    setText(text.toUpperCase());
    props.showAlert("Text converted to uppercase.", 'success');
  }
  
  const toLower = () => {
    setText(text.toLowerCase());
    props.showAlert("Text converted to lowercase.", 'success');
  }
  
  const getEmails = () => {
    setEmailsText(text);
  }
  
  const clearText = () => {
    setText('');
    props.showAlert("Text cleared.", 'success');
  }
  
  const copy = () => {
    navigator.clipboard.writeText(text);
    
    props.showAlert(`Copied the text: "${text}" to the clipboard.`, 'success');
  }
  
  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed from text.", 'success');
  }

  const countWords = (string) => {
    string = string.split(' ');
    string = string.filter(word => word !== '');
    return string.length;
  }

  const onTextChange = (e) => {
    setText(e.target.value);
  }

  return (
    <>

      <div>
        <h1><label htmlFor="myText" className="form-label">{props.heading}</label></h1>
        <div className="mb-3">

          <textarea className="form-control" id="myText" rows="12" placeholder='Enter your text here' value={text} onChange={onTextChange} style={{
            backgroundColor: props.mode === 'light' ? 'white' : props.darkModeColor,
            color: props.mode === 'light' ? 'black' : 'white'
          }}></textarea>

        </div>

        <button type="button" className="btn btn-primary mx-1" onClick={toUpper}>Convert To Uppercase</button>
        <button type="button" className="btn btn-primary mx-1" onClick={toLower}>Convert To Lowercase</button>
        <button type="button" className="btn btn-primary mx-1" onClick={getEmails}>Get Emails</button>
        <button type="button" className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
        <button type="button" className="btn btn-primary mx-1" onClick={copy}>Copy All Text</button>
        <button type="button" className="btn btn-primary mx-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>

      </div>
      <div className="container">
        <h2>Your Text Summary</h2>
        <p>{countWords(text)} Words, {text.length} characters</p>
        <p>{text !== '' ? (0.008 * text.split(' ').length) : 0} Minutes to read the text.</p>
        <h2>Emails in your text</h2>
        <EmailsP emailsText={emailsText} />
      </div>
    </>
  )
}