const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser')
const GeoJsonHandler = require('./BL/GeoJsonHandler');

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get('/:jsonId', async (req, res, next) => {        
       try{
        let result = await GeoJsonHandler.GetJson(req.params.jsonId);
        res.status(200).send(result);
      }
    catch(err){
            res.status(500).send({ errorContent: err.message });
            }
      next();
          });

router.post('/:jsonId', async (req, res, next) => {        
       try{
        let result = await GeoJsonHandler.SetJson(req.params.jsonId, req.body.geoJson);
        res.status(200).send(result);
     }
   catch(err){
            res.status(500).send({ errorContent: err.message });
            }
      next();
          });          
        
module.exports = router;