import "../globals.css";
import Point from "./Point";
import type { MapType } from "../types/types";

function Map({ mapNumber, points, pointsNumber, elment }: MapType) {
  return (
    <div
      className="h-screen w-full flex justify-center items-center"
      onClick={() => {
        elment.current?.requestFullscreen();
      }}
    >
      <img
        src={`/map${mapNumber}.jpeg`}
        alt={`Map ${mapNumber}`}
        className="size-full"
      />
      <div className="map-container">
        <div className="map-cities">
          {points.map((point, index) => (
            <Point
              key={index}
              name={point.name}
              x={point.x}
              y={point.y}
              description={point.description}
              index={index}
              pointsNumber={pointsNumber}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Map;
