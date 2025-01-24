/*
  Warnings:

  - A unique constraint covering the columns `[customer_id]` on the table `customer_user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `customer_id` to the `customer_user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "customer_user" ADD COLUMN     "customer_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "customer_user_customer_id_key" ON "customer_user"("customer_id");

-- AddForeignKey
ALTER TABLE "customer_user" ADD CONSTRAINT "customer_user_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customer"("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE;
