

export const getEagle = (req, res)=>{

    const testEagle = {
        name: 'Eagle Namn',
        status: 'Armed',
        position: 'Hallen',
        description: 'En beskrivning om denna örnen'
    }

    res.json(testEagle)
}

export const createNewEagle = (req, res)=>{

    const newEagle = {
        uuid: req.body.uuid,
        name: req.body.name?req.body.name:'My Eagle',
        email: req.body.email,
        status: 'disarmed',
        events: [],
        description: req.body.description?req.body.description:'',
        position: req.body.position?req.body.position:'',
    }

    res.json(newEagle)
}

export const updateEagle = (req, res)=>{
    console.log(req.body)
    res.json(req.body)
}

export const deleteEagle = (req, res)=>{
    console.log(req.body)
    res.json(req.body)
}
