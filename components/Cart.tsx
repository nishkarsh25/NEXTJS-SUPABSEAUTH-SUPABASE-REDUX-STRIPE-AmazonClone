"use client"
import React from 'react'
import ShoppingCart from './ShoppingCart'
import ProccedToBuy from './ProccedToBuy'
import { useAppSelector } from '@/lib/supabase/hooks/redux';
import { getCart } from '@/redux/cartSlice';

const Cart = () => {
    const cart = useAppSelector(getCart);
    let totalPrice = 0;
    cart.forEach((item:any) => {
        totalPrice += item.price * item.quantity;
    });
    
}

