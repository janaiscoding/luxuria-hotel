"use client";

import Button from "../Button";

const ButtonHeroWrapper = () => {
  const handleAbout = () => {
    console.log("click about");
  };
  const handleRooms = () => {
    console.log("click rooms");
  };
  return (
    <div className="flex gap-4">
      <Button content="About us" onClick={handleAbout} darkTheme={true} ariaLabel="See about us"/>
      <Button content="See rooms" onClick={handleRooms} darkTheme={false} ariaLabel="See rooms"/>
    </div>
  );
};

export default ButtonHeroWrapper;
