import React from 'react'
import Image from "next/image";
import Ratings from './Ratings';
import { useAppDispatch } from '@/lib/supabase/hooks/redux';
import { addToCart } from '@/redux/cartSlice';
import { useRouter } from 'next/navigation';



