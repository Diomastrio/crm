import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Toaster } from "react-hot-toast";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import ProtectedRoute from "./ui/ProtectedRoute";
import { DarkModeProvider } from "./context/DarkModeContext";

import Users from "./pages/Users";
import Account from "./pages/Account";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Entrar from "./pages/Entrar";
import Login from "./pages/Login";
import Cliente from "./pages/Articulos";
import AgregarCliente from "./pages/Clientes";

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
              <Route index element={<Navigate replace to="Home" />} />
              <Route path="users" element={<Users />} />
              <Route path="account" element={<Account />} />
              <Route path="Cliente" element={<Cliente />} />
              <Route path="AgregarCliente" element={<AgregarCliente />} />
            </Route>

            <Route path="Login" element={<Login />} />
            <Route path="Home" element={<Home />} />
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
