import React from 'react';
import './AvatarSelectImage.css';
import PropTypes from 'prop-types';

interface AvatarImageProps {
  src: string;
  onClick: () => void;
  selecting?: boolean;
  selected?: boolean;
}

const AvatarImage = ({ src, onClick, selecting, selected }: AvatarImageProps) => (
  <div className={`avatar-selector-avatar-select-image ${selecting ? 'selecting' : ''} ${selected ? 'selected' : ''}`} onClick={onClick}>
    <div className="spin"></div>
    <img className="image" src={src} alt="src" />
  </div>
)

AvatarImage.propTypes = {
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  selecting: PropTypes.bool,
  selected: PropTypes.bool,
}

export default AvatarImage