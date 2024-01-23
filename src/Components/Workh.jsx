import React, {useState, useEffect} from "react";

const Workh = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
    <div className="flex justify-between px-4 items-center">
        <div className="text-[120px]">Work</div>
        <button className="flex items-center justify-center w-48 h-24 rounded-full bg-lime-400 bg-opacity-100 p-[5px] text-2xl ">
              See all <br></br>projects
            </button>
        </div>
    {isSmallScreen ? (
      <div className="px-6">
        <div class="">
          <div className="pb-6">
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
          <div class="">
          <img className="rounded-xl" src="https://images.prismic.io/chris-folio/b4ae4311-772b-41e5-a1ff-13255f2fdda5_1d0f1778-95a6-4254-9984-bbed69cd715c_01-Hero-2x.webp?auto=compress,format" draggable="false" />
          </div>
          <div class="">
          <img className="rounded-xl" src="https://images.prismic.io/chris-folio/1dbc45b9-b8fd-4ecc-a58e-45feead48fdc_46af6172-b2b9-429f-8a9c-c7118ce050de_01-Kapsul-Featured_1.webp?auto=compress,format" draggable="false" />
          </div>
          <div class="">
          <img className="rounded-xl" src="https://images.prismic.io/chris-folio/9037738d-61eb-4249-b0da-63166073c04d_d4b9fa4f-a8d7-44fa-8964-947c9ff550ba_04-TaylorMade-Featured_1.webp?auto=compress,format" draggable="false" />
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default Workh;
