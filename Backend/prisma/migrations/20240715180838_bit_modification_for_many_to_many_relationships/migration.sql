/*
  Warnings:

  - A unique constraint covering the columns `[supplierId,subpartsId]` on the table `Inventory` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Inventory_supplierId_subpartsId_key" ON "Inventory"("supplierId", "subpartsId");
