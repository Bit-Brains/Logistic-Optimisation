const { PrismaClient } = require("@prisma/client")
const jwt = require("jsonwebtoken");
require('dotenv').config()

const secretKey = process.env.SECRET_KEY;
const prisma = new PrismaClient();

const registerSupplier = async (req, res) => {
  const { firstName, lastName, email, phone, password } = req.body;
  console.log(secretKey);
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
  // const payload = { result.id, result.firstName, result.email}
  // const token = jwt.sign(payload,)
  res.status(200).json(result);
}

const registerCustomer = async (req, res) => {
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
  res.status(200).json(newUser);
}

const loginSupplier = async (req, res) => {
  res.send("Logic for Login will be done here");
}

const loginCustomer = async (req, res) => {
  res.send("Logic of Register will be done here...");
}

module.exports = {
  registerSupplier,
  loginSupplier
}
