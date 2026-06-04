import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly snap the window scroll back to the top-left corner
    window.scrollTo(0, 0);
  }, [pathname]); // Fires every single time the URL route updates

  return null;
}