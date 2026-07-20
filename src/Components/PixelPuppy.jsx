import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';

// Benvictus Pixel Dogs (itch.io, free, consistent art style)
const WALK_SRC = 'https://img.itch.zone/aW1nLzE2Nzk4MjI4LmdpZg==/original/IDq5Fc.gif';
const SIT_SRC  = 'https://img.itch.zone/aW1nLzE2Nzk4NDk1LmdpZg==/original/dTSBJR.gif';

const W = 128;
const H = 96;
const DUR = '35s';

const WoofBubble = ({ bottom, left }) =>
  createPortal(
    <div style={{ position: 'fixed', bottom, left, transform: 'translateX(-50%)', pointerEvents: 'none', zIndex: 9999 }}>
      <div style={{
        position: 'relative',
        background: '#fff',
        color: '#000',
        border: '3px solid #000',
        padding: '5px 10px',
        fontFamily: 'monospace',
        fontSize: '11px',
        fontWeight: 'bold',
        letterSpacing: '1px',
        whiteSpace: 'nowrap',
        boxShadow: '4px 4px 0 #000',
        textTransform: 'uppercase',
        marginBottom: '10px',
      }}>
        woof woof!
        <span style={{ position:'absolute', bottom:'-12px', left:'50%', transform:'translateX(-50%)', width:0, height:0, borderLeft:'7px solid transparent', borderRight:'7px solid transparent', borderTop:'10px solid #000' }} />
        <span style={{ position:'absolute', bottom:'-8px', left:'50%', transform:'translateX(-50%)', width:0, height:0, borderLeft:'5px solid transparent', borderRight:'5px solid transparent', borderTop:'8px solid #fff', zIndex:1 }} />
      </div>
    </div>,
    document.body
  );

const PixelPuppy = () => {
  const [hovered, setHovered] = useState(false);
  const [bubble, setBubble] = useState({ bottom: 0, left: 0 });
  const imgRef = useRef(null);
  const paused = hovered ? 'paused' : 'running';

  const onEnter = () => {
    if (imgRef.current) {
      const r = imgRef.current.getBoundingClientRect();
      setBubble({ bottom: window.innerHeight - r.top + 10, left: r.left + r.width / 2 });
    }
    setHovered(true);
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: `${H}px`, overflowX: 'clip', pointerEvents: 'none' }}>
      <style>{`
        @keyframes puppyMove {
          0%   { transform: translateX(0px); }
          50%  { transform: translateX(calc(100vw - ${W}px)); }
          100% { transform: translateX(0px); }
        }
        @keyframes puppyFace {
          0%   { transform: scaleX(1);  animation-timing-function: step-end; }
          50%  { transform: scaleX(-1); animation-timing-function: step-end; }
          100% { transform: scaleX(1); }
        }
      `}</style>

      <div style={{
        position: 'absolute', bottom: 0, left: 0,
        animation: `puppyMove ${DUR} linear infinite`,
        animationPlayState: paused,
      }}>
        <div style={{
          animation: hovered ? 'none' : `puppyFace ${DUR} linear infinite`,
          animationPlayState: paused,
          transformOrigin: `${W / 2}px center`,
        }}>
          <img
            ref={imgRef}
            src={hovered ? SIT_SRC : WALK_SRC}
            width={W}
            height={H}
            style={{ imageRendering: 'pixelated', display: 'block', pointerEvents: 'auto', cursor: 'pointer' }}
            onMouseEnter={onEnter}
            onMouseLeave={() => setHovered(false)}
          />
        </div>
      </div>

      {/* {hovered && <WoofBubble bottom={bubble.bottom} left={bubble.left} />} */}
    </div>
  );
};

export default PixelPuppy;
