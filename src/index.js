import "./assets/css/vendor/bootstrap.min.css";
import "react-circular-progressbar/dist/styles.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-table/react-table.css";
import "./App.css";
import "./assets/themify-icon/themify-icons.css";
import "./assets/simple-line-icon/simple-line-icons.css";
import "./assets/font-awesome/css/all.css";
import "./assets/elagent/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/main.css";
import "./assets/responsive.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "popper.js";
import { isMultiColorActive, defaultColor } from "./constants/defaultValues";
const color =
  isMultiColorActive && localStorage.getItem("themeColor")
    ? localStorage.getItem("themeColor")
    : defaultColor;

localStorage.setItem("themeColor", color);

require("./assets/css/sass/themes/gogo." + color + ".scss");
require("./AppRenderer");
