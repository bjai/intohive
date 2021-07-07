import { userdata } from 'src/data';
import { User } from 'src/user.model';
import { UPATE_USER, UpdateUserAction } from '../actions/counter';

export interface UserState {
  user: User[]
}

export const initialState: UserState = {
  user: userdata,
};

export function userReducer(state = initialState, action: UpdateUserAction) {
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


    default:
      {
        return state;
      }
  }
}