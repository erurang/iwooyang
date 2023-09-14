import React from "react";

function MainPage() {
  return (
    <>
      {/* 56 80 */}
      <header className="h-14 p-2 bg-white md:pt-5 md:px-2 md:h-20 ">
        {/* logo */}
        <div>
          <img
            className="w-64 hidden sm:block"
            src="http://iwooyang.com/images/common/logo.jpg"
          />
          <img className="sm:hidden" src="assets/short_logo.png" />
        </div>
        <div></div>
      </header>
      <div className="h-10 bg-black w-full">
        <video width="100%" height="360" controls autoPlay muted>
          <source src="assets/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <footer className="bg-black w-full h-20">
        <div>asdf</div>
      </footer>
    </>
  );
}

export default MainPage;
