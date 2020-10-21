import React, { useState, useCallback } from 'react';
import './App.css';
import AvatarSelector from '../components/AvatarSelector';
import images from '../assets/images';
import Avatar from '../types/Avatar';

const avatarsRaw: Avatar[] = [
  { "src": "avatar1.png", "label": "Avatar 1", "id": 1 },
  { "src": "avatar2.png", "label": "Avatar 2", "id": 2 },
  { "src": "avatar3.png", "label": "Avatar 3", "id": 3 },
  { "src": "avatar4.png", "label": "Avatar 4", "id": 4 },
  { "src": "avatar5.png", "label": "Avatar 5", "id": 5 },
  { "src": "avatar6.png", "label": "Avatar 6", "id": 6 }
]

const avatars: Avatar[] = avatarsRaw.map(avatar => ({ ...avatar, src: images[avatar.src] }))

function App() {
  const [selected, setSelected] = useState<Avatar>(avatars[0]);

  const onAvatarSelected = useCallback(async (avatar: Avatar) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setSelected(avatar);
        resolve()
      }, 1000);
    })
  }, [])

  return (
    <main className="app">
      <h1>Avatar Selector</h1>
      <AvatarSelector avatars={avatars} selected={selected} onAvatarSelected={onAvatarSelected} />
    </main>
  );
}

export default App;
