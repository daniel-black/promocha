-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Promocodes" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "discount" DECIMAL(65,30) NOT NULL,
    "maxDiscount" DECIMAL(65,30),
    "start" TIMESTAMP(3),
    "end" TIMESTAMP(3),
    "creatorId" INTEGER NOT NULL,

    CONSTRAINT "Promocodes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Promocodes_code_key" ON "Promocodes"("code");

-- AddForeignKey
ALTER TABLE "Promocodes" ADD CONSTRAINT "Promocodes_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
