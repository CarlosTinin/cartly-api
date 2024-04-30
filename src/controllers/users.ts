import { prisma } from "../database/prisma";
import { UserSchema } from "../validations/users"
import { Request, Response, NextFunction } from 'express'
import { ErrorCode } from "../exceptions/HttpException";
import { BadRequestException } from "../exceptions/BadRequestException"
import { ResourceNotFoundException } from "../exceptions/ResourceNotFoundException"

export const store = async (req: Request, res: Response, next: NextFunction) => {
  UserSchema.parse(req.body);
  const { name, email, password } = req.body;

  let user = await prisma.user.findUnique({
    where: {
      email: email
    }
  });

  if (user) {
    return next(new BadRequestException("Usuário já existe!", ErrorCode.USER_ALREADY_EXISTS));
  }
  // TODO: BCRYPT THE PASSWORD
  user = await prisma.user.create({
    data: {
      name,
      email,
      password
    },
  });
  
  return res.status(201).json({ data: user, message: "Usuário criado com sucesso."});
}

export const index = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  
  return res.status(200).json({ data: users, message: "Listagem dos usuários."});
}

export const findById = async (req: Request, res: Response, next: NextFunction) => {
  const id: number = parseInt(req.params.id);

  const user = await prisma.user.findFirst({
    where: {
      id: id
    }
  });

  if (!user) {
    return next(new ResourceNotFoundException("Usuário não encontrado!", ErrorCode.USER_NOT_FOUND));
  }
  
  return res.status(200).json({data: user, message: "Usuário recuperado com sucesso!"})
}