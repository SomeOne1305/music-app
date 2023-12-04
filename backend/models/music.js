import { Schema, model } from "mongoose";
const likesScheme = new Schema({
  ipVersion: {type:Number,required:true},
  "ipAddress": {type:String,required:true, unique:true},
  "latitude": {type:Number,required:true,unique:true},
  "longitude": {type:Number,required:true,unique:true},
  "countryName": {type:String,required:true},
  "countryCode": {type:String,required:true},
  "timeZone": {type:String,required:true},
  "zipCode": {type:String,required:true},
  "cityName":{type:String,required:true},
  "regionName": {type:String,required:true},
  "continent": {type:String,required:true},
  "continentCode": {type:String,required:true}
})
const musicScheme = new Schema({
  artist_name:{type:String,required:true},
  song_name:{type:String,required:true},
  song_url:{type:String,required:true},
  title_image:{type:String,required:true},
  likes:[likesScheme]
})

const Music = model('music',musicScheme,'musics')

export default Music