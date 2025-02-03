import { GroupRepository } from '@/group/infraestructure/GroupRepository';
import { CreateGroup } from '@/group/application/create';
import { CreateGroupController } from '@/group/infraestructure/controllers/createGroupController';

const groupRepository = new GroupRepository();

type ControllerConfig = {
  useCase: new (repository: GroupRepository) => any;
  controller: new (useCase: any) => any;
};

const controllers: ControllerConfig[] = [
  { useCase: CreateGroup, controller: CreateGroupController }
];

const exportedControllers: Record<string, any> = {};

controllers.forEach(({ useCase, controller }) => {
  const useCaseInstance = new useCase(groupRepository);
  const controllerInstance = new controller(useCaseInstance);
  const controllerName = controller.name[0].toLowerCase() + controller.name.slice(1); // Convertir a camelCase
  exportedControllers[controllerName] = controllerInstance;
});

export default exportedControllers;