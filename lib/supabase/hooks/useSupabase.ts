import { useState } from "react";
import { supabase } from "../products";


export const useSupabase = () => {
  const [products, setProducts] = useState<any>([]);
  const [filterData, setFilterData] = useState<any>([]);
  const [singleProduct, setSingleProduct] = useState<any>([]);
  const [mensProduct, setMensProduct] = useState<any>([]);
  const [womensProduct, setWomensProduct] = useState<any>([]);

  const getDataFromSupabase = async () => {
    let { data, error } = await supabase.from("product").select("*");
    if (data) {
      setProducts(data);
    }
    if (error) {
      console.log(error);
    }
  };
  const getFilteredData = async (query: string) => {
    let { data, error } = await supabase
      .from("product")
      .select("*")
      .or(
        `title.ilike.%${query}%, description.ilike.%${query}%, category.ilike.%${query}%`
      ); // cloth
    if (data) {
      setFilterData(data);
    }
    if (error) {
      console.log(error);
    }
  };

  const getSingleProduct = async (id: number) => {
    let { data, error } = await supabase
      .from("product")
      .select("*")
      .eq("id", id);
    if (data) {
      setSingleProduct(data);
    }
    if (error) {
      console.log(error);
    }
  };
  
  

  
};
