import axios from "axios"

export const enum RequestMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
}

export const baseRequest = async <T, K>(url: string, method: RequestMethod, payload: K): Promise<T> => {
    switch (method) {
        case RequestMethod.GET:
            return await asyncGet(url, payload)
        case RequestMethod.POST:
            return await asyncPOST(url, payload)
        case RequestMethod.PUT:
            return await asyncPUT(url, payload)
        case RequestMethod.DELETE:
            return await asyncDELETE(url, payload)
        default:
            throw Error("invalid request method")
    }
}

/**
 * get 请求
 * @param url 
 * @param payload 
 * @returns 
 */
const asyncGet = <T, K>(url: string, payload: K): Promise<T> => axios.get(url, { data: payload })

/**
 * post 请求
 * @param url 
 * @param payload 
 * @returns 
 */
const asyncPOST = <T, K>(url: string, payload: K): Promise<T> => axios.post(url, { data: payload })

/**
 * put 请求
 * @param url 
 * @param payload 
 * @returns 
 */
const asyncPUT = <T, K>(url: string, payload: K): Promise<T> => axios.put(url, { data: payload })

/**
 * delete 请求
 * @param url 
 * @param payload 
 * @returns 
 */
const asyncDELETE = <T, K>(url: string, payload: K): Promise<T> => axios.delete(url, { data: payload })