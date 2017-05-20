


import * as eagle from './eagle'
import * as event from './event'
// import * as bot from './bot'
import express from 'express'
import bodyParser from 'body-parser'


const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res)=>{
    res.json({
        version: '1.0.0',
        server: 'eagle-server'
    })
})

// Get eagle object
app.get('/eagle', eagle.getEagle)

// Create new eagle
app.post('/eagle', eagle.createNewEagle)

// Update eagle
app.put('/eagle', eagle.updateEagle)

// Delete eagle
app.delete('/eagle', eagle.deleteEagle)

// Post new event
app.post('/event', event.newEvent)

// Get a list of all latest eagle events
app.get('/events', event.listEvents)

// Get a specific event
app.get('/events/:event', event.getEvent)


// Test URI:s
app.post('/test', (req, res)=>{

    console.log('REQUEST FROM', req.header['eagle-uuid'])
    res.json(req.body)

})

app.get('/test', (req, res)=>{

    console.log('REQUEST FROM', req.header['eagle-uuid'])
    res.json(req.body)

})

export default app
