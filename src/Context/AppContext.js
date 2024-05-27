import React, { createContext, useState, useEffect } from "react";

// Create context
export const AppContext = createContext();

// Create provider
export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  // Fetch data function
  async function fetchData(page = 1) {
    setLoading(true);
    let baseUrl = `https://codehelp-apis.vercel.app/api/get-blogs?page=${page}`;
    try {
      const response = await fetch(baseUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Fetched data:", data);
      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error in fetching API:", error);
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Page handler function
  function pageHandler(page) {
    setPage(page);
    fetchData(page);
  }

  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchData,
    pageHandler
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
