import axios from "axios";

const _DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*'
}

export class Axios {
    static get(url, params) {
        return axios.get(url,{
            params: params,
            headers: {
                "Accept": "application/json",
                ..._DEFAULT_HEADERS
            }
        })
    }

    /**
     *
     * @param url
     * @param {Object} data
     * @returns {Promise<AxiosResponse<T>>}
     */
    static post(url, data) {
        return axios.post(url, JSON.stringify(data), {
            headers: {
                "Content-Type": "application/json",
                ..._DEFAULT_HEADERS,
            }
        })
    }

    /**
     *
     * @param url
     * @param {Object} data
     * @returns {Promise<AxiosResponse<T>>}
     */
    static put(url, data) {
        return axios.put(url, JSON.stringify(data), {
            headers: {
                ..._DEFAULT_HEADERS,
            }
        })
    }

    /**
     *
     * @param url
     * @returns {Promise<AxiosResponse<T>>}
     */
    static delete(url) {
        return axios.delete(url, {
            headers: {
                ..._DEFAULT_HEADERS,
            }
        })
    }
}
