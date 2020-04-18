require('../connection')

const Product = require('../models/Product')

/*async function createProduct(){
    const user = await User.findOne({username: 'fazt'})
    console.log(user);
}*/

//Otra forma

const createProducts = async () => {
    
    const laptopone = new Product({
        name: 'laptop hp',
        description: 'htp pavilion 15'
    })
    await laptopone.save();

    const laptoptwo = new Product({
        name: 'laptop lenovo',
        description: 'lenovo x1'
    })
    await laptoptwo.save();
}

createProducts();
