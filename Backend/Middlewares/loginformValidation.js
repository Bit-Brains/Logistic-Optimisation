const zod = require("zod");

const registerValidation = (req , res , next) =>{
    const schema = zod.object({
        firstName : zod.string(),
        lastName : zod.string(),
        email : zod.string().email(),
        phone : zod.number(),
        password : zod.string().min(4),
        latitude : zod.number(),
        longitude : zod.number()

    })

    const result = schema.safeParse({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        password : req.body.password,
        phone: req.body.phone,
        latitude : req.body.latitude,
        longitude : req.body.longitude
    })

    if(!result.success){
        return res.status(404).json({
            msg : "input is not valid",
        })
    }
    next()
}

const loginValidation = (req, res, next) =>{               
    const schema = zod.object({
        email : zod.string().email(),
        password : zod.string().min(4)
    }); 

    const result = schema.safeParse({    
        email : req.body.email,
        password : req.body.password
    });
    if(!result.success){
        return res.status(400).json({
            msg : "input is not valid"
        })
    }
    next()
}

module.exports ={
    registerValidation,
    loginValidation
}