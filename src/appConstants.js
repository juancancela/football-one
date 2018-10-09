export const MENU_LABELS = {
  RESERVATIONS: 'RESERVAS',
  ACCOUNTING: 'CAJA DIARIA',
  CLIENTS: 'CLIENTES',
  PRODUCTS: 'PRODUCTOS',
  REPORTS: 'REPORTS',
};

export const MENU_OPTIONS = [
  { label: MENU_LABELS.RESERVATIONS, link: '/reservations' },
  { label: MENU_LABELS.ACCOUNTING, link: '/accounting' },
  { label: MENU_LABELS.CLIENTS, link: '/clients' },
  { label: MENU_LABELS.PRODUCTS, link: '/products' },
  { label: MENU_LABELS.REPORTS, link: '/reports' },
];

export const DATA_TYPES = {
  BOOLEAN: 'BOOLEAN',
  DATE: 'DATE',
  TEXT: 'TEXT',
};

export const RDX_FETCH_ENTITIES = 'RDX_FETCH_ENTITIES';
export const RDX_FETCHING_ENTITIES = 'RDX_FETCHING_ENTITIES';
export const RDX_FETCH_ENTITIES_SUCCESS = 'RDX_FETCH_ENTITIES_SUCCESS';
export const RDX_FETCH_ENTITIES_ERROR = 'RDX_FETCH_ENTITIES_ERROR';
export const RDX_UPDATE_ENTITY_SUCCESS = 'RDX_UPDATE_ENTITY_SUCCESS';
export const RDX_DELETE_ENTITY_SUCCESS = 'RDX_DELETE_ENTITY_SUCCESS';
export const RDX_CREATE_ENTITY_SUCCESS = 'RDX_CREATE_ENTITY_SUCCESS';

export const API_URL = 'http://localhost:3000/api/v1';
