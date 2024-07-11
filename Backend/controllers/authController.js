const { PrismaClient } = require("@prisma/client")
const jwt = require("jsonwebtoken");
require('dotenv').config()

const secretKey = process.env.SECRET_KEY;
const prisma = new PrismaClient();

const registerSupplier = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password } = req.body;
    const user = await prisma.suppliers.findFirst({
      where: {
        email: email
      }
    });
    if (user) {
      return res.status(404).json({ msg: "Email already exists" })
    }
    const result = await prisma.suppliers.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        password: password
      }
    })
    const payload = { id: result.id, firstName: result.firstName, email: result.email }
    const token = jwt.sign(payload, secretKey);
    res.status(200).json({
      user: result,
      token: token
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
}

const registerCustomer = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password } = req.body;
    const user = await prisma.customers.findFirst({
      where: {
        email: email
      }
    })
    if (user) {
      return res.status(200).json({
        msg: "Email already exists"
      })
    }
    const newUser = await prisma.customers.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        password: password
      }
    });
    const payload = {
      id: newUser.id,
      firstName: newUser.firstName,
      email: newUser.email
    }
    const token = jwt.sign(payload, secretKey);
    res.status(200).json({
      user: newUser,
      token: token
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      msg: "Internal Server Error"
    });
  }
}

const loginSupplier = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.suppliers.findFirst({
      where: {
        email: email
      }
    });
    if (!user) {
      return res.status(401).json({
        msg: "Invalid Credentials Email or Password"
      })
    }
    if (user.password != password) {
      return res.status(401).json({
        msg: "Invalid Credentials Email or Password",
      })
    }
    const payload = {
      id: user.id,
      firstName: user.firstName,
      email: user.email
    }
    const token = jwt.sign(payload, secretKey);
    return res.status(200).json({
      user: user,
      token: token
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      msg: "Internal Server Error"
    })
  }
}

const loginCustomer = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.customers.findFirst({
      where: {
        email: email
      }
    });
    if (!user) {
      return res.status(404).json({
        msg: "Invalid Credentials Email or Password"
      })
    }
    if (user.password != password) {
      return res.status(404).json({
        msg: "Invalid Credentials Email or Password"
      });
    }
    const payload = {
      id: user.id,
      firstName: user.firstName,
      email: user.email
    }
    const token = jwt.sign(payload, secretKey);
    return res.status(200).json({
      user: user,
      token: token
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "Internal Server Error"
    })
  }
}

module.exports = {
  registerSupplier,
  loginSupplier,
  registerCustomer,
  loginCustomer
}
