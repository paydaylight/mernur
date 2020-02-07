var express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const WebSocket = require('ws');
var events = require('events')
const event = new events.EventEmitter();
const moment = require('moment');
const app = express();

moment.locale('ru')

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/mernur`, { useNewUrlParser: true, useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to mongodb')).catch(err => console.log(err.message));


app.use(bodyParser.urlencoded({
    extended: true
}));
        
app.use(bodyParser.json());
// model
require('./models/banner')
const Banner = mongoose.model('banner')

const WebSocketServer = WebSocket.Server;
const wss = new WebSocketServer({ port: 2222 });

wss.on('connection', (ws) => {
    console.log('conn')
    ws.isAlive = true;

    ws.on('pong', () => {
        ws.isAlive = true;
    });
    
    Banner.findOne({}).then(banner => {
        ws.send(JSON.stringify(banner.toObject()))
    })

    // ws.on('message', (message) => {
    //     wss.clients.forEach(function each(client) {
    //         if (client.readyState === WebSocket.OPEN) {
    //             if(client !== ws) client.send(message);
    //         }
    //     });
    // });

    event.on('bannerUpdated', function() {
        Banner.findOne({}).then(banner => {
            wss.clients.forEach(function each(client) {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify(banner.toObject()))
                }
            });
        })
    })
});

setInterval(() => {
    wss.clients.forEach((ws) => {
        
        if (!ws.isAlive) return ws.terminate();
        
        ws.isAlive = false;
        ws.ping(null, false, true);
    });
}, 10000);


//routes
const auth = require('./helpers/auth')
app.post('/admin/rates', auth.Basic(), async (req, res) => {
    // await Banner.findOneAndUpdate({})
    banner = await Banner.findOne({})
    event.emit('bannerUpdated')

    res.status(200).send()
})

app.get('/admin/rates', auth.Basic(), async (req, res) => {
    console.log('incoming request')
    rates = await Banner.findOne({})

    if(rates == undefined || rates == null){
        rates = await Banner.create({
            currencies: [
                { name: 'USD', buy: 0, sell: 0 }, 
                { name: 'EUR', buy: 0, sell: 0 },
                { name: 'RUB', buy: 0, sell: 0 },
                { name: 'KGS', buy: 0, sell: 0 },
                { name: 'GBP', buy: 0, sell: 0 },
                { name: 'CNY', buy: 0, sell: 0 }
            ], 
            updated_at: moment(Date.now()).format("YYYY-MM-DD hh:mm:ss")
        })
    }

    res.status(200).send({data: rates.toObject()})
})

PORT = 5000
app.listen(PORT, "127.0.0.1", () => {
    console.log(`app running on port ${PORT}, ${process.env.NODE_ENV}`)
});