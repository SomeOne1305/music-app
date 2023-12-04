import React from "react";
import { IMusic } from "../interfaces";
import Icon, { Sun } from "./icons";

type Props={
  Obj:IMusic,index:number
}

const MusicCard = ({Obj,index}:Props) => {
  const {artist_name,song_url,likes,song_name,title_image} = Obj
  return (
    <div className="w-full border-b border-gray-300 mt-1 dark:border-[#334155] p-1 flex items-center justify-between">
      <div className="flex items-center">
        <div className="font-sans font-bolder text-gray text-lg px-2">
          <span className="dark:text-gray-300">{index <9 ? `0${index + 1}`:`${index + 1}`}</span>
        </div>
        <div className="w-10 h-10 cursor-pointer rounded-full border-[2px] flex items-center justify-center border-[#6366f1]">
          <Icon iconName="play" color="black" size={22}></Icon>
        </div>
        <img
          className="w-16 h-16 object-cover rounded-md mx-2"
          src={title_image}
          alt=""
        />
        <div className="p-2">
          <h2 className="text-lg font-bold dark:text-gray-300">{artist_name}</h2>
          <span className="text-gray text-md dark:text-gray-400">
            {song_name}
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <div className="p-3 relative group">
          <div className="like-btn cursor-pointer"></div>
          <span className="group-hover:text-[#E2264D] font-bolder text-lg text-gray px-2 ml-3 dark:text-gray-400">
            {likes.length}
          </span>
        </div>
        <div className="cursor-pointer px-3 py-2 rounded-md bg-gradient-to-t from-prim to-secondary hover:bg-gradient-to-b text-white flex items-center">
          <Sun color="white" size={25}/>
          <span className="ml-1">download</span>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
