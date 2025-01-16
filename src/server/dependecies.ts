import { UserRepository } from "@/user/infraestructure/UserRepository";
import { CreateUser } from "@/user/application/create";
import { CreateUserController } from "@/user/infraestructure/controllers/createController";
import { Hash } from "@/services/hash";

import { LoginUser } from "@/user/application/login";
import { LoginUserController } from "@/user/infraestructure/controllers/loginController";

import { RefreshToken } from "@/user/application/refreshToken";
import { RefreshTokenController } from "@/user/infraestructure/controllers/refreshTokenControler";

const userRepository = new UserRepository();
const hash = new Hash();
const createUser = new CreateUser(userRepository, hash);
export const createUserController = new CreateUserController(createUser);

const loginUser = new LoginUser(userRepository, hash);
export const loginUserController = new LoginUserController(loginUser);

const refreshToken = new RefreshToken(userRepository);
export const refreshTokenController = new RefreshTokenController(refreshToken);