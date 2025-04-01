import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setupInterceptors } from "./api";

const InterceptorSetup = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setupInterceptors(navigate);
  }, [navigate]);

  return null; // This component does not render anything
};

export default InterceptorSetup;
