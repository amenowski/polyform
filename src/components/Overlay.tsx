import { createPortal } from "react-dom";

function Overlay() {
  return createPortal(
    <div className="fixed left-0 top-0 z-50 h-full w-full bg-black opacity-50"></div>,
    document.body,
  );
}

export default Overlay;
