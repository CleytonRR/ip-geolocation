import { useContext } from 'react'

import { ApiLocationContext } from 'providers/location'

export const useApiLocation = () => useContext(ApiLocationContext)
