import Realm from 'realm';

const UserSchema = {
  name: 'User',
  properties: {
    id: 'int',
    email: 'string',
    first_name: 'string',
    last_name: 'string',
    avatar: 'string',
    username: 'string',
    index: 'int',
    isSelected: 'bool',
  },
  primaryKey: 'id',
};

export const databaseOptions = {
  path: 'myrealm',
  schema: [UserSchema],
};

export const insertNewEmployee = async val => {
  const realm = await Realm.open(databaseOptions);

  realm.write(() => {
    realm.create('User', val);
  });
};
