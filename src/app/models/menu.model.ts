import { SubMenuModel } from './submenu.model';

export class MenuModel {
  id: number;
  Nombre: string;
  icono?: string | null;
  ruta?: string;
  alias?: string;
  submenu?: MenuModel[] | null;
}
