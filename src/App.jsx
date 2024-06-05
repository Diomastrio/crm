import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Toaster } from "react-hot-toast";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import ProtectedRoute from "./ui/ProtectedRoute";
import { DarkModeProvider } from "./context/DarkModeContext";

import Account from "./pages/Account";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Cliente from "./pages/Clientes";
import Prospectos from "./pages/Prospectos";
import AgregarCliente from "./pages/AgregarCliente";
import AgregarProspecto from "./pages/AgregarProspecto";
import Graphs from "./pages/Graphs";
import PDF from "./pages/PDF";
import AgregarDiplomado from "./pages/AgregarDiplomado";
import Diplomados from "./pages/Diplomado";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
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
        
              <Route index element={<Navigate replace to="Home" />} />
              <Route path="account" element={<Account />} />
              <Route path="Cliente" element={<Cliente />} />
              <Route path="Prospectos" element={<Prospectos />} />
              <Route path="AgregarCliente" element={<AgregarCliente />} />
              <Route path="Graphs" element={<Graphs />} />
              <Route path="PDF" element={<PDF />} />
              <Route path="AgregarDiplomado" element={<AgregarDiplomado />} />
              <Route path="Diplomados" element={<Diplomados />} />
            </Route>

            <Route path="Login" element={<Login />} />
            <Route path="Home" element={<Home />} />
            <Route path="Registro" element={<Registro />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="AgregarProspecto" element={<AgregarProspecto />} />
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
