//Libraries
import express from "express";
import axios from 'axios'
import nodemailer from 'nodemailer'

//Models
import Music from "../models/music.js";

const router = express.Router();

//https://freeipapi.com/api/json/

router.get("/", (req, res) => {
  console.log(req.clientIp);
  res.json({ status: res.statusCode, message: "Server is working well !" });
});

router.get("/musics", async (req, res) => {
  try {
    const musics =   await Music.find();
    res.json(musics)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/musics/:index", async (req, res) => {
  let {index} = req.params
  try {
    let items = await Music.find();
    if(items[parseInt(index)]){
      res.status(200).json(items[parseInt(index)])
    }else{
      res.json({status:404,message:`Item is not found in index ${index}`})
    }
  } catch (error) {
    console.log(error);
    res.json({status:500,message:"Internal server error"})
  }
})

router.post('/music/:id/likes', async (req, res) => {
  const { id } = req.params;
  try {
    const ip = await axios.post(`https://freeipapi.com/api/json/${req.clientIp}`);
    const ipAddress = ip.data.ipAddress;
    const music = await Music.findById(id);
    
    // Check if ipAddress already exists in the likes array
    const likeExists = music.likes.some(like => like.ipAddress === ipAddress);
    if (likeExists) {
      return res.status(400).json({status:400, message: 'It is already added.' });
    }
    
    music.likes.push(ip.data);
    const updatedMusic = await music.save();
    
    res.json({ status: 201, message: 'It is added.', data: updatedMusic });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

router.delete('/musics/:id/likes',async (req,res)=>{
  const {id} = req.params
  const {ip} = req.query
  try {
    let mus = await Music.findById(id)
    let ipExisted = mus.likes.some(like=>like.ipAddress === ip)
    if(ipExisted){
      await Music.updateOne(
        { "likes.ipAddress": ip }, // Match documents where the likes array contains the given IP address
        { $pull: { likes: { ipAddress: ip } } } // Remove the matching element from the likes array
      )
        .then(() => {
          // Item deleted successfully
          res.status(200).json({message:"Item deleted"});
        })
    }else{
      res.status(404).json({message:"Item is not deleted because it is not available"})
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error.',error:error });
  }
})

router.post('/contact',(req,res)=>{
  try {
    const transporter = nodemailer.createTransport({
      service:'Gmail',
      auth:{
        user:process.env.MY_EMAIL,
        password:process.env.MY_PASSWORD
      }
    })
    const mailOptions = {
      from:process.env.MY_EMAIL,
      to:process.env.MY_EMAIL,
      subject:"Contact",
      text:'some'
    }
    transporter.sendMail(mailOptions,(error,info)=>{
      if (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.',error:error });
      } else {
        res.json({status:res.statusCode,message:"Email was sent successfully !"})
      }
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.',error:error });
  }
})

export default router;