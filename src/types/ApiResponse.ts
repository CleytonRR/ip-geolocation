export interface ApiResponse {
  query?: string
  message?: string
  status?: string
  country?: string
  countryCode?: string
  region?: string
  regionName?: string
  city?: string
  zip?: string
  lat?: number
  lon?: number
  timezone?: string
  isp?: string
  org?: string
  as?: string
}

export interface UpdateApiResponseData {
  setApiResponse?(apiResponse: ApiResponse): void
}
