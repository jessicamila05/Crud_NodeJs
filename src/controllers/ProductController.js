const mongoose = require("mongoose");

const Product = mongoose.model("Product");


module.exports = {
    async index(req, res){
        const{page = 1} = req.query;
        const products = await Product.paginate({},{page, limit: 10});

        return res.json(products);
    },

    //puscando um Id...
    async Show(req, res){
        const product = await Product.findById(req.params.id);
       
        return res.json(product);
    },


    //criação.. 
    async store(req, res){
        const product = await Product.create(req.body);
     
        return res.json(product);
    },

    //atualizando produtos...
    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true   
        });
        return  res.json(product);
    },

    //deletando produto...
    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }

        
    };