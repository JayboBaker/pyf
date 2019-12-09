import React from 'react'

import Logo from '../../static/images/logo.svg'

export const underConstruction = () => (
  <section className="section">
    <div className="container" style={{ textAlign: 'center' }}>
      <img style={{ maxWidth: '100%' }} src={Logo} />
      <h1>Currently under construction</h1>
      <p>Check back later!</p>
    </div>
  </section>
)

export default underConstruction
