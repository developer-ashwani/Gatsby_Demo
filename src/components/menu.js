import React from 'react'
import { nominalTypeHack } from 'prop-types';
import { Link } from 'gatsby';

const Menu = menu =>  (
        <div style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0.5rem 0rem 0rem `,
            backgroundColor: 'rgba(25, 120, 222, 0.28)',
            borderRadius: '50px'
        }}>
        
            <ul style={{
                listStyle: 'none',
                marginLeft: '0rem',
                display: 'flex',
                justifyContent: 'space-evenly'
                
            }}>
                <li>Latest Article </li>
                <li>Popular </li>
                <li>Health </li>
                <li>Technology</li>
                <li>Covid19</li>
                {/* <li>Book Summary</li> */}
                


                {/* <li><Link to="/">Latest Article </Link></li> */}
                
            </ul>

        </div>
    )
export default Menu;
