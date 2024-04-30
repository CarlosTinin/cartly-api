import { prisma } from "../src/database/prisma";

async function main() {
  const categories: string[] = [
    "Padaria", "Açougue", "Mercearia", "Matinais", "Frios e Laticínios", "Bebidas", "Utilidades", "Domésticos", "Limpeza", "Higiene", "Hortifruti", "Pet Shop", "Papelaria"
  ];

  const brands: string[] = [
    "Betânia", "Tio João", "QBoa", "Dragão"
  ]

  await Promise.all(categories.map(async name => {
    let category = await prisma.category.findFirst({ 
      where: { name: name } 
    });
    
    if (!category) {
      return prisma.category.create({
        data: {
          name: name
        }
      });
    } else {
      return category;
    }
  }));

  await Promise.all(brands.map(async name => {
    let brand = await prisma.brand.findFirst({ 
      where: { name: name } 
    });
    
    if (!brand) {
      return prisma.brand.create({
        data: {
          name: name
        }
      });
    } else {
      return brand;
    }
  }))
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })