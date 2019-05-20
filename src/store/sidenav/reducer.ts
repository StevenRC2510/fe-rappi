import { SidenavActionsType } from './actions.name';

export interface SidenavDataState {
  open: boolean;
  toolbarOpened: boolean;
}

const initialState: SidenavDataState = {
  open: true,
  toolbarOpened: true,
};

export function sidenavReducer(
  state: SidenavDataState = initialState,
  action: any,
): SidenavDataState {
  switch (action.type) {
    case SidenavActionsType.TOGGLE_DRAWER: {
      if (typeof action.flag === 'boolean') {
        return { ...state, open: action.flag };
      }
      return { ...state, open: !state.open };
    }
    case SidenavActionsType.TOGGLE_TOOLBAR: {
      if (typeof action.flag === 'boolean') {
        return { ...state, toolbarOpened: action.flag };
      }
      return { ...state, toolbarOpened: !state.toolbarOpened };
    }
    default:
      return state;
  }
}
