import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header>
      <div className='container'>
        <nav className='py-2'>
          <ul className='flex'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to={'about'}>About</Link>
            </li>
            <li>
              <Link to={'contact'}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
