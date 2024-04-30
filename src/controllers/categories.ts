import { prisma } from "../database/prisma";
import { Request, Response, NextFunction } from 'express'
import { ProductSchema } from "../validations/products";

export const store = async (req: Request, res: Response, next: NextFunction) => {
  return res.status(201).json({ data: null, message: "Produto criado com sucesso!" });
}

export const index = async (req: Request, res: Response) => {
  const categories = await prisma.category.findMany();

  return res.status(200).json({ data: categories, message: "Listagem das categorias." })
}

export const findById = async (req: Request, res: Response) => {
  return 1;
}