import { reflect } from '@effector/reflect';

import { SearchField, textFieldOnChangePrepend } from 'components/SearchField';
import { $searchQuery, setSearchQuery } from 'stores/pages/assets';

export const AssetsSearchField = reflect({
  view: SearchField,
  bind: {
    value: $searchQuery,
    onChange: setSearchQuery.prepend(textFieldOnChangePrepend),
  },
});
