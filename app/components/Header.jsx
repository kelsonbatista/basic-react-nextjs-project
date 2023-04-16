import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className='header'>
        <div className='container'>
          <div className='logo'>
            <Link href='/'>Traversy Media</Link>
          </div>
          <div className="links">
            <Link href='/about'>About</Link>
            <Link href='/about/team'>Our Team</Link>
            <Link href='/code/repos'>Code</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
