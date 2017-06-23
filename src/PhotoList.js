import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound'

const PhotoList = (props) => {
  const results = props.data;
  let pics;

  if (results.length) {
    pics = results.map(pic => <Photo farm={pic.farm} 
                                     id={pic.id} 
                                     key={pic.id}
                                     secret={pic.secret}
                                     server={pic.server} />);    
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