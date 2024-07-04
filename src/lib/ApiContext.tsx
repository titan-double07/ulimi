"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
   
interface Product {
  SKU: number;
  Name: string;
  "Product Category": string;
  Title: string;
  Brand: string;
  Description: string;
  "Cost Price": number;
  Image_1: string;
  Quantity: number;
  size: string;
  
}

interface ApiContextType {
  products: Product[];
  loading: boolean;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const ApiProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    console.log(query);
    fetch(
      `http://3.88.1.181:8000/products/public/catalog/?supplier=FragranceX&search=${query}`
    )
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [query]);

  return (
    <ApiContext.Provider value={{ products, loading, setQuery }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => {
  const context = useContext(ApiContext);
  if (context === undefined) {
    throw new Error("useApi must be used within an ApiProvider");
  }
  return context;
};
