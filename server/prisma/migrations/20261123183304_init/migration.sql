-- CreateTable
CREATE TABLE "Henkilo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "etunimi" TEXT NOT NULL,
    "sukunimi" TEXT NOT NULL,
    "titteli" TEXT NOT NULL,
    "puhelin" TEXT NOT NULL,
    "aloittanutPvm" TEXT NOT NULL,
    "aloittanutAikaleima" TEXT NOT NULL,
    "sahkoposti" TEXT NOT NULL,
    "kuva" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Kayttaja" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "kayttajatunnus" TEXT NOT NULL,
    "salasana" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Kayttaja_kayttajatunnus_key" ON "Kayttaja"("kayttajatunnus");
