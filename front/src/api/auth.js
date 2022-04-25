import {get, post} from '@/api/api';

/**
 * Recuperar al usuario si es que existe una sesión
 *
 * @returns {Promise<AxiosResponse<*>|null>}
 */
export async function authenticatedUser() {
    return get('/user');
}

/**
 * Intentar login
 *
 * @param credentials
 * @returns {Promise<AxiosResponse<*>|null>}
 */
export async function login(credentials) {
    return post('/login', credentials);
}

/**
 * Cerrar sesión del usuario
 *
 * @returns {Promise<AxiosResponse<*>|null>}
 */
export async function logout() {
    return post('/logout');
}
