// Importacion de hooks y componentes de React
import React, { createContext, useState } from 'react';

// Importación de Interfaces
import type { ILoginContext,IDatalogin } from '../../interface/Iapi-context/ILogin-context';

const defaultContextValue: ILoginContext = {
    dataLogin: {
        userName: '',
        password: '',
        token: '',
        autorizado:'',
    },
    setDataLogin: () => {},
};

export const DataContext = createContext<ILoginContext>(defaultContextValue);

const DataProvider: React.FC<ILoginContext> = ( {children, key = undefined} ) => {
    const [ dataLogin, setDataLogin ] = useState<IDatalogin>({
        userName:'',
        password:'',
        token:'',
        autorizado:'',
    });

    return (
        <DataContext.Provider key={key} value={ {dataLogin, setDataLogin} }>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;