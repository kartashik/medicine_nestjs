import { NestMiddleware, Injectable} from '@nestjs/common';
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { UsersService } from "../users/users.service";

interface IDecode {
    address: string,
    role: string,
    iat: number,
    exp: number
  };

 interface RequestWithUserRole extends Request {
    user?: IDecode,
}


@Injectable()
export class AuthMiddleware implements NestMiddleware {
    use(req: RequestWithUserRole, res: Response, next: NextFunction){
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
            if (!token) {
                return res.status(401).json({message: "Не авторизован"})
            }
            const decoded = <IDecode> jwt.verify(token, process.env.PRIVATE_KEY);
            req.user = decoded
            next()
        } catch (e) {
            res.status(401).json({message: "Не авторизован"})
        }
    }
}
