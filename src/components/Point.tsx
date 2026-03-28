import "../globals.css"

function Point ({ x, y, description }: { x: number, y: number, description: string }) {
  return (
      <div className="map-container">
        <div className="map-cities">

          <div
            style={{ "--x": x, "--y": y } as React.CSSProperties}
            className="map-city"
          >
            <div className="map-city__label">
              <span className="map-city__sign">
                {description}
              </span>
            </div>
          </div>

        </div>
    </div>
  );
}

export default Point;
