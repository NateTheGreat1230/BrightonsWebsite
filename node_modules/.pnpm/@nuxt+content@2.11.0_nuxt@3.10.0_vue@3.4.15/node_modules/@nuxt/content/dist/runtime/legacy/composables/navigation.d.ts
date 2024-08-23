import type { NavItem, QueryBuilder, QueryBuilderParams } from '../../types';
import type { ContentQueryBuilder } from '../../types/query';
export declare const fetchContentNavigation: (queryBuilder?: QueryBuilder | QueryBuilderParams | ContentQueryBuilder) => Promise<Array<NavItem>>;
