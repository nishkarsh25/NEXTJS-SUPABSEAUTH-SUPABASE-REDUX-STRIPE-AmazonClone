"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import amazonLogo from "../public/amazon-logo-2.webp";
import { BiCart } from "react-icons/bi";
import { CgSearch } from "react-icons/cg";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/lib/supabase/hooks/redux';
import { getCart } from '@/redux/cartSlice';
import { supabase } from '@/lib/supabase/products';

const itemList = [
    "All",
    "Fresh",
    "Amazon miniTV",
    "Sell",
    "Gift Cards",
    "Baby",
    "Buy Again",
    "Browsing History",
    "Amazon Pay",
    "Gift Ideas",
    "Health, Household & Personal Care"
]

const Header = () => {
    const [query, setQuery] = useState<string>("");
    const [user, setUser] = useState<any>(null);
    const router = useRouter();


    const cart = useAppSelector(getCart);

    const searchHandler = () => {
        router.push(`/search/${query}`);
    }

    useEffect(()=>{
        const getUserData = async () => {
            const {data:{user}} = await supabase.auth.getUser();
            setUser(user);
        }
        getUserData();
    },[])
 
    
}

