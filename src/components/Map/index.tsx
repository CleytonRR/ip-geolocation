import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = () => {
  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      style={{ height: '800px', widows: '100%' }}
      minZoom={3}
      maxBounds={[
        [-180, 180],
        [180, -180]
      ]}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[0, 0]}>
        <Popup>Pop up message</Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
