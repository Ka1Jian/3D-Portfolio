import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className='cta'>
        <p  className="cta-text">If your're interested
            <br className="sm:block hidden"></br>
            Contact me! 
        </p>
        <Link to="/contact" className="btn">
            Click Here
        </Link>
    </section>
  )
}

export default CTA;