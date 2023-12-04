import express from 'express'
const router = express.Router()

const data = [
  {
    "id":1,
    "artist_name":"",
    "song_name":"",
    "song_url":"",
    "title_image":"",
    "likes":[
      
    ]
  }
]

router.post('/musics/:id/likes/',(req, res)=>{
  const {id} = req.params
  if(data[parseFloat(id)]){
    data[parseFloat(id)].likes.push(req.body)
    res.json(data[parseFloat(id)])
  }else{
    res.json({status:404,message:'Not found'})
  }
})


module.exports = router