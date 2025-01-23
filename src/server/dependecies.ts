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

import { GetAllCollection } from "@/collection/application/getAll";
import { GetAllCollectionController } from "@/collection/infraestructure/controllers/getAllCollectionController";

import { GetCollection } from "@/collection/application/get";
import { GetCollectionController } from "@/collection/infraestructure/controllers/getCollectionController";

import { UpdateCollection } from "@/collection/application/update";
import { UpdateCollectionController } from "@/collection/infraestructure/controllers/updateCollectionController";

import { DeleteCollection } from "@/collection/application/delete";
import { DeleteCollectionController } from "@/collection/infraestructure/controllers/deleteCollectionController";

import { UpdatePassword } from "@/user/application/updatePassword";
import { UpdatePasswordController } from "@/user/infraestructure/controllers/updatePasswordController";

import { ResetPassword } from "@/user/application/resetPaswword";
import { ResetPasswordController } from "@/user/infraestructure/controllers/resetPasswordController";

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

const getAllCollection = new GetAllCollection(collectionRepository);
export const getAllCollectionController = new GetAllCollectionController(getAllCollection);

const getCollection = new GetCollection(collectionRepository);
export const getCollectionController = new GetCollectionController(getCollection);

const updateCollection = new UpdateCollection(collectionRepository);
export const updateCollectionController = new UpdateCollectionController(updateCollection);

const deleteCollection = new DeleteCollection(collectionRepository);
export const deleteCollectionController = new DeleteCollectionController(deleteCollection);

const updatePassword = new UpdatePassword(userRepository, hash);
export const updatePasswordController = new UpdatePasswordController(updatePassword);

const resetPassword = new ResetPassword(userRepository);
export const resetPasswordController = new ResetPasswordController(resetPassword);