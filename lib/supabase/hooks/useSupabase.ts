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
  

  
  
  

  
};
