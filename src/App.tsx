import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./components/AppLayout";
import GlobalStyles from "./styles/GlobalStyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./components/HomePage";
import BookDetail from "./components/BookDetail";
import { ShowAddBookProvider } from "./contexts/ShowAddBookContext";
import PageNotFound from "./components/PageNotFound";
const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Navigate to="/books" replace={true} />,
        },
        { path: "/books", element: <HomePage /> },
        { path: "/books/:bookId", element: <BookDetail /> },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
  ]);
  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 5000 } },
  });
  return (
    <ShowAddBookProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ShowAddBookProvider>
  );
};

export default App;
