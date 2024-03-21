"use client";

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

type UserData = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  isAdmin: string;
};

type DataContextProps = {
  loading: boolean;
  isLoggedIn: boolean;
  loggedInUserData: UserData;
  foodCatalog: FoodCatalog;
};

export const DataContext = createContext<DataContextProps>(
  {} as DataContextProps
);

export const DataProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [foodCatalog, setFoodCatalog] = useState({
    _id: "",
    name: "",
    image: "",
    ingredients: "",
    price: "",
    category: "",
  });

  const [loggedInUserData, setLoggedInUserData] = useState({
    _id: "",
    name: "",
    email: "",
    phone: "",
    password: "",
    isAdmin: "",
  });

  const accessToken =
    typeof window !== "undefined" && localStorage.getItem("token");

  const contextValue = {
    loading,
    isLoggedIn,
    loggedInUserData,
    foodCatalog,
  };

  useEffect(() => {
    const getFoods = async () => {
      try {
        const { data } = await axios.post("http://localhost:8000/get/foods");
        setFoodCatalog(data);
      } catch (error: any) {
        console.log("error getting foods");
      }
    };

    getFoods();

    if (accessToken) {
      const getloggedUser = async () => {
        try {
          setLoading(true);
          const { data } = await axios.get(
            "http://localhost:8000/users/refresh",
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );

          setIsLoggedIn(true);
          setLoggedInUserData(data);
          setLoading(false);
        } catch (error: any) {
          console.log(error.message);
        }
      };

      getloggedUser();
    } else {
      setIsLoggedIn(false);
      console.log("No");
    }
  }, [accessToken]);

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
