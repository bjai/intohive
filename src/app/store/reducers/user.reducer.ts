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
      console.log('action', state, action.payload);
      console.log('action adasdsadasdsa', state.user.map(x => {
        console.log(x.id, action.payload)
        if (x.id == action.payload.id) {
          x.name = action.payload.name;
          x.email = action.payload.email;
          x.active = action.payload.active;
        }

        return x
      }))
      return state.user.map(x => {
        console.log(x.id, action.payload)
        if (x.id == action.payload.id) {
          x.name = action.payload.name;
          x.email = action.payload.email;
          x.active = action.payload.active;
        }

        return x
      })
    }


    default:
      {
        console.log(state);
        return state;
      }
  }
}