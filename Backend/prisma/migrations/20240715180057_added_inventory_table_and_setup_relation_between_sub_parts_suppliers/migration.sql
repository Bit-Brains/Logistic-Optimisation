-- CreateTable
CREATE TABLE "Inventory" (
    "id" SERIAL NOT NULL,
    "supplierId" INTEGER NOT NULL,
    "subpartsId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Inventory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Suppliers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_subpartsId_fkey" FOREIGN KEY ("subpartsId") REFERENCES "SubParts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
