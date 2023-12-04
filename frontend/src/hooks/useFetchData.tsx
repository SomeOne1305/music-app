import Fetcher from "../api/Fetcher"
import { useQuery } from "react-query"

export default function useFetchData(name:string,url:string){
  return useQuery(name,async ()=>{
    const res = await Fetcher.get(url)
    return res.data
  })
}