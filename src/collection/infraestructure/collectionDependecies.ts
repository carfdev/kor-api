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

const collectionRepository = new CollectionRepository();

// Define un tipo para relacionar casos de uso y controladores
type ControllerConfig = {
  useCase: new (repository: CollectionRepository) => any;
  controller: new (useCase: any) => any;
};

// Lista de configuraciones con tipos específicos
const controllers: ControllerConfig[] = [
  { useCase: CreateCollection, controller: CreateCollectionController },
  { useCase: GetAllCollection, controller: GetAllCollectionController },
  { useCase: GetCollection, controller: GetCollectionController },
  { useCase: UpdateCollection, controller: UpdateCollectionController },
  { useCase: DeleteCollection, controller: DeleteCollectionController },
];

// Objeto para almacenar los controladores exportados
const exportedControllers: Record<string, any> = {};

controllers.forEach(({ useCase, controller }) => {
  const useCaseInstance = new useCase(collectionRepository);
  const controllerInstance = new controller(useCaseInstance);
  const controllerName = controller.name[0].toLowerCase() + controller.name.slice(1); // Convertir a camelCase
  exportedControllers[controllerName] = controllerInstance;
});

export default exportedControllers;
