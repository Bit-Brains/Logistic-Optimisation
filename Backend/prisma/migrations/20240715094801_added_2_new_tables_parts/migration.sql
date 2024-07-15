-- CreateTable
CREATE TABLE "Parts" (
    "id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Description" TEXT NOT NULL,

    CONSTRAINT "Parts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubParts" (
    "id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "partsId" INTEGER NOT NULL,

    CONSTRAINT "SubParts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SubParts" ADD CONSTRAINT "SubParts_partsId_fkey" FOREIGN KEY ("partsId") REFERENCES "Parts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
