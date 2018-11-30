module.exports = {
    create: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.create_product([req.body.name, req.body.description, req.body.price, req.body.image_url])
            .then(product => {
                res.sendStatus(200)
            }).catch(error => {
                console.log(`C OH NO! an error:${error}`)
                res.sendStatus(500)
            })
    },
    getOne: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.read_product(req.params.id)
            .then(product => {
                res.status(200).send(product)
            }).catch(error => {
                console.log(`GO OH NO! an error:${error}`)
                res.sendStatus(500)
            })
    },
    getAll: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.read_products()
            .then(product => {
                res.status(200).send(product)
            }).catch(error => {
                console.log(`GA OH NO! an error:${error}`)
                res.sendStatus(500)
            })
    },
    update: (req, res) => {
        const dbInstance = req.app.get('db')
        if (req.params.prop === 'description') {
            dbInstance.update_product([req.body.value, req.params.id])    
                .then(product => {
                    res.status(200).send(product)
                }).catch(error => {
                    console.log(`U OH NO! an error:${error}`)
                    res.sendStatus(500)
                })
        } else if (req.params.prop === 'name') {
            dbInstance.update_product_name([req.body.value, req.params.id])    
                .then(product => {
                    res.status(200).send(product)
                }).catch(error => {
                    console.log(`Un OH NO! an error:${error}`)
                    res.sendStatus(500)
                })
        }
    },
    delete: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.delete_product(req.params.id)
            .then(product => {
                res.status(200).send(product)
            }).catch(error => {
                console.log(`D OH NO! an error:${error}`)
                res.sendStatus(500)
            })
    }
}