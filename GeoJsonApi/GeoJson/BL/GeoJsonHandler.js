const fs = require('fs');

const GetJson=async (jsonId)=>
{
    let rawdata = fs.readFileSync(jsonId+'.json');
    let geojson = JSON.parse(rawdata);
    console.log(geojson)
    return geojson;
}

const SetJson=async (jsonId, json)=>
{
    console.log(json);
    let b= JSON.parse(JSON.stringify(json));
    console.log("-----------------------");
    console.log(b);
    try{
        fs.writeFile (jsonId+'.json', b ,function(err) {
            if (err) throw err;
            console.log('complete');
            }
        );    }
    catch(err){
        console.log(err);
    }
    //fs.writeFileSync(jsonId+'.json', JSON.parse(JSON.stringify(json)));
    // console.log(jsonId);
    // console.log(b);
}

module.exports={GetJson, SetJson};
