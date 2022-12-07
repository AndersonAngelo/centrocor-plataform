-- CreateTable
CREATE TABLE "exames" (
    "id" TEXT NOT NULL,
    "paciente" TEXT NOT NULL,
    "protocolo" TEXT NOT NULL,
    "medico" TEXT NOT NULL,
    "exame" TEXT NOT NULL,
    "tipo_exame" TEXT NOT NULL,

    CONSTRAINT "exames_pkey" PRIMARY KEY ("id")
);
