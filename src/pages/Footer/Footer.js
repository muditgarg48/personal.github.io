import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
        <div id="footer">
            Powered By
            <hr id="footer-divider"/>
            <div id="footer-icons">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="react"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" alt="npm"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="github"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="vscode"/>
            </div>
        </div>
    </div>
  )
}

export default Footer;