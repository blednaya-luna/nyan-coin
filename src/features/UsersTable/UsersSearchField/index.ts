import { reflect } from '@effector/reflect';

import { SearchField, textFieldOnChangePrepend } from 'components/SearchField';
import { $searchFieldValue, setSearchFieldValue } from 'stores/pages/users';

export const UsersSearchField = reflect({
  view: SearchField,
  bind: {
    value: $searchFieldValue,
    onChange: setSearchFieldValue.prepend(textFieldOnChangePrepend),
  },
});
