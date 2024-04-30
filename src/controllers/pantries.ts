import { Prisma } from "@prisma/client";
import { prisma } from "../database/prisma";
import { PantrySchema } from "../validations/pantries"
import { Request, Response, NextFunction } from 'express'
import { ResourceNotFoundException } from "../exceptions/ResourceNotFoundException";
import { ErrorCode } from "../exceptions/HttpException";
import { any } from "zod";

export const createPantry = async (req: Request, res: Response, next: NextFunction) => {
  PantrySchema.parse(req.body);
  const user_id : number = parseInt(req.params.user_id);
  
  let user = await prisma.user.findUnique({
    where: {
      id: user_id
    }
  });

  if (!user) {
    next(new ResourceNotFoundException("Usuário não encontrado!", ErrorCode.USER_NOT_FOUND));
  }  

  const { name, products } = req.body;
  let pantry: Prisma.PantryCreateInput;
    
  if (products) {
    let createProducts = products.map((data: any) => {
      return { productId: data.product_id, quantity: data.quantity, unitId: data.unit_id };
    });

    pantry = {
      name: name,
      user: {
        connect: {
          id: user_id,
        }
      },
      products: {
        createMany: {
          data: createProducts, 
        }
      }
    }
  } else {
    pantry = {
      name: name,
      user: {
        connect: {
          id: user_id,
        }
      }
    }
  }

  const createPantry = await prisma.pantry.create({ 
    data: pantry,
    select: {
      id: true,
      name: true,
      createdAt: true,
      products: {
        select: {
          product: {
            select: {
              name: true,
              image: true,
            }
          },
          quantity: true,
          unit: {
            select: {
              name: true
            }
          }
        }
      }
    }
  });

  return res.status(201).json({ data: createPantry, message: "Despensa criada com sucesso."});
}

export const userPantries = async (req: Request, res: Response, next: NextFunction) => {
  const user_id : number = parseInt(req.params.user_id);

  const userPantries = await prisma.user.findUnique({
    where: {
      id: user_id
    },
    select: {
      name: true,
      pantries: {
        select: {
          id: true,
          name: true,
          createdAt: true,
          products: {
            select: {
              product: {
                select: {
                  name: true,
                  image: true,
                }
              },
              quantity: true,
              unit: {
                select: {
                  name: true
                }
              }
            }
          }
        }
      }
    }
  });

  if (!userPantries) {
    next(new ResourceNotFoundException("Usuário não encontrado!", ErrorCode.USER_NOT_FOUND));
  }
  
  return res.status(200).json({data: userPantries, message: "Despensa do usuário recuperada com sucesso!"})
}