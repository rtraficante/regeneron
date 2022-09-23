/*
  Warnings:

  - The primary key for the `Concept` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Concept` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `A` on the `_ConceptRelationship` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_ConceptRelationship` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "_ConceptRelationship" DROP CONSTRAINT "_ConceptRelationship_A_fkey";

-- DropForeignKey
ALTER TABLE "_ConceptRelationship" DROP CONSTRAINT "_ConceptRelationship_B_fkey";

-- AlterTable
ALTER TABLE "Concept" DROP CONSTRAINT "Concept_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Concept_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "_ConceptRelationship" DROP COLUMN "A",
ADD COLUMN     "A" INTEGER NOT NULL,
DROP COLUMN "B",
ADD COLUMN     "B" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "_ConceptRelationship_AB_unique" ON "_ConceptRelationship"("A", "B");

-- CreateIndex
CREATE INDEX "_ConceptRelationship_B_index" ON "_ConceptRelationship"("B");

-- AddForeignKey
ALTER TABLE "_ConceptRelationship" ADD CONSTRAINT "_ConceptRelationship_A_fkey" FOREIGN KEY ("A") REFERENCES "Concept"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConceptRelationship" ADD CONSTRAINT "_ConceptRelationship_B_fkey" FOREIGN KEY ("B") REFERENCES "Concept"("id") ON DELETE CASCADE ON UPDATE CASCADE;
