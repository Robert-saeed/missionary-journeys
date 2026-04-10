import "../globals.css";
import type { pointType } from "../types/types";

function Point({ name, x, y, description, index, pointsNumber }: pointType) {
  const labelStyle: React.CSSProperties = {
    position: "absolute",
    width: "30em",
    zIndex: 999,
    ...(y < 50 ? { bottom: "calc(100% + 1em)" } : { top: "calc(100% + 1em)" }),
    ...(44 < x && x < 52 ? { left: "-120%" } : x < 50 ? { left: "0" } :{ right: "0%" }),
  };

  return (
    <div
      id={"sign" + index}
      style={{ "--x": x, "--y": y } as React.CSSProperties}
      className="map-city"
    >
      <div className="map-city__label" style={labelStyle}>
        <span
          className="
          map-city__sign
          bg-[#00c080]
          bg-[radial-gradient(at_88%_40%,hsla(240,15%,9%,1)_0px,transparent_85%),radial-gradient(at_49%_30%,hsla(240,15%,9%,1)_0px,transparent_85%),radial-gradient(at_14%_26%,hsla(240,15%,9%,1)_0px,transparent_85%),radial-gradient(at_0%_64%,#00c080_0px,transparent_85%),radial-gradient(at_41%_94%,#00c080_0px,transparent_85%),radial-gradient(at_100%_99%,#00c080_0px,transparent_85%)]
          flex items-center justify-center
          relative
          font-bold
          rounded-sm
          shadow-[0_0_8px_#000]
          text-white
          max-w-full h-[10.5em]
          overflow-hidden
          px-[0.6em] pt-[0.4em] pb-[0.4em] pl-[0.3em]
          flex-wrap
        "
        >
          <div className="absolute top-1 left-2 flex items-center justify-between gap-2 w-[95%]">
            <div className="italic text-lg px-2 py-1 bg-(--primary) rounded-xl shadow-2xl shadow-emerald-300">
              {name}
            </div>
            <p className="shadow-[var(--hover-shadows),var(--primary)_0px_0px_20px_2px] bg-(--primary) scale-95 font-bold tracking-widest rounded-[1.1em] cursor-pointer text-white px-[0.6em] py-[0.2em]">
              {index + 1} / {pointsNumber}
            </p>
          </div>
          <div className="text-xs mt-8">{description}</div>
        </span>
      </div>
    </div>
  );
}

export default Point;
