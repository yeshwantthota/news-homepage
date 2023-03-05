import { useState } from "react";
import logo from "./assets/images/logo.svg";
import menuIcon from "./assets/images/icon-menu.svg";
import menuClose from "./assets/images/icon-menu-close.svg";
import homeImageMobile from "./assets/images/image-web-3-mobile.jpg";
import homeImageDesktop from "./assets/images/image-web-3-desktop.jpg";
import img1 from "./assets/images/image-retro-pcs.jpg";
import img2 from "./assets/images/image-top-laptops.jpg";
import img3 from "./assets/images/image-gaming-growth.jpg";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App ">
      <div className="container m-5 min-h-screen w-auto">
        <div className="navbar flex justify-between items-center relative ">
          <div className="logo  p-2">
            <img src={logo} alt="logo" />
          </div>
          <div
            className="menu-icon  m-2 p-2 md:hidden z-50 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <img src={open ? menuClose : menuIcon} alt="" />
          </div>

          <div className="items hidden md:flex md:justify-around md:gap-5 md:text-gray-500 md:font-semibold cursor-pointer ">
            <div className="hover:text-red-300">Home</div>
            <div className="hover:text-red-300">New</div>
            <div className="hover:text-red-300">Popular</div>
            <div className="hover:text-red-300">Trending</div>
            <div className="hover:text-red-300">Categories</div>
          </div>

          {open && (
            <>
              <div className="absolute w-2/3 top-14 right-0 bg-white ">
                <div className="flex flex-col gap-8  h-screen p-4 cursor-pointer">
                  <span className="hover:text-red-300">Home</span>
                  <span className="hover:text-red-300">New</span>
                  <span className="hover:text-red-300">Popular</span>
                  <span className="hover:text-red-300">Trending</span>
                  <span className="hover:text-red-300">Categories</span>
                </div>
              </div>

              <div className="absolute w-1/3 h-screen top-16 left-0 bg-black opacity-30"></div>
            </>
          )}
        </div>

        <div className="main  flex flex-col md:grid md:grid-rows-3 md:grid-cols-3 md:gap-y-5 md:gap-x-2">
          <div className="item border-b-2 border-b-white md:row-span-2 md:col-span-2">
            <img className=" md:hidden" src={homeImageMobile} alt="" />
            <img
              className="hidden md:block h-2/3 w-max"
              src={homeImageDesktop}
              alt=""
            />
            <h1 className="text-5xl font-bold py-4">
              The Bright Future of Web 3.0?
            </h1>
            <p className="font-medium flex flex-wrap">
              {" "}
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="bg-red-500 text-white  text-sm tracking-wide  py-2 px-5 rounded-sm my-4 hover:bg-black">
              READ MORE
            </button>
          </div>
          <div className="item bg-zinc-900 p-3 mb-5 md:row-span-2">
            <h1 className="text-2xl text-yellow-400">New</h1>
            <div className="py-2">
              <div className="text-white">
                <h2>Hydrogen VS Electric Cars</h2>
                <p className="text-gray-400 text-sm my-2">
                  Will hydrogen-fueled cars ever catch up to EVs?
                </p>
              </div>
              <div class="border-t border-t-1 border-gray-400 "></div>
            </div>
            <div className="py-2">
              <div className="text-white">
                <h2>The Downsides of AI Artistry</h2>
                <p className="text-gray-400 text-sm my-2">
                  What are the possible adverse effects of on-demand AI image
                  generation?
                </p>
              </div>
              <div class="border-t border-t-1 border-gray-400"></div>
            </div>
            <div className="py-2">
              <div className="text-white">
                <h2> Is VC Funding Drying Up?</h2>
                <p className="text-gray-400 text-sm my-2">
                  Private funding by VC firms is down 50% YOY. We take a look at
                  what that means.
                </p>
              </div>
            </div>
          </div>

          <div className="item flex h-[100px] items-center gap-5 my-2 md:row-span-1 md:col-span-1">
            <img src={img1} className="h-[100px]" alt="" />
            <div className="">
              <h3 className="text-xl font-bold mb-2"> Reviving Retro PCs</h3>
              <p className="text-xs text-gray-600">
                {" "}
                What happens when old PCs are given modern upgrades?
              </p>
            </div>
          </div>

          <div className="item flex h-[100px] items-center gap-5 my-2">
            <img src={img2} className="h-[100px]" alt="" />
            <div className="">
              <h3 className="text-xl font-bold mb-2">
                {" "}
                Top 10 Laptops of 2022
              </h3>
              <p className="text-xs text-gray-600">
                {" "}
                Our best picks for various needs and budgets.
              </p>
            </div>
          </div>
          <div className="item flex h-[100px] items-center gap-5 my-2">
            <img src={img3} className="h-[100px]" alt="" />
            <div className="">
              <h3 className="text-xl font-bold mb-2">
                {" "}
                Top 10 Laptops of 2022
              </h3>
              <p className="text-xs text-gray-600">
                {" "}
                How the pandemic has sparked fresh opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
