const { WebSocketServer } = require('ws');
const uuid = require('uuid');

function peerProxy(httpServer) {
    // Create a websocket object
    const wss = new WebSocketServer({ noServer: true });

    // Handle the protocol upgrade from HTTP to WebSocket
    httpServer.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, function done(ws) {
        wss.emit('connection', ws, request);
    });
    });

    // Keep track of all the connections so we can forward messages
    let connections = [];

    wss.on('connection', (ws) => {
        const connection = { id: uuid.v4(), alive: true, ws: ws };
        connections.push(connection);
    
        // Respond to pong messages by marking the connection alive
        ws.on('pong', () => {
          connection.alive = true;
        });
      });

    // Keep active connections alive
    setInterval(() => {
    connections.forEach((c) => {
        // Kill any connection that didn't respond to the ping last time
        if (!c.alive) {
        c.ws.terminate();
        } else {
        c.alive = false;
        c.ws.ping();
        }
    });
    }, 120000);

}

module.exports = { peerProxy };