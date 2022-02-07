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
    Nombre: 'Datos Generales',
    icono: 'fas fa-user',
    id: 1,
    submenu: [
      { Nombre: 'inicio1' },
      { Nombre: 'inicio2' },
      { Nombre: 'inicio3' },
      { Nombre: 'inicio4' },
      { Nombre: 'inicio5' },
    ],
  },

  {
    ruta: 'formulario/servicios',
    Nombre: 'Socios o accionistas',
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
    Nombre: 'Datos regulatorios',
    icono: null,
    id: 4,
    submenu: [{ Nombre: 'menu' }, { Nombre: 'menu' }, { Nombre: 'menu' }],
  },
  // {
  //   ruta: 'formulario/inicio',
  //   Nombre: 'Cuentas y chequera',
  //   icono: 'fas fa-user',
  //   id: 5,
  //   submenu: [
  //     { Nombre: 'inicio1' },
  //     { Nombre: 'inicio2' },
  //     { Nombre: 'inicio3' },
  //     { Nombre: 'inicio4' },
  //     { Nombre: 'inicio5' },
  //   ],
  // },
  // {
  //   ruta: 'formulario/inicio',
  //   Nombre: 'Cash management',
  //   icono: 'fas fa-user',
  //   id: 6,
  //   submenu: [
  //     { Nombre: 'inicio1' },
  //     { Nombre: 'inicio2' },
  //     { Nombre: 'inicio3' },
  //     { Nombre: 'inicio4' },
  //     { Nombre: 'inicio5' },
  //   ],
  // },
];
