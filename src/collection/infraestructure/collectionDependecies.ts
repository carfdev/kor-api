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