// This is an overlay with z-index = 10;
// Any element that is a child of the same parent where this is placed needs a higher z-index
// overlayHeight = parentHeight 
const Overlay = ({ overlayHeight }: { overlayHeight: number }) => {
  return (
    <div
      className={`h-[${overlayHeight}vh] w-full bg-zinc-950/70 absolute z-10`}
    ></div>
  );
};

export default Overlay;
