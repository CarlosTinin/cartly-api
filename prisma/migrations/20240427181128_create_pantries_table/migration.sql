-- CreateTable
CREATE TABLE "pantries" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "pantries_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pantries" ADD CONSTRAINT "pantries_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
