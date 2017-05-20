
import moment from 'moment'


export const newEvent = (req, res)=>{

    const newEvent = {
        eventType: req.body.eventType,
        timestamp: new moment(),
        payload: req.body.payload?req.body.payload:null
    }

    res.json(newEvent)
}

export const listEvents = (req, res)=>{
    const newEvent = {
        eventType: 'Motion',
        timestamp: new moment(),
        payload: req.body.payload?req.body.payload:null
    }

    const newEvent2 = {
        eventType: 'Disarm',
        userName: 'arvid.brane@gmail.se',
        timestamp: new moment(),
    }

    const list = []

    for (var i = 0; i < 10; i++) {
        if (i%2 === 0) {
            list.push(newEvent2)
        }else {
            list.push(newEvent)
        }
    }

    res.json(list)
}

export const getEvent = (req, res)=>{

    const testEvent = {
        eventId: req.params.event,
        type: 'motion',
        timestamp: '',
    }

    res.json(testEvent)
}
