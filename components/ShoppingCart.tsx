"use client"
import React from 'react';
import Image from "next/image";
import { useAppDispatch } from '@/lib/supabase/hooks/redux';
import { clearAllCart, decrementQuantity, incrementQuantity, removeFromTheCart } from '@/redux/cartSlice';
import Subtotal from './shared/Subtotal';

const ShoppingCart = ({cart, totalPrice}:{cart:any, totalPrice:number}) => {
    
    
}

