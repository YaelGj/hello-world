import '../css/App.css';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, Icon} from 'react-leaflet';

const positionLyon = [45.767311, 4.834310];
const positionMarkerPosition = [45.767311, 4.834310];
const positionMarker1 = [45.767000, 4.834000];
const positionMarker2 = [45.768000, 4.835000];

var iconEncombrant = L.icon({
    iconUrl: 'marker_black.png',
    iconSize: [30, 30],
    iconAnchor: [14.5, 28]
});
var iconDegradation = L.icon({
    iconUrl: 'marker_white.png',
    iconSize: [30, 30],
    iconAnchor: [14.5, 28]
});



function Contact() {
    return (
        <div className="App">
            <header className="App-header">
                <h2>Carte</h2>
                <p>
                    Voici la carte qui plustard regroupera différents marqueurs :<br></br>
                        - Points de collecte pour les maraudes ou leurs trajet<br></br>
                        - Dégradation de la ville (graffiti, casse, encombrants<br></br>
                        - Personnes dans le besoin.<br></br>
                </p>
                <div id="mapid">
                        <MapContainer style={{width: '100%', height: '100%'}} center={positionLyon} zoom={16} scrollWheelZoom={false}>
                            <TileLayer
                                url="http://api.mapbox.com/styles/v1/tamias/ckjvagvfe0gw817nqo665op6d/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGFtaWFzIiwiYSI6ImNranZhanB2dzAwaTgycHFxZDFneWg2d2cifQ.YDetdSVCXUP9wSuVANugbg"
                                attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
                                />
                            <Marker position={positionMarkerPosition}>                                
                            </Marker>
                            <Marker icon={iconEncombrant} position={positionMarker1}>
                            </Marker>
                            <Marker icon={iconDegradation} position={positionMarker2}>                                
                            </Marker>
                            
                        </MapContainer>
                    <br/>
                </div>
            </header>                     
        </div>
    );
}

  export default Contact;