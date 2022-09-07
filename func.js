function connection (socket, redis) {
    socket.on('newPlayer', data => {
        console.log('New Player Connection');
        
    })
}




module.exports =  {
    connection
}