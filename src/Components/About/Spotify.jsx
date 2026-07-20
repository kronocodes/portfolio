import React from 'react';
import { useTheme } from '../../ThemeContext';

const Spotify = () => {
  const { isLight } = useTheme();
  const subText = isLight ? '#888888' : '#71717a';

  return (
    <div className="bg-zinc-900 md:rounded-2xl overflow-hidden">
      <div className="flex items-center px-6 pt-5 pb-2">
        <div
          className="w-3 h-3 rounded-full glow"
          style={{ background: isLight ? '#111111' : '#ffffff', flexShrink: 0 }}
        />
        <span className="px-4 text-sm" style={{ color: subText, letterSpacing: '0.15em' }}>
          MY FUEL IS MUSIC NOT CAFFINE
        </span>
      </div>
      <iframe
        key={isLight ? 'light' : 'dark'}
        className="w-full h-[420px]"
        src={`https://open.spotify.com/embed/playlist/3gIxSIsdVrO7FbJFuLVgBG?utm_source=generator${isLight ? '' : '&theme=0'}`}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
};

export default Spotify;
