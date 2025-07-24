import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$connect;
    console.log("connected to db");
    await prisma.$disconnect;
  } catch (err) {
    console.error("Error in connection.", err.message);
  }
}

main();
