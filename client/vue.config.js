//tells vue to send all requests from the API to your Node/Express server
module.exports = {
  devServer:{
    proxy:'http://127.0.0.1:3000'
  }
}
