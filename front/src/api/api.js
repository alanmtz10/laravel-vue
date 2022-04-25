import axios from "axios";

const a = axios.create();

/**
 * Configurar URL base del backend
 *
 * @type {string}
 */
a.defaults.baseURL = process.env.VUE_APP_BASE_URL || 'http://localhost:8000';

/**
 * Indicar a axios que envié las cookies en peticiones CORS
 *
 * @type {boolean}
 */
a.defaults.withCredentials = true;

/**
 * Header cliente acepta JSON
 *
 * @type {string}
 */
a.defaults.headers.common['Accept'] = 'application/json';

/**
 * Petición GET
 *
 * @param path - /path
 * @returns {Promise<AxiosResponse<any>|null>} - null si hay error
 */
export async function get(path) {
    try {
        return await a.get(path);
    } catch (e) {
        console.error({
            message: e.message,
            status: e.response.status
        });
    }
    return null;
}

/**
 * Petición POST
 *
 * @param path - /path
 * @param data - {datos}
 * @returns {Promise<AxiosResponse<any>|null>} - null si hay error
 */
export async function post(path, data) {
    try {
        return await a.post(path, data);
    } catch (e) {
        console.error({
            message: e.message,
            status: e.response.status
        });
    }
    return null
}

/**
 * Petición PUT
 *
 * @param path - /path
 * @param data - {datos}
 * @returns {Promise<AxiosResponse<any>|null>} - null si hay error
 */
export async function put(path, data) {
    try {
        return await a.put(path, data);
    } catch (e) {
        console.error({
            message: e.message,
            status: e.response.status
        });
    }
    return null
}

/**
 * Recuperar Cookies de CSRF y sesión para futuras peticiones
 *
 * @returns {Promise<AxiosResponse<*>|null>}
 */
export async function csrf() {
    return await get('/sanctum/csrf-cookie');
}
