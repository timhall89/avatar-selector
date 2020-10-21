import React from 'react';
import './AvatarImage.css';
import PropTypes from 'prop-types';

interface AvatarImageProps {
  src: string;
  onClick: () => void;
}

const AvatarImage = ({ src, onClick }: AvatarImageProps) => (
  <img className="avatar-selector-avatar-image" src={src} alt="src" onClick={onClick} />
)

AvatarImage.propTypes = {
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default AvatarImage