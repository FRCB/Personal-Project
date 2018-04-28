
module.exports = {
    cart: (req, res) => {               // gets empty cart
        // console.log('haha')
        const {id} = req.user
        const db = req.app.get('db')
        db.get_cart([id]).then( cart => {
            // console.log(cart, 'cart');
            res.status(200).send(cart)
        }).catch((err) => {
            console.log(err)})
    },

    order: (req, res) => {              
        const {id} = req.user
        const db = req.app.get('db')
        db.get_order([id]).then( order => {
            console.log(order, 'order');
            res.status(200).send(order)
        }).catch((err) => {
            console.log(err)})
    },
    
    createCart: (req, res) => {
        console.log(req.body)
        const {name, price, picture} = req.body
        const db = req.app.get('db')
        if (req.user){
            db.create_cart([req.user.id, name, price, picture]).then( cart => {
                // console.log(cart)
                res.status(200).send(cart)
            }).catch(console.log)
        }
    },

    createOrder: (req, res) => {
        console.log(req.body)
        const {time, totalPrice, show_title, show_price} = req.body
        const db = req.app.get('db')
        db.create_order([req.user.id, time, totalPrice]).then( order => {
                db.create_order_item([order.id, show_title, show_price]).then( order => {
                    res.status(200).send(order)
                        }).catch(console.log)
                })
    },

    delete: (req, res) => {
        let id = req.params.id
        // console.log(req.params.id)
        let db = req.app.get('db')
        db.delete_show([id, req.user.id]).then( (cart) => {
            // console.log(cart)
            res.status(200).send(cart)
        }).catch(console.log)
    }

    
}