type ILikes = {
  ipVersion: number;
  ipAddress: string;
  latitude: number;
  longitude: number;
  countryName: string;
  countryCode: string;
  timeZone: string;
  zipCode: string;
  cityName: string;
  regionName: string;
  continent: string;
  continentCode: string;
};
export interface IMusic {
  _id: string;
  artist_name: string;
  song_name: string;
  song_url: string;
  title_image: string;
  likes: ILikes[];
  __v?: number;
}
