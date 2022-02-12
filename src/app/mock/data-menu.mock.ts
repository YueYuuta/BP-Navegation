import { MenuModel } from '../models';
import { HomePageName } from '../utils/enum/page-main/home-page-name.enum';
import { GeneralData } from '../utils/enum/sections/genetal-data.enum';

export const data: MenuModel[] = [
  {
    ruta: 'formulario/inicio',
    Nombre: HomePageName['Datos generales'],
    icono: 'fas fa-user',
    id: 1,
    submenu: [
      { id: 1, Nombre: 'Datos básicos', alias: GeneralData.basicData },
      {
        id: 2,
        Nombre: 'Datos de constitución',
        alias: GeneralData.constitutionData,
      },
      { id: 3, Nombre: 'Datos del domicilio', alias: GeneralData.addressData },
      { id: 4, Nombre: 'Datos económicos', alias: GeneralData.economicData },
      {
        id: 5,
        Nombre: 'Autocertificación',
        alias: GeneralData.selfCertification,
      },
    ],
  },

  {
    ruta: 'formulario/servicios',
    Nombre: HomePageName['Socios y accionistas'],
    icono: 'fas fa-plus',
    id: 2,
    submenu: [
      { id: 1, Nombre: 'inicio1' },
      { id: 2, Nombre: 'inicio2' },
      { id: 3, Nombre: 'inicio3' },
      { id: 4, Nombre: 'inicio4' },
      { id: 5, Nombre: 'inicio5' },
    ],
  },

  {
    ruta: 'formulario/static',
    Nombre: HomePageName['Datos regulatorios'],
    icono: null,
    id: 3,
    submenu: [
      { id: 1, Nombre: 'inicio1' },
      { id: 2, Nombre: 'inicio2' },
      { id: 3, Nombre: 'inicio3' },
      { id: 4, Nombre: 'inicio4' },
      { id: 5, Nombre: 'inicio5' },
    ],
  },
  // {
  //   ruta: 'formulario/servicios',
  //   Nombre: HomePageName['Cuentas y chequera'],
  //   icono: 'fas fa-plus',
  //   id: 4,
  //   submenu: null,
  // },
  // {
  //   ruta: 'formulario/servicios',
  //   Nombre: HomePageName['Cash management'],
  //   icono: 'fas fa-plus',
  //   id: 5,
  //   submenu: null,
  // },
];
