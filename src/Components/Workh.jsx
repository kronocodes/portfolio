import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Workh = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex justify-center bg-black">
    <div className="max-w-[1300px] text-white">
    <div className="flex justify-between px-4 py-4 items-center">
        <div className="text-7xl">Work</div>
        <Link to='/work'>
        <button className="flex items-center justify-center rounded-full bg-orange-500 bg-opacity-100 p-5 text-xl ">
              See all projects
            </button>
            </Link>
        </div>
    {isSmallScreen ? (
      <div className="px-6">
        <div class="">
        <div className="pb-6 relative">
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="mb-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Visit Website</button>
          </div>
          <div className="text-4xl bg-black text-white px-4 py-2 rounded-lg">Learn More</div>
      </div>
      <img className="rounded-xl" src="https://images.prismic.io/chris-folio/b4ae4311-772b-41e5-a1ff-13255f2fdda5_1d0f1778-95a6-4254-9984-bbed69cd715c_01-Hero-2x.webp?auto=compress,format" draggable="false" />
  </div>
          <div className="pb-6">
          <img className="rounded-xl" src="https://images.prismic.io/chris-folio/1dbc45b9-b8fd-4ecc-a58e-45feead48fdc_46af6172-b2b9-429f-8a9c-c7118ce050de_01-Kapsul-Featured_1.webp?auto=compress,format" draggable="false" />
          </div>
          <div className="pb-6">
          <img className="rounded-xl" src="https://images.prismic.io/chris-folio/9037738d-61eb-4249-b0da-63166073c04d_d4b9fa4f-a8d7-44fa-8964-947c9ff550ba_04-TaylorMade-Featured_1.webp?auto=compress,format" draggable="false" />
          </div>
        </div>
      </div>
      ) : (
      <div className="pb-4">
        <div class="grid grid-cols-3 gap-3 px-4">
          <div class="relative group">
              <img class="rounded-xl" src="https://images.prismic.io/chris-folio/b4ae4311-772b-41e5-a1ff-13255f2fdda5_1d0f1778-95a6-4254-9984-bbed69cd715c_01-Hero-2x.webp?auto=compress,format" draggable="false" />
              <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity flex justify-center items-center">
                  <span class="text-white text-2xl font-bold">Image 1</span>
              </div>
          </div>
          <div class="relative group">
              <img class="rounded-xl" src="https://images.prismic.io/chris-folio/1dbc45b9-b8fd-4ecc-a58e-45feead48fdc_46af6172-b2b9-429f-8a9c-c7118ce050de_01-Kapsul-Featured_1.webp?auto=compress,format" draggable="false" />
              <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity flex justify-center items-center">
                  <span class="text-white text-2xl font-bold">Image 2</span>
              </div>
          </div>
          <div class="relative group">
              <img class="rounded-xl" src="https://images.prismic.io/chris-folio/9037738d-61eb-4249-b0da-63166073c04d_d4b9fa4f-a8d7-44fa-8964-947c9ff550ba_04-TaylorMade-Featured_1.webp?auto=compress,format" draggable="false" />
              <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity flex justify-center items-center">
                  <span class="text-white text-2xl font-bold">Image 3</span>
              </div>
          </div>
        </div>
      </div>
      )}
    </div>
    </div>
  );
};

export default Workh;
