import api from '../lib/api';
export const authService={me:()=>api.get('/auth/me')};
