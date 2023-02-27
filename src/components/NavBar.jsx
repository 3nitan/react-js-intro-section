import React from 'react';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <ul className='navbar-items'>
          <div className='logo'>
            <a href='#'>
              <img src='/assets/logo.svg' alt='logo' />
            </a>
          </div>
          <li className='navbar-item'>
            <a href='#' className='navbar-link'>
              <p>
                Features
                <img
                  className='dropdown-arrow'
                  src='/assets/icon-arrow-down.svg'
                  alt='arrow-down'
                />
              </p>
            </a>
            <ul className='dropdown features-dropdown'>
              <li>
                <a href='#'>
                  <p>
                    <img src='/assets/icon-todo.svg' alt='todo icon' />
                    Todo List
                  </p>
                </a>
              </li>
              <li>
                <a href='#'>
                  <p>
                    <img src='/assets/icon-calendar.svg' alt='calendar logo' />
                    Calendar
                  </p>
                </a>
              </li>
              <li>
                <a href='#'>
                  <p>
                    <img src='/assets/icon-reminders.svg' alt='reminders' />
                    Reminders
                  </p>
                </a>
              </li>
              <li>
                <a href='#'>
                  <p>
                    <img src='/assets/icon-planning.svg' alt='planning' />
                    Planning
                  </p>
                </a>
              </li>
            </ul>
          </li>

          <li className='navbar-item'>
            <a href='#' className='navbar-link'>
              <p>
                Company
                <img
                  className='dropdown-arrow'
                  src='/assets/icon-arrow-down.svg'
                  alt='arrow-down'
                />
              </p>
            </a>
            <ul className='dropdown company-dropdown'>
              <li>
                <a href='#'>
                  <p>History</p>
                </a>
              </li>
              <li>
                <a href='#'>
                  <p>Our Team</p>
                </a>
              </li>
              <li>
                <a href='#'>
                  <p>Blog</p>
                </a>
              </li>
            </ul>
          </li>

          <li className='navbar-item'>
            <a href='#' className='navbar-link'>
              <p>Careers</p>
            </a>
          </li>

          <li className='navbar-item'>
            <a href='#' className='navbar-link'>
              <p>About</p>
            </a>
          </li>
        </ul>

        <ul className='navbar-items'>
          <li className='navbar-item'>
            <a href='#' className='navbar-link'>
              <p>Login</p>
            </a>
          </li>

          <li className='navbar-item'>
            <a href='#' className='navbar-link'>
              <p className='outline'>Register</p>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
