import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white-800 flex-between body-text w-full gap-y-10 border-t border-black-400 bg-black-100 px-20 py-12 max-md:flex-col">
      <p>Все права защищены © 2024 TRANE</p>
      <div className="flex gap-x-9">
        <Link href="/">Условия использования</Link>
        <Link href="/">Правовая политика</Link>
      </div>
    </footer>
  );
};

export default Footer;
