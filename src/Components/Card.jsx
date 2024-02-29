import React, { useEffect } from "react";
import he from "../assets/mog/he.png"
import a from "../assets/mog/3.jpeg"
import b from "../assets/mog/5.png"
import c from "../assets/mog/8.jpeg"
import d from "../assets/mog/10.png"
import e from "../assets/mog/12.jpeg"
import f from "../assets/mog/13.png"
import h from "../assets/mog/41.jpg"
import i from "../assets/mog/42.jpg"
import j from "../assets/mog/43.png"
import k from "../assets/mog/44.png"
import l from "../assets/mog/46.png"
const lifev = [he,b,f,h,i,j,k];
const lifeh = [a,c,d,e,l];
const Card = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scrollers);
    }
  }, []); // Empty dependency array to run the effect only once after initial render

  function addAnimation(scrollers) {
    scrollers.forEach((scroller) => {
      // Check if the animation has already been added
      if (!scroller.hasAttribute("data-animated")) {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);
  
        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);
  
        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      }
    });
  }

  return (
    <>
    <div className="scroller" data-direction="right" data-speed="slow">
      <div className="scroller__inner">
      {lifev.map((lifev, id) => (
        <div className="border border-zinc-700 h-72 w-56 rounded-3xl bg-zinc-800 p-1">
          <img className="object-cover w-full h-full rounded-2xl" src={lifev} alt="" />
        </div>
      ))}
      
        </div>
    </div>
    <div className="scroller" data-direction="right" data-speed="">
      <div className="scroller__inner">
      {lifeh.map((lifeh, id) => (
        <div className="border border-zinc-700 h-56 w-72 rounded-3xl bg-zinc-800 p-1">
          <img className="object-cover w-full h-full rounded-2xl" src={lifeh} alt="" />
        </div>
      ))}
      
        </div>
    </div>
    
    </>
  );
};

export default Card;
