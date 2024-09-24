import { CreateListingPayloadT, ListitngsResponseT } from "../types";
import api from "../api/apiService";
import { API_ENDPOINTS } from "../api/apis";
import { useEffect, useState } from "react";

export const useListingsCreate = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const createListing = async (payload: CreateListingPayloadT) => {
    setError(null);
    setIsLoading(true);
    const formData = new FormData();
    payload.images.forEach((uri, index) => {
      formData.append("images", {
        uri: uri,
        type: "image/jpeg", // or the appropriate mime type
        name: "photo.jpg", // or the appropriate file name
      });
    });
    formData.append("title", payload.title);
    formData.append("price", Number(payload.price));
    formData.append("description", payload.description);
    formData.append("categoryId", payload.categoryId);
    formData.append("latitude", payload.latitude);
    formData.append("longitude", payload.longitude);
    try {
      const response = await api.post(API_ENDPOINTS.createListing, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Upload success:", response.data);
      console.log("res create listing", response);
    } catch (err: any) {
      console.log(err.response.data);
      if (err.response) {
        console.log("err.response.data", err.response.data);
        setError(err.response.data.message);
      } else {
        setError("Error occurred, please try again");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return { createListing, error, isLoading };
};

export const useListingsGet = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [listingsData, setListingsData] = useState<ListitngsResponseT[]>([]);

  const getListings = async () => {
    try {
      const response = await api.get<ListitngsResponseT>(
        API_ENDPOINTS.getListings
      );
      setListingsData(response.data);
    } catch (err: any) {
      console.log(err.response.data);
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError("Error occurred, please try again");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getListings();
  }, []);
  return { error, isLoading, listingsData };
};
