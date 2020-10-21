import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import AvatarSelectImage from '../AvatarSelectImage'
import images from '../assets/images'
import './AvatarSelectList.css';


interface AvatarSelectListProps {
  avatars: Avatar[];
  selectingId?: number;
  selectedId: number;
  onAvatarSelected: (avatar: Avatar) => void;
}

const AvatarSelectList = ({ avatars, selectingId, selectedId, onAvatarSelected }: AvatarSelectListProps) => (
  <div className={`avatar-selector-avatar-select-list ${selectingId !== undefined ? 'selecting' : ''}`}>
    <h4>Choose your avatar</h4>
    <ul>
      {avatars.map(avatar => (
        <li key={avatar.id}>
          <AvatarSelectImage
            src={images[avatar.src]}
            onClick={() => {
              if (selectingId === undefined) onAvatarSelected(avatar)
            }}
            selecting={avatar.id === selectingId}
            selected={avatar.id === selectedId}
          />
        </li>))}
    </ul>
  </div>

)

AvatarSelectList.propTypes = {
  avatars: PropTypes.any.isRequired,
  selectingId: PropTypes.number,
  selectedId: PropTypes.number.isRequired,
  onAvatarSelected: PropTypes.func.isRequired,
}

export default AvatarSelectList;
