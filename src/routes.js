


import * as eagle from './eagle'
import * as bot from './bot'
import express from 'express'


const app = null

// Create new eagle
app.post('/eagle', eagle.createNewEagle)

// Update eagle
app.put('/eagle', eagle.updateEagle)

// Delete eagle
app.delete('/eagle', eagle.deleteEagle)

//
//
// MESSENGER BOT ROUTES
//
//

// init bot
app.get('/bot/init', bot.init)

app.post('/event', eagle.event)

app.get('/events', null)
app.get('/events/{event}', null)

export default app
