import React from 'react';

const Photo = (props) =>
  <li>
    <img src={props.url} alt={props.alt} />
  </li>;

export default Photo;
