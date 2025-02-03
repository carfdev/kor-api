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

// Instancias necesarias
const userRepository = new UserRepository();
const hash = new Hash();
const email = new Email();

// Tipo para asociar casos de uso y controladores con sus dependencias
type ControllerConfig = {
  useCase: new (...args: any[]) => any;
  dependencies: any[];
  controller: new (useCase: any, ...extraDeps: any[]) => any;
  extraDeps?: any[]; // Ahora extraDeps es opcional
};

// Configuración de controladores
const controllers: ControllerConfig[] = [
  { 
    useCase: CreateUser, 
    dependencies: [userRepository, hash], 
    controller: CreateUserController 
  },
  { 
    useCase: LoginUser, 
    dependencies: [userRepository, hash], 
    controller: LoginUserController 
  },
  { 
    useCase: RefreshToken, 
    dependencies: [userRepository], 
    controller: RefreshTokenController 
  },
  { 
    useCase: UpdatePassword, 
    dependencies: [userRepository, hash], 
    controller: UpdatePasswordController 
  },
  { 
    useCase: ResetPassword, 
    dependencies: [userRepository], 
    controller: ResetPasswordController,
    extraDeps: [email] 
  },
];

// Objeto para almacenar los controladores exportados
const exportedControllers: Record<string, any> = {};

controllers.forEach(({ useCase, dependencies, controller, extraDeps = [] }) => {
  const useCaseInstance = new useCase(...dependencies);
  const controllerInstance = new controller(useCaseInstance, ...extraDeps);
  const controllerName = controller.name[0].toLowerCase() + controller.name.slice(1); // Convertir a camelCase
  exportedControllers[controllerName] = controllerInstance;
});

export default exportedControllers;
