/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Customers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Suppliers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `password` to the `Customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Suppliers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Customers" ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Suppliers" ADD COLUMN     "password" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Customers_email_key" ON "Customers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Suppliers_email_key" ON "Suppliers"("email");
