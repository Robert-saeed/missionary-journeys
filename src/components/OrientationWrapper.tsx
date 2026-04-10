import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import "../globals.css";

export default function OrientationWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const [isPortrait, setIsPortrait] = useState(false);

  function checkOrientation() {
    setIsPortrait(window.matchMedia("(orientation: portrait)").matches);
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    checkOrientation();
    window.addEventListener("resize", checkOrientation);
    return () => window.removeEventListener("resize", checkOrientation);
  }, []);

  if (isPortrait) {
    return (
      <div className="flex items-center justify-center flex-col h-screen w-screen bg-black text-white text-xl text-center">
          <img
            src="/rotate.jpeg"
            alt="Rotate Device"
            className="size-80 -mt-20 rotate-90 animate-[rotate_1.5s_1s_ease-in-out_1_forwards]"
          />
          <div className="text-4xl z-10">من فضلك اقلب الهاتف</div>
      </div>
    );
  }

  return <>{children}</>;
}
