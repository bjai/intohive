import { User } from 'src/user.model';

export const UPATE_USER = "Update User";
export interface UpdateUserAction {
  type: typeof UPATE_USER;
  payload: User;
}

export type updateUser = (payload: User) => UpdateUserAction;
export const updateUser: updateUser = (payload) => ({ type: UPATE_USER, payload });

export const ASSCENDING_DATA = "asscending data";
export interface asscendingDataAction {
  type: typeof ASSCENDING_DATA;
}

export type asscendingData = () => asscendingDataAction;
export const asscendingData: asscendingData = () => ({ type: ASSCENDING_DATA });

export const DESSCENDING_DATA = "desscending data";
export interface desscendingDataAction {
  type: typeof DESSCENDING_DATA;
}

export type desscendingData = () => desscendingDataAction;
export const desscendingData: desscendingData = () => ({ type: DESSCENDING_DATA });
// export enum ActionTypes {
//   Increment = '[Counter Component] Increment',
//   Decrement = '[Counter Component] Decrement',
//   Reset = '[Counter Component] Reset',
// }

// export class Increment implements Action {
//   readonly type = ActionTypes.Increment;
//   payload: User;
// }

// export class Decrement implements Action {
//   readonly type = ActionTypes.Decrement;
// }

// export class Reset implements Action {
//   readonly type = ActionTypes.Reset;
// }