import Realm from 'realm';
import {databaseOptions} from '../../realm/schema';

const INITIAL_STATE = [];

const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SAVE_API':
      return action.payload;

    case 'UPDATE_API':
      const index = action.payload.index;
      const arr = [...state];
      arr.splice(index, 1, action.payload);

      const updateRealmFunc = async () => {
        const realm = await Realm.open(databaseOptions);
        realm.write(() => {
          const data = realm.objects('User');
          data[index].first_name = action.payload.first_name;
          data[index].last_name = action.payload.last_name;
          data[index].email = action.payload.email;
          data[index].username = action.payload.username;
        });
      };
      updateRealmFunc();
      return arr;

    case 'UPDATE_API_ON_LONGPRESS':
      const index1 = action.payload.index;
      const isSelected = action.payload.isSelected;
      const arr1 = [...state];
      arr1.splice(index1, 1, {...action.payload, isSelected: !isSelected});
      return arr1;

    case 'DELETE_API':
      const index2 = action.payload;
      const arr2 = [...state];
      arr2.splice(index2, 1);

      const updateRealmFunc2 = async () => {
        const realm = await Realm.open(databaseOptions);
        realm.write(() => {
          const data = realm.objects('User');
          realm.delete(data[index2]);
        });
      };
      updateRealmFunc2();
      return arr2;

    case 'RESET':
      const arr3 = state.map(item => {
        return {...item, isSelected: false};
      });
      return arr3;

    default:
      return state;
  }
};

export default homeReducer;
