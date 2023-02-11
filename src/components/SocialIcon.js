import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SocialIcon({ icon, size }) {
  return(
    <div>

  <FontAwesomeIcon icon="instagram" size="2x" />
  <FontAwesomeIcon icon="facebook-square" size="2x" />
  <FontAwesomeIcon icon="twitter-square" size="2x" />
  <FontAwesomeIcon icon="youtube-square" size="2x" />
  </div>
  )
}

export default SocialIcon;