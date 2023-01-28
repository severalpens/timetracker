import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerComponent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Component, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
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
}

type LazyComponent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Component, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
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
}

export declare type Component = LazyLoading extends LazyLoadingDisabled ? EagerComponent : LazyComponent

export declare const Component: (new (init: ModelInit<Component>) => Component) & {
  copyOf(source: Component, mutator: (draft: MutableModel<Component>) => MutableModel<Component> | void): Component;
}