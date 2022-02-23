import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
const GenericNotFound = () => {
  const [showIcon, setShowIcon] = useOutletContext();

  useEffect(() => {
    setShowIcon(true);
  }, []);
  return (
    <h1 className="display-flex-style text-white margin-top">Page Not Found</h1>
  );
};

export default GenericNotFound;
