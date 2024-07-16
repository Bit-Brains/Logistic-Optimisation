const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const addInventory = async (req, res) => {
  const { supplierId, subpartId, quantity, price } = req.body;
  try {
    const inventory = await prisma.inventory.create({
      data: {
        supplierId: supplierId,
        subpartsId: subpartId,
        quantity: quantity,
        price: price
      }
    })
    res.status(200).json({
      msg: "Items added Successfully",
      inventory: inventory
    })
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "Internal Server Error"
    })
  }
}

module.exports = {
  addInventory
}
