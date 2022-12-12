import React, { createContext, useState } from 'react'
import { ApiResponse, UpdateApiResponseData } from 'types/ApiResponse'

export const ApiLocationContext = createContext<
  ApiResponse & UpdateApiResponseData
>({})

type ApiProviderProps = {
  children: React.ReactNode
}

export const ApiProvider: React.FC<ApiProviderProps> = ({ children }) => {
  const [apiLocation, setapiLocation] = useState<ApiResponse>({})

  return (
    <ApiLocationContext.Provider
      value={{ ...apiLocation, setApiResponse: setapiLocation }}
    >
      {children}
    </ApiLocationContext.Provider>
  )
}
