import React from 'react'

const Spotify = () => {
  return (
    <div className="bg-neutral-800 border border-zinc-600 md:rounded-2xl">
          <div className="flex items-center px-6 pt-5">
            <div class="w-3 h-3 rounded-full bg-white glow z-10"></div>
            <div className="px-4 text-sm text-zinc-300">
              M Y &nbsp; C O D I N G &nbsp; P L A Y L I S T
            </div>
          </div>
          <iframe
            className="w-full h-[42vh] "
            src="https://open.spotify.com/embed/playlist/0oRActjFDEhtOG8eCteVkC?utm_source=generator&theme=0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
  )
}

export default Spotify