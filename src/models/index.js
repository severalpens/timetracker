// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Project, Task, Entry } = initSchema(schema);

export {
  Project,
  Task,
  Entry
};