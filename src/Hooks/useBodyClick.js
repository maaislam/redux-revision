import { useState, useEffect } from 'react';

export default function useBodyClick(ref) {
  const [bodyClick, setBodyClick] = useState(false);

  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current && ref.current.contains(e.target)) {
        return;
      }
      setBodyClick(true);
    };

    document.body.addEventListener('click', onBodyClick);

    return () => {
      setBodyClick(false);
      document.body.removeEventListener('click', onBodyClick);
    };
  });

  return bodyClick;
}
