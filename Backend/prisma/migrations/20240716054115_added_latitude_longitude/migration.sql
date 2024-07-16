/*
  Warnings:

  - Added the required column `latitude` to the `Customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `Customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `latitude` to the `Suppliers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `Suppliers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Customers" ADD COLUMN     "latitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "longitude" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Suppliers" ADD COLUMN     "latitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "longitude" DOUBLE PRECISION NOT NULL;
