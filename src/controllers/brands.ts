import { prisma } from "../database/prisma";
import { Request, Response, NextFunction } from 'express'
import { BrandSchema } from "../validations/brands";

export const store = async (req: Request, res: Response, next: NextFunction) => {
  BrandSchema.parse(req.body);
  const brands = req.body.brands;

  const createdBrands = await prisma.brand.createMany({ 
    data: brands,
    skipDuplicates: true
  });

  return res.status(201).json({ data: createdBrands, message: "Marca(s) criada(s) com sucesso!" });
}

export const index = async (req: Request, res: Response) => {
  const brands = await prisma.brand.findMany({
    orderBy: {
      name: 'asc',
    }
  });

  return res.status(200).json({ data: brands, message: "Listagem das marcas." })
}

export const findById = async (req: Request, res: Response) => {
  return 1;
}