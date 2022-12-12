import { useApiLocation } from 'hooks/useApilocation'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = () => {
  const { lon, lat, country, city } = useApiLocation()
  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      style={{ height: '800px', widows: '100%' }}
      minZoom={4}
      fadeAnimation
      maxBounds={[
        [-180, 180],
        [180, -180]
      ]}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {lon && lat && (
        <Marker position={[lat, lon]}>
          <Popup>
            {country} - {city}
          </Popup>
        </Marker>
      )}
    </MapContainer>
  )
}

export default Map
