import { UserRepository } from "@/user/infraestructure/UserRepository";
import { CreateUser } from "@/user/application/create";
import { CreateUserController } from "@/user/infraestructure/controllers/createController";
import { Hash } from "@/services/hash";

import { LoginUser } from "@/user/application/login";
import { LoginUserController } from "@/user/infraestructure/controllers/loginController";

import { RefreshToken } from "@/user/application/refreshToken";
import { RefreshTokenController } from "@/user/infraestructure/controllers/refreshTokenControler";

import { CollectionRepository } from "@/collection/infraestructure/CollectionRepository";
import { CreateCollection } from "@/collection/application/create";
import { CreateCollectionController } from "@/collection/infraestructure/controllers/createCollectionController";

const userRepository = new UserRepository();
const hash = new Hash();
const createUser = new CreateUser(userRepository, hash);
export const createUserController = new CreateUserController(createUser);

const loginUser = new LoginUser(userRepository, hash);
export const loginUserController = new LoginUserController(loginUser);

const refreshToken = new RefreshToken(userRepository);
export const refreshTokenController = new RefreshTokenController(refreshToken);

const collectionRepository = new CollectionRepository();
const createCollection = new CreateCollection(collectionRepository);
export const createCollectionController = new CreateCollectionController(createCollection);