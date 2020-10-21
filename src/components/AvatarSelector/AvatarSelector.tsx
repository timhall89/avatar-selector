import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AvatarSelector.css';
import AvatarImage from '../AvatarImage';
import AvatarSelectList from '../AvatarSelectList';
import Popover from '../Popover';
import Avatar from '../../types/Avatar';

interface AvatarSelectorProps {
  avatars: Avatar[];
  selected: Avatar;
  onAvatarSelected: (avatar: Avatar) => Promise<boolean>
};

const AvatarSelector = ({ avatars, selected, onAvatarSelected }: AvatarSelectorProps) => {
  const [showPopover, setShowPopover] = useState(false);
  const [selecting, setSelecting] = useState<Avatar | null>(null);
  const handleAvatarSelected = async (avatar: Avatar) => {
    setSelecting(avatar);
    if (await onAvatarSelected(avatar)) {
      setSelecting(null);
      setShowPopover(false);
    };
  }
  return (
    <div className="avatar-selector">
      <AvatarImage src={selected.src} label={selected.label} onClick={() => setShowPopover(current => !current)} />
      <Popover show={showPopover}>
        <AvatarSelectList
          avatars={avatars}
          selectingId={selecting?.id}
          selectedId={selected.id}
          onAvatarSelected={handleAvatarSelected}
        />
      </Popover>
    </div>
  );
}


AvatarSelector.propTypes = {
  avatars: PropTypes.array.isRequired,
  selected: PropTypes.object.isRequired,
  onAvatarSelected: PropTypes.func.isRequired,
}

export default AvatarSelector;
