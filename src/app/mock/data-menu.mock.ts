import { MenuModel } from '../models';

export const data: MenuModel[] = [
  // {
  //   Nombre: 'Inicio',
  //   icono: 'fas fa-user',
  //   id: 1,
  //   submenu: null,
  //   ruta: 'formulario/inicio',
  // },
  {
    ruta: 'formulario/inicio',
    Nombre: 'Datos Empresa',
    icono: 'fas fa-user',
    id: 2,
    submenu: [{ Nombre: 'inicio1' }, { Nombre: 'inicio2' }],
  },

  {
    ruta: 'formulario/servicios',
    Nombre: 'Menu 3',
    icono: 'fas fa-plus',
    id: 3,
    submenu: [
      { Nombre: 'servicio1' },
      { Nombre: 'servicio2' },
      { Nombre: 'servicio3' },
    ],
  },

  {
    ruta: 'formulario/static',
    Nombre: 'Menu 4',
    icono: null,
    id: 4,
    submenu: null,
  },
];
