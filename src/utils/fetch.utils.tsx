import type { TUri, THeaders,TMethod } from "../typescript/types/request-fetch/request.fetch.types";
import type { IFecth } from "../typescript/interface/request-fetch/request.fetch.interfaces";

export default async function requestFecth<TResponse, TRequestBody = TResponse> ( 
    uri:TUri, 
    method:TMethod = 'GET', 
    body?:TRequestBody, 
    headers:THeaders = { 
        'Content-Type':'application/json' 
    }, 
):Promise<IFecth<TResponse>> {

    if ( !uri ) throw new Error('URI no encontrada');
    
    const response = await fetch(uri, {
        method,
        headers,
        body: method === 'GET' ? undefined : JSON.stringify(body),
    });

    if ( !response.ok ) throw new Error('Error en la red o la solicitud falló');
    const responseData = await response.json();

    return {
        data:responseData.data,
        message:responseData.message,
    };
};