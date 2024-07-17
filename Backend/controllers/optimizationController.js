const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { findSupplierForPart, calculateDistance } = require("../helperFunctions/distance.js")

const optiDistAndCost = async (req, res) => {
  const { customerId, partName } = req.body;
  try {
    const customer = await prisma.customers.findUnique({
      where: {
        id: customerId
      }
    });
    const suppliers = await findSupplierForPart(partName);

    if (suppliers.length == 0) {
      res.status(200).json({
        msg: "No Suppliers Exists"
      })
    }

    let nearestSupplier = null;
    let cheapestSupplier = null;
    let minDistance = Infinity;
    let minPrice = Infinity;

    suppliers.forEach((supplierData) => {
      const distance = calculateDistance(supplierData.suppliers, customer);

      if (distance < minDistance) {
        minDistance = distance;
        nearestSupplier = {
          supplier: supplierData.suppliers,
          distance: distance,
          price: supplierData.price
        };
      }

      if (supplierData.price < minPrice) {
        minPrice = supplierData.price;
        cheapestSupplier = {
          supplier: supplierData.suppliers,
          distance: distance,
          price: supplierData.price
        }
      }
    });

    res.status(200).json({
      nearestSupplier: nearestSupplier,
      cheapestSupplier: cheapestSupplier
    })

  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "Internal Server Error"
    })
  }
}

module.exports = {
  optiDistAndCost
}
