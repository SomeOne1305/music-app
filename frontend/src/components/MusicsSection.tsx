import React,{FC} from "react";
import MusicCard from "./MusicCard";
import Fetcher from "../api/Fetcher";
import { IMusic } from "../interfaces";
import { useMutation} from "react-query";
import {useFetchData} from "../hooks";

type Props = {};

const MusicsSection:FC = (props: Props) => {
  // const [musics, setMusics] = React.useState<IMusic[]>([])
  const {data, isError, error, isLoading,} = useFetchData('musics','/musics');
  if (isError) {
    console.log('Error occured:'+error);
  }
  return (
    <section className="mt-16">
      <div className="container">
        <div className="max-w-screen-lg mx-auto p-2 rounded-lg border border-gray-300 dark:border-[#334155]">
          {
            isLoading ?  (<span className="mt-2">Loading...</span>):
            data?.map((item:IMusic, index:number)=>(<MusicCard Obj={item} index={index} key={item._id}/>))
          }
        </div>
      </div>
    </section>
  );
};

export default MusicsSection;
