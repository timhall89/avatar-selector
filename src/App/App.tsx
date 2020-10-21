import React, { useState, useCallback, useMemo } from 'react';
import './App.css';
import AvatarSelector from '../components/AvatarSelector';
import Avatar from '../types/Avatar';
import getAvatars from '../utils/getAvatars';
import postAvatar from '../utils/postAvatar';

function App() {
  const avatars = useMemo(getAvatars, []);
  const [selected, setSelected] = useState<Avatar>(avatars[0]);

  const onAvatarSelected = useCallback(async (avatar: Avatar) => {
    const success = await postAvatar(avatar);
    if (success) setSelected(avatar);
    return success;
  }, [])

  return (
    <main className="app">
      <h1>Avatar Selector</h1>
      <AvatarSelector avatars={avatars} selected={selected} onAvatarSelected={onAvatarSelected} />
    </main>
  );
}

export default App;
