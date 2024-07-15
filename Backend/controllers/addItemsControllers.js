const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

const addParts = async (req, res) => {
  const { name, description } = req.body;
  try {
    const newPart = await prisma.parts.create({
      data: {
        Name: name,
        Description: description
      }
    });
    res.status(201).json({
      msg: "Part Created Successfully",
      newPart: newPart
    })
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "Something went wrong"
    })
  }
}

const addSubParts = async (req, res) => {
  const { name, partid } = req.body;
  console.log(partid);
  try {
    const newSubPart = await prisma.subParts.create({
      data: {
        Name: name,
        partsId: partid
      }
    });
    res.status(200).json({
      msg: "Sub-Part Created Successfully",
      subpart: newSubPart
    })
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "Internal Server Error"
    })
  }
}

module.exports = {
  addParts,
  addSubParts
}
