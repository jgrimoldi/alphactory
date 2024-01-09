import React from 'react';
import { Button } from './Button';

export function Anchor ({ id, width, href, title, variant = 'purpleButton', onClick }) {
  const handleClick = (event) => {
    event.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 180,
        behavior: 'smooth'
      });
      setTimeout(() => {
        element.focus();
      }, 1000);
    }
    onClick && onClick();
  };

  return (
    <span style={{ width }} className='self-end' onClick={handleClick}>
      <Button id={id} width={width} title={title} variant={variant} />
    </span>
  );
}
