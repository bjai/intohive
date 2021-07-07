import { userdata } from 'src/data';
import { User } from 'src/user.model';
import { asscendingData, asscendingDataAction, ASSCENDING_DATA, desscendingDataAction, DESSCENDING_DATA, UPATE_USER, UpdateUserAction } from '../actions/counter';

export interface UserState {
  user: User[]
}

export const initialState: UserState = {
  user: userdata,
};

export function userReducer(state = initialState, action: UpdateUserAction | asscendingDataAction | desscendingDataAction) {
  switch (action.type) {
    case UPATE_USER: {
      console.log('action adasdsadasdsa', state.user.map(x => {
        if (x.id == action.payload.id) {
          x.name = action.payload.name;
          x.email = action.payload.email;
          x.isactive = action.payload.isactive;
        }

        return x
      }))
      return state;
    }
    case ASSCENDING_DATA: {
      return {
        user: state.user.sort(function (a, b) {
          var nameA = a.name.toUpperCase(); // ignore upper and lowercase
          var nameB = b.name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          // names must be equal
          return 0;
        })
      }
    } case DESSCENDING_DATA: {
      return {
        user: state.user.sort(function (a, b) {
          var nameA = a.name.toUpperCase(); // ignore upper and lowercase
          var nameB = b.name.toUpperCase(); // ignore upper and lowercase
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }

          // names must be equal
          return 0;
        })
      }
    }

    default:
      {
        return state;
      }
  }
}