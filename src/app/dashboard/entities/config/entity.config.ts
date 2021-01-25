import { EntityMetadataMap } from '@ngrx/data';

export const entityMetaData: EntityMetadataMap = {
  Dashboard: {
    entityDispatcherOptions: {
      optimisticUpdate: true,
    },
  },
};

export const entityName: string = 'Dashboard';

export const entityRoot = '/api';
