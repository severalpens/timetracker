// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Component } = initSchema(schema);

export {
  Component
};