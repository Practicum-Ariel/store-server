
let items = [{}
]

app.post('/item', (req, res) => {
    items.push({ ...req.body, created: new Date() })
    let item = items[items.length - 1]
    res.send(item)
})

app.get('/item', (req, res) => {
    res.send(items)
})

app.get('/item/:id', (req, res) => {
    let item = items.find(u => u.email == req.params.email)
    res.send(item)
})

app.delete('/item/:id', (req, res) => {
    items = items.filter(u => u.email != req.params.email)
    res.sendStatus(200)
})

app.put('/item/:id', (req, res) => {
    console.log(req.body)
    let index = items.findIndex(u => u.email == req.params.email)
    let item = { ...items[index], ...req.body }
    items[index] = item
    res.send(item)
})