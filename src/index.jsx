import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<h2>Loading...</h2>}>
        <App />
      </Suspense>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
