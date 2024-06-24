import { prisma } from "../database/prisma";
import { Request, Response, NextFunction } from 'express'
import { ProductSchema } from "../validations/products";
import { BadRequestException } from "../exceptions/BadRequestException";
import { ErrorCode } from "../exceptions/HttpException";

export const store = async (req: Request, res: Response) => {
  ProductSchema.parse(req.body);
  const { name, actual_price, category_id, brand_id } = req.body;

  const product = await prisma.product.create({
    data: {
      name: name,
      actualPrice: actual_price,
      // image: image,
      priceHistory: {
        create: [
          { price: actual_price },
        ],
      },
      category: {
        connect: {
          id: category_id
        }
      },
      brand: {
        connect: {
          id: brand_id
        }
      }
    },
    include: {
      category: {
        select: {
          name: true,
        }
      },
      brand: {
        select: {
          name: true,
        }
      },
      priceHistory: {
        select: {
          id: true,
          price: true,
          createdAt: true
        }
      },
      pantries: true,
      recipies: true
    },
  });

  return res.status(201).json({ data: product, message: "Produto criado com sucesso!" });
}

export const update = async(req: Request, res: Response, next: NextFunction) => {
  ProductSchema.parse(req.body);
  const { name, actual_price, category_id, brand_id } = req.body;
  const product_id = parseInt(req.params.id);

  const product = await prisma.product.findUnique({
    where: {
      id: product_id,
    },
  });

  if (!product) {
    return next(new BadRequestException("Produto não cadastrado!", ErrorCode.PRODUCT_NOT_FOUND));
  }

  if (product.actualPrice != actual_price) {
    await prisma.productPriceHistory.create({
      data: {
        productId: product_id,
        price: actual_price
      }
    });
  }

  const updatedProduct = prisma.product.update({
    where: {
      id: product_id,
    },
    data: {
      name: name,
      actualPrice: actual_price,
      // image: image,
      priceHistory: {
        create: [
          { price: actual_price },
        ],
      },
      category: {
        connect: {
          id: category_id
        }
      },
      brand: {
        connect: {
          id: brand_id
        }
      }
    },
    include: {
      category: {
        select: {
          name: true,
        }
      },
      brand: {
        select: {
          name: true,
        }
      },
      priceHistory: {
        select: {
          id: true,
          price: true,
          createdAt: true
        }
      },
      pantries: true,
      recipies: true
    },
  });

  return res.status(201).json({ data: updatedProduct, message: "Produto atualizado com sucesso!" });
}

export const index = async (req: Request, res: Response) => {
  const products = await prisma.product.findMany({
    include: {
      category: true,
      brand: true,
      priceHistory: true,
      pantries: true,
      recipies: true
    }
  });

  return res.status(200).json({ data: products, message: "Listagem dos produtos." })
}

export const findById = async (req: Request, res: Response) => {
  return 1;
}