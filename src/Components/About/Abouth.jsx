import React, { useState } from 'react'
import { useTheme } from '../../ThemeContext';

const Aboutme = `https://res.cloudinary.com/dw2fhd58a/image/upload/v1752184411/PXL_20241122_162100233_b43pzc.jpg`;

const socials = [
  { label: 'Instagram', dot: '#ec4899', href: 'https://www.instagram.com/rakeshnandann/' },
  { label: 'Twitter',   dot: '#71717a', href: 'https://twitter.com/kronocodes' },
  { label: 'LinkedIn',  dot: '#3b82f6', href: 'https://www.linkedin.com/in/abhisheknandan2013/' },
  { label: 'Github',    dot: '#a855f7', href: 'https://github.com/kronocodes' },
];

const SocialPill = ({ label, dot, href, isLight }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      key={label}
      target="_blank"
      rel="noreferrer"
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: hovered ? (isLight ? '#111111' : '#ffffff') : (isLight ? '#555555' : '#d4d4d8'),
        borderColor: hovered ? (isLight ? '#888888' : '#52525b') : (isLight ? '#d4d0c8' : '#27272a'),
        background: isLight ? '#ffffff' : '#18181b',
        transition: 'all 0.2s',
      }}
      className="flex items-center gap-2 px-3 py-2 rounded-full text-sm border"
    >
      <span style={{ width: '6px', height: '6px', borderRadius: '50%', flexShrink: 0, background: dot }} />
      {label}
    </a>
  );
};

const Abouth = () => {
  const { isLight } = useTheme();
  return (
    <div className="z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

      {/* Left — text */}
      <div className="flex flex-col justify-between gap-8 px-4">

        <div className="flex flex-col gap-5">
          <span className="text-zinc-500 text-xs tracking-[0.25em] uppercase font-medium">
            Based in Bangalore, India
          </span>

          <div>
            <h2 className="text-white text-4xl md:text-5xl xl:text-[3.4rem] font-semibold leading-[1.1] tracking-tight">
              Abhishek Nandan
            </h2>
            <p className="text-zinc-400 text-xl md:text-2xl font-normal mt-2">
              Software developer &{' '}
              <span className="inline-flex items-baseline">
                design<span className="grader text-[20px] md:text-[22px]">er.</span>
              </span>
            </p>
          </div>

          <div className="w-12 h-px bg-zinc-700" />

          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            In my downtime I enjoy exploring the city&nbsp;🏙️, cooking food&nbsp;🧑🏻‍🍳,
            playing guitar&nbsp;🎸 or cheering for Hamilton&nbsp;🏁.
          </p>

          <p className="text-zinc-600 text-sm italic border-l border-zinc-700 pl-4">
            "I truly believe you are as good as your weakest work."
          </p>
        </div>

        {/* Social links */}
        <div className="flex flex-wrap gap-1">
          {socials.map(({ label, dot, href }) => (
            <SocialPill key={label} label={label} dot={dot} href={href} isLight={isLight} />
          ))}
        </div>
      </div>

      {/* Right — photo */}
      <div className="relative flex items-start justify-center lg:justify-end">
        <div className="w-full max-w-sm lg:max-w-none overflow-hidden rounded-2xl border border-zinc-800">
          <img
            src={Aboutme}
            alt="Abhishek Nandan"
            className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
            style={{ aspectRatio: '4/5' }}
          />
        </div>
      </div>

    </div>
  );
};

export default Abouth;
