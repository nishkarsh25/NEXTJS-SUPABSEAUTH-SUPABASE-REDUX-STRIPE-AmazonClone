"use client"
import React from 'react';
import amazonLogo from "../public/amazon-logo.png"
import { FaLock } from "react-icons/fa6";
import Image from "next/image";
import OrderSummary from './OrderSummary';
import DeliveryAddress from './DeliveryAddress';
import { useAppSelector } from '@/lib/supabase/hooks/redux';
import { getCart } from '@/redux/cartSlice';



