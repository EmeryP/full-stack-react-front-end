import React from 'react';

const Card = (props) => {
  return (
    <div className='card'>
      <header>{props.content.title}</header>
      <p>{props.content.copy}</p>
      <figure>
        <img 
        src={props.content.media.href}
        alt={props.content.media.alt}
        title={props.content.media.title}
        />
        <figcaption>{props.content.media.title}</figcaption>
      </figure>
      <div className='links'>
      {props.content.links.map( (link, idx) => (
        <a className={link.type} href={link.href}>
          {link.title}
        </a>
      ))}
      </div>
    </div>
  );
};

export default Card;