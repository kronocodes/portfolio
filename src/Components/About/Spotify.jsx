import React from 'react'

const Spotify = () => {
  return (
    <div className="bg-zinc-900 md:rounded-2xl">
          <div className="flex items-center px-6 pt-5 pb-2">
            <div class="w-3 h-3 rounded-full bg-white glow z-10"></div>
            <div className="px-4 text-sm text-zinc-300">
              M Y &nbsp; F U E L &nbsp; I S &nbsp; M U S I C &nbsp; N O T &nbsp; C A F F I N E
            </div>
          </div>
          <iframe
            className="w-full h-[420PX]"
            src="https://open.spotify.com/embed/playlist/3gIxSIsdVrO7FbJFuLVgBG?utm_source=generator&theme=0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
  )
}

export default Spotify