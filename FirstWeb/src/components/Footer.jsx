import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 text-center" id='foot'> 
      <p>&copy; {new Date().getFullYear()} Apple Inc. All rights reserved.</p>
      <p className="text-sm mt-2">Designed by Siddharth</p>
    </footer>
  );
};

export default Footer;