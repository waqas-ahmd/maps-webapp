import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import * as olProj from "ol/proj";

const params = new URLSearchParams(window.location.search);
let lat = params.get("lat") || 0;
let lng = params.get("lng") || 0;
let zoom = params.get("zoom") || 5;

let map = new Map({
  target: "map",
  view: new View({
    zoom,
    center: olProj.transform([lng, lat], "EPSG:4326", "EPSG:3857"),
  }),
});

const openStreetMapStandard = new TileLayer({
  source: new OSM(),
  visible: true,
  title: "STANDARD",
});

const openStreetMapHumanitrian = new TileLayer({
  source: new OSM({
    url: "https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
  }),
  visible: true,
  title: "HUMANITARIAN",
});

map.addLayer(openStreetMapStandard);
