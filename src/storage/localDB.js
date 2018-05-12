import Realm from 'realm';

const uuid = require('uuid');

class inProgressShift {
  static schema = {
    name: 'inProgressShift',
    primaryKey: 'id',
    properties: {
      id: 'string',
      shiftStart: { type: 'string', default: '' },
      breakStart: { type: 'string', default: '' },
      breakEnd: { type: 'string', default: '' }
    }
  };
}

class completedShifts {
  static schema = {
    name: 'completedShifts',
    primaryKey: 'id',
    properties: {
      id: 'string',
      shiftStart: 'string',
      shiftEnd: 'string',
      breakStart: { type: 'string', optional: true },
      breakEnd: { type: 'string', optional: true }
    }
  };
}

export const updateInProgressShiftStart = (time) => {
  try {
    realm.write(() => {
      realm.create(inProgressShift.schema.name, {
        id: 'inProgressShift',
        shiftStart: time
      },
      true);
    });
  } catch (e) {
    console.log(e);
  }
};

export const updateInProgressBreakStart = (time) => {
  try {
    realm.write(() => {
      realm.create(inProgressShift.schema.name, {
        id: 'inProgressShift',
        breakStart: time
      },
      true);
    });
  } catch (e) {
    console.log(e);
  }
};

export const updateInProgressBreakEnd = (time) => {
  try {
    realm.write(() => {
      realm.create(inProgressShift.schema.name, {
        id: 'inProgressShift',
        breakEnd: time
      },
      true);
    });
  } catch (e) {
    console.log(e);
  }
};

export const retrieveInProgressShift = () => {
  const schemaDefined = realm.objects(inProgressShift.schema.name)[0];
  const blankShift = { shiftStart: '', breakStart: '', breakEnd: '' };

  return !schemaDefined ? blankShift : schemaDefined;
};

export const clearInProgressShift = () => {
  try {
    realm.write(() => {
      realm.create(inProgressShift.schema.name, {
        id: 'inProgressShift',
        shiftStart: '',
        breakStart: '',
        breakEnd: ''
      },
      true);
    });
  } catch (e) {
    console.log(e);
  }
};

export const addEntryToCompletedShifts = (shiftEnd) => {
  const { shiftStart, breakStart, breakEnd } = realm.objects(inProgressShift.schema.name)[0];

  try {
    realm.write(() => {
      realm.create(completedShifts.schema.name, {
        id: uuid.v1(),
        shiftStart,
        shiftEnd,
        breakStart,
        breakEnd
      },
      true);
    });
  } catch (e) {
    console.log(e);
  }
};

export const retrieveCompletedShifts = () => {
  return realm.objects(completedShifts.schema.name).sorted('shiftStart', true);
};

export const removeCompletedShift = ({ id }) => {
  try {
    realm.write(() => {
      realm.delete(realm.objectForPrimaryKey(completedShifts.schema.name, id));
    });
  } catch (e) {
    console.log('Error on remove');
  }
};

const realm = new Realm({ schema: [inProgressShift, completedShifts] });
