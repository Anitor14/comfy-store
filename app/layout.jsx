import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Provider from "../components/Provider";
import { ProductsProvider } from "../context/products_context";
import { FilterProvider } from "../context/filter_context";
import { CartProvider } from "../context/cart_context.js";
import Footer from "../components/Footer";

export const metadata = {
  title: "Comfy-e-commerce-store",
  description: "Buy All Your Comfy Funitures.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <ProductsProvider>
            <FilterProvider>
              <CartProvider>
                <main className="w-full overflow-hidden bg-white">
                  <Navbar />
                  <Sidebar />
                  {children}
                  <Footer />
                </main>
              </CartProvider>
            </FilterProvider>
          </ProductsProvider>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
