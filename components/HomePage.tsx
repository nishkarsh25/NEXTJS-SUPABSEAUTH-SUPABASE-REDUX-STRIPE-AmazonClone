"use client"
import React, { useEffect } from 'react';
import Image from "next/image";
import { useSupabase } from '@/lib/supabase/hooks/useSupabase';
import CategoryWiseProduct from './shared/CategoryWiseProduct';
import Link from "next/link";

const HomePage = () => {
  const { mensProduct,
    getMensClothing,
    womensProduct,
    getWomensClothing } = useSupabase();

  useEffect(() => {
    getMensClothing();
    getWomensClothing();
  }, [getMensClothing,getWomensClothing])



  
}

