/*
  Warnings:

  - The primary key for the `customer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `customer` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `customer` table. All the data in the column will be lost.
  - The primary key for the `customer_user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `customer_user` table. All the data in the column will be lost.
  - Added the required column `customer_id` to the `customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `customer_user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "customer" DROP CONSTRAINT "customer_pkey",
DROP COLUMN "id",
DROP COLUMN "name",
ADD COLUMN     "customer_id" INTEGER NOT NULL,
ADD COLUMN     "customer_name" TEXT,
ADD CONSTRAINT "customer_pkey" PRIMARY KEY ("customer_id");

-- AlterTable
ALTER TABLE "customer_user" DROP CONSTRAINT "customer_user_pkey",
DROP COLUMN "id",
ADD COLUMN     "user_id" INTEGER NOT NULL,
ADD CONSTRAINT "customer_user_pkey" PRIMARY KEY ("user_id");
