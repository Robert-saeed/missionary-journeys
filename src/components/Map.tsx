import Point from "./Point";

function Map({
  mapNumber,
  points,
}: {
  mapNumber: number;
  points: { x: number; y: number, description: string }[];
}) {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <img
        src={`/map${mapNumber}.jpeg`}
        alt={`Map ${mapNumber}`}
        className="size-full"
      />
      {points.map((point, index) => (
        <Point key={index} x={point.x} y={point.y} description={point.description} />
      ))}
    </div>
  );
}

export default Map;
