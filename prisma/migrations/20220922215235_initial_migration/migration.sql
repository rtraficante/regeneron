-- CreateTable
CREATE TABLE "Concept" (
    "id" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "alternativeNames" TEXT,

    CONSTRAINT "Concept_pkey" PRIMARY KEY ("id")
);
