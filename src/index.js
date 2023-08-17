import ReactDOM from "react-dom";
import { product } from "./mock";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/defaultTheme";

import ProductPage from "/src/product-page/product-page";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ProductPage product={product} showInfoInAccordion="true" />
  </ThemeProvider>,
  rootElement
);
