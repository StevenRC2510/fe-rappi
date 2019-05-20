import { SidenavActionsType } from './actions.name';

export const ToggleDrawer = (flag?: boolean) => ({
  flag,
  type: SidenavActionsType.TOGGLE_DRAWER,
});

export const ToggleToolbar = (flag?: boolean) => ({
  flag,
  type: SidenavActionsType.TOGGLE_TOOLBAR,
});
