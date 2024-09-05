import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

db.snippet.create({
  data: {
    title: "title 1",
    code: "const abc => ()",
  },
});
