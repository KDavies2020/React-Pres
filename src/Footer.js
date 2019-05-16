import React from 'react'

 function Footer() {
  return (
    <div style={footStyle}>
      <h2> This is a footer at the bottom of the page to indicate a separate child component</h2>
    </div>
  )
}

const footStyle = {
    border: '3px solid blue',
    margin: "auto",
  };

export default Footer;
