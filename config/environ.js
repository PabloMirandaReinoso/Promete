module.exports = {
'url' : 'mongodb://127.1.1.0/express'
,'port' :process.env.PORT === undefined ? 4000 :process.env.PORT
// looks like 
//mongodb://<user>:<pass>@mongo.onmodulus.net:27017/Mikha4ot
//Please replace your host file 
//Here : 127.1.1.0 , Express is Collection 
//Name (Database Name)
};