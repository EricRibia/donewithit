import { useEffect, useState } from "react";
import api from "../api/apiService";
import { API_ENDPOINTS } from "../api/apis";
import { CategoriesResponseT } from "../types";

export const useCategories = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<CategoriesResponseT[]>([]);

  const handleGetCategories = async () => {
    setIsLoading(true);
    try {
      const response = await api.get(API_ENDPOINTS.getCategories);
      setCategories(response.data.data);
    } catch (err: any) {
      if (err.response) {
        console.log("err.response.data", err.response.data);
        setError(err.response.data.message);
      } else {
        console.log("err.response", err);
      }
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    handleGetCategories();
  }, []);

  return { error, categories, isLoading };
};
