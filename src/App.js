import React from "react";

import user1 from "./images/user1.jpg";
import user2 from "./images/user2.jpeg";

const App = () => {
  return (
    <div className="main">
      <div className=" grid grid-flow-col w-full h-full my-10  px-20">
        <div className="card bg-white  h-[500px] mx-10  rounded-3xl drop-shadow-2xl ">
          <div className="top flex flex-col justify-center h-[35%] items-center p-2">
            <div className="image flex justify-center my-3">
              <img
                src={user1}
                alt="user-1"
                className="rounded-full  w-[100px] "
              />
            </div>
            <div className="name-rate  text-center">
              <p className="font-bold">Film Director, Producer</p>
              <p className="text-[12px]">&euro; 14/hour</p>
            </div>
          </div>
          <div className="bottom grid text-center h-[65%] rounded-b-3xl bg-gray-200 px-5">
            <p className="my-2 text-[14px]">Jeffrey Abrams, 51</p>
            <p className="my-2 text-[14px]">
              <i class="fa-solid fa-location-dot"></i> New York, United States
            </p>
            <p className="my-2 text-[14px]">
              Abraham was first born in New York City and raised in Los Angeles.
            </p>
            <div className="btns flex flex-col">
              <button className="p-2 mx-10 font-bold text-blue-400   border-2 border-blue-400 rounded-xl my-2">
                VIEW CV
              </button>
              <button className="p-2 mx-10 font-bold text-white bg-blue-400   border-2 border-blue-400 rounded-xl">
                Make Offer
              </button>
            </div>
            <p className="status flex items-center justify-center">
              <div className="h-[8px] w-[8px] bg-green-500 rounded-full"></div>
              <p className="text-[14px] mx-2">Online</p>
            </p>
          </div>
        </div>
        <div className="card bg-white  h-[500px] mx-10  rounded-3xl drop-shadow-2xl ">
          <div className="top flex flex-col justify-center h-[35%] items-center p-2">
            <div className="image flex justify-center my-3">
              <img
                src={user2}
                alt="user-1"
                className="rounded-full  w-[100px] "
              />
            </div>
            <div className="name-rate  text-center">
              <p className="font-bold">Actor, Film Director</p>
              <p className="text-[12px]">&euro; 9/hour</p>
            </div>
          </div>
          <div className="bottom grid text-center h-[65%] rounded-b-3xl bg-gray-200 px-5">
            <p className="my-2 text-[14px]">Baltasar Kormakyr, 52</p>
            <p className="my-2 text-[14px]">
              <i class="fa-solid fa-location-dot"></i> Reykjavik, Iceland
            </p>
            <p className="my-2 text-[14px]">
              Icelandic actor, theatre and film director, and film producer
            </p>
            <div className="btns flex flex-col">
              <button className="p-2 mx-10 font-bold text-blue-400   border-2 border-blue-400 rounded-xl my-2">
                VIEW CV
              </button>
              <button className="p-2 mx-10 font-bold text-white bg-blue-400   border-2 border-blue-400 rounded-xl">
                Make Offer
              </button>
            </div>
            <p className="status flex items-center justify-center">
              {/* <div className="h-[8px] w-[8px] bg-green-500 rounded-full"></div> */}
              <p className="text-[14px] mx-2">Last seen 17 minutes ago</p>
            </p>
          </div>
        </div>
        <div className="card bg-white  h-[500px] mx-10  rounded-3xl drop-shadow-2xl ">
          <div className="top flex flex-col justify-center h-[35%] items-center p-2">
            <div className="image flex justify-center my-3">
              <img
                src={user1}
                alt="user-1"
                className="rounded-full  w-[100px] "
              />
            </div>
            <div className="name-rate  text-center">
              <p className="font-bold">Film Director, Producer</p>
              <p className="text-[12px]">&euro; 14/hour</p>
            </div>
          </div>
          <div className="bottom grid text-center h-[65%] rounded-b-3xl bg-gray-200 px-5">
            <p className="my-2 text-[14px]">Jeffrey Abrams, 51</p>
            <p className="my-2 text-[14px]">
              <i class="fa-solid fa-location-dot"></i> New York, United States
            </p>
            <p className="my-2 text-[14px]">
              Abraham was first born in New York City and raised in Los Angeles.
            </p>
            <div className="btns flex flex-col">
              <button className="p-2 mx-10 font-bold text-blue-400   border-2 border-blue-400 rounded-xl my-2">
                VIEW CV
              </button>
              <button className="p-2 mx-10 font-bold text-white bg-blue-400   border-2 border-blue-400 rounded-xl">
                Make Offer
              </button>
            </div>
            <p className="status flex items-center justify-center">
              <div className="h-[8px] w-[8px] bg-green-500 rounded-full"></div>
              <p className="text-[14px] mx-2">Online</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
