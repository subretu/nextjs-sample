-- CreateTable
CREATE TABLE "customer_user" (
    "id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT,
    "name" TEXT,

    CONSTRAINT "customer_user_pkey" PRIMARY KEY ("id")
);
