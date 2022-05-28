import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ComponentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Component {
  readonly id: string;
  readonly parentId: string;
  readonly type: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly isActive?: boolean | null;
  readonly startTime?: number | null;
  readonly endTime?: number | null;
  readonly children?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Component, ComponentMetaData>);
  static copyOf(source: Component, mutator: (draft: MutableModel<Component, ComponentMetaData>) => MutableModel<Component, ComponentMetaData> | void): Component;
}