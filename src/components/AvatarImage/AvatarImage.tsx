import React from 'react';
import './AvatarImage.css';
import PropTypes from 'prop-types';

interface AvatarImageProps {
  src: string;
  label: string;
  onClick: () => void;
}

const AvatarImage = ({ src, label, onClick }: AvatarImageProps) => (
  <img
    className="avatar-selector-avatar-image"
    src={src}
    alt={label}
    onClick={onClick}
    title={label}
  />
)

AvatarImage.propTypes = {
  src: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default AvatarImage