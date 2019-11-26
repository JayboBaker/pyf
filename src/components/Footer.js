import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    <br />
    <h2 className="taCenter">
      Follow us{' '}
      <a href="https://instagram.com/pinnacleyachtfinishing/">@pinnacleyachtfinishing</a>
    </h2>
    <br />
    <InstagramFeed count="8" />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://jamesbaker.me.uk/">JB Web</a>.
        </span>
      </div>
    </footer>
  </div>
)
