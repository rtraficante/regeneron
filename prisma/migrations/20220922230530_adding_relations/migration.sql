-- CreateTable
CREATE TABLE "_ConceptRelationship" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ConceptRelationship_AB_unique" ON "_ConceptRelationship"("A", "B");

-- CreateIndex
CREATE INDEX "_ConceptRelationship_B_index" ON "_ConceptRelationship"("B");

-- AddForeignKey
ALTER TABLE "_ConceptRelationship" ADD CONSTRAINT "_ConceptRelationship_A_fkey" FOREIGN KEY ("A") REFERENCES "Concept"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConceptRelationship" ADD CONSTRAINT "_ConceptRelationship_B_fkey" FOREIGN KEY ("B") REFERENCES "Concept"("id") ON DELETE CASCADE ON UPDATE CASCADE;
