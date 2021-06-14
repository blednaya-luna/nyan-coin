import { reflect } from '@effector/reflect';

import { SearchField, textFieldOnChangePrepend } from 'components/SearchField';

import { $searchQuery, setSearchQuery } from './model';

export const AssetsSearchField = reflect({
  view: SearchField,
  bind: {
    value: $searchQuery,
    onChange: setSearchQuery.prepend(textFieldOnChangePrepend),
  },
});
