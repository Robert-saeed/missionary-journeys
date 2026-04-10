import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Map from "./components/Map";
import OrientationWrapper from "./components/OrientationWrapper";

function Maps() {
  const params = useParams();
  const fullscreenRef = useRef<HTMLDivElement>(null);
  const [maps, setMaps] = useState({
    firstMap: [],
    secondMap: [],
    thirdMap: [],
  });

  useEffect(() => {
    fetch("scripts/citysInformation.json")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        setMaps(data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });

    fullscreenRef.current?.requestFullscreen();
  }, []);

  const map =
    params.id === "first-journey"
      ? {
          mapNumber: 1,
          point: maps.firstMap,
          pointNumber: maps.firstMap.length,
        }
      : params.id === "second-journey"
        ? {
            mapNumber: 2,
            point: maps.secondMap,
            pointNumber: maps.secondMap.length,
          }
        : {
            mapNumber: 3,
            point: maps.thirdMap,
            pointNumber: maps.thirdMap.length,
          };

  return (
    <div ref={fullscreenRef}>
      <OrientationWrapper>
        <Map
          mapNumber={map.mapNumber}
          points={map.point}
          pointsNumber={map.pointNumber}
          elment={fullscreenRef as React.RefObject<HTMLDivElement>}
        />
      </OrientationWrapper>
    </div>
  );
}

export default Maps;
