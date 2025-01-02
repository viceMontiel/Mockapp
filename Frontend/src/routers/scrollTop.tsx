import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();  // Obtenemos la ruta actual

  useEffect(() => {
    window.scrollTo(0, 0);  // Cuando la ruta cambia, hacemos scroll a la parte superior
  }, [pathname]);

  return null;
}

export default ScrollToTop;
