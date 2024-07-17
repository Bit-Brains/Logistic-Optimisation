const { PrismaClient } = require("@prisma/client")
const { getDistance } = require("geolib")
const prisma = new PrismaClient();

const findSupplierForPart = async (partname) => {
  return await prisma.inventory.findMany({
    where: {
      subParts: {
        Name: partname
      },
    },
    include: {
      suppliers: true,
      subParts: true
    },
  });
}

const calculateDistance = (supplier, customer) => {
  const supplierLocation = { latitude: supplier.latitude, longitude: supplier.longitude };
  const customerLocation = { latitude: customer.latitude, longitude: customer.longitude };
  return getDistance(supplierLocation, customerLocation, 100);
}

module.exports = {
  findSupplierForPart,
  calculateDistance
}
