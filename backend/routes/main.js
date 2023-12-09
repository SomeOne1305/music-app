//Libraries
import express from "express";
import axios from 'axios'
import {promises as fs} from 'fs'
import path from 'path'
import mime from 'mime-types'
// helper
import transporter from "../mail/transporter.js";

//Models
import Music from "../models/music.js";

const router = express.Router();

//https://freeipapi.com/api/json/

router.get("*", async (req, res) => {
  try {
    // Parsing the URL
    const request = new URL(
      req.protocol + "://" + req.get("host") + req.originalUrl
    );
    // Extracting the path of file
    const action = request.pathname;
  
    // Path Refinements
    const filePath = path.join(__dirname, action).split("%20").join(" ");
  
    // Checking if the path exists
    const exists = await fs.access(filePath);
  
    if (!exists) {
      res.status(404).json({ status: 404, message: "Not Found" });
      return;
    }
  
    // Extracting file extension
    const contentType = mime.lookup(action) || 'application/octet-stream';
  
    // Reading the file
    const content = await fs.readFile(filePath);
  
    // Setting the headers
    res.set({
      "Content-Type": contentType,
    });
  
    // Serving the file
    res.send(content);
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 500, message: "Internal Server Error" });
  }
});

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
  const {email, name, surname,comment} = req.body
  try {
    const mailOptions = {
      from:email,
      to:process.env.MY_EMAIL,
      subject:`Request from ${name}`, 
      text:
      `
      `
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