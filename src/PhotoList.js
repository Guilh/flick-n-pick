import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoList = (props) => {
  const results = props.data;
  let pics;

  if (results.length) {
    pics = results.map(pic => {
      return (
        <Photo
          key={pic.id}
          url={pic.urls.regular}
          alt={pic.alt_description} />
      );
    });
  } else {
    pics = <NotFound />
  }
  return (
    <ul>
      {pics}
    </ul>
  );
}

export default PhotoList;
