"use client"
import SearchResult from '@/components/SearchResult';
import { useSupabase } from '@/lib/supabase/hooks/useSupabase';
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

const SearchPage = () => {
    const { query } = useParams();
    const {filterData,getFilteredData} = useSupabase();

    
 
    
   
}

