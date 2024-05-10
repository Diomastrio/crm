import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Toaster } from "react-hot-toast";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import ProtectedRoute from "./ui/ProtectedRoute";
import { DarkModeProvider } from "./context/DarkModeContext";

import Productos from "./pages/Productos";
import Users from "./pages/Users";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Entrar from "./pages/Entrar";
import Articulos from "./pages/Articulos";
import Admin from "./pages/Admin";
import Homepage from "./pages/Homepage";
import Sugerencias from "./features/sugerencias/Sugerencias";
import Mensajes from "./mensajes/Mensa";
import Marcador from "./pages/Marcador";
import Suscripcion from "./pages/Suscripcion";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />

        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="Homepage" />} />
              <Route path="productos" element={<Productos />} />
              <Route path="articulos" element={<Articulos />} />
              <Route path="users" element={<Users />} />
              <Route path="account" element={<Account />} />
              <Route path="suscripcion" element={<Suscripcion />} />
              <Route path="sugerencias" element={<Sugerencias />} />
              <Route path="mensajes" element={<Mensajes />} />
              <Route path="Marcador" element={<Marcador />} />

              <Route
                path="admin"
                element={
                  <ProtectedRoute UserType="admin">
                    <Admin />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route path="Homepage" element={<Homepage />} />
            <Route path="Login" element={<Login />} />
            <Route path="entrar" element={<Entrar />} />
            <Route path="*" element={<PageNotFound />} />
            {/* <Route path="*" element={<Home/>} /> */}
          </Routes>
        </BrowserRouter>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
