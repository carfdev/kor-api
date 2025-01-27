import { UserRepository } from "@/user/infraestructure/UserRepository";
import { CreateUser } from "@/user/application/create";
import { CreateUserController } from "@/user/infraestructure/controllers/createController";
import { Hash } from "@/services/hash";

import { LoginUser } from "@/user/application/login";
import { LoginUserController } from "@/user/infraestructure/controllers/loginController";

import { RefreshToken } from "@/user/application/refreshToken";
import { RefreshTokenController } from "@/user/infraestructure/controllers/refreshTokenControler";

import { UpdatePassword } from "@/user/application/updatePassword";
import { UpdatePasswordController } from "@/user/infraestructure/controllers/updatePasswordController";

import { ResetPassword } from "@/user/application/resetPaswword";
import { ResetPasswordController } from "@/user/infraestructure/controllers/resetPasswordController";
import { Email } from "@/services/resend";

const userRepository = new UserRepository();
const hash = new Hash();
const createUser = new CreateUser(userRepository, hash);
export const createUserController = new CreateUserController(createUser);

const loginUser = new LoginUser(userRepository, hash);
export const loginUserController = new LoginUserController(loginUser);

const refreshToken = new RefreshToken(userRepository);
export const refreshTokenController = new RefreshTokenController(refreshToken);

const updatePassword = new UpdatePassword(userRepository, hash);
export const updatePasswordController = new UpdatePasswordController(updatePassword);

const email = new Email();
const resetPassword = new ResetPassword(userRepository);
export const resetPasswordController = new ResetPasswordController(resetPassword, email);