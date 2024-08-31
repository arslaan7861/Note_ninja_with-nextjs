import { useGSAP } from "@gsap/react";
import React from "react";
function GaspProvider() {
  useGSAP(() => {});
  return <></>;
}

export default GaspProvider;
