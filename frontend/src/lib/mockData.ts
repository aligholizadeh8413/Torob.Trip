import { Destination, Flight } from './types';

export const destinations: Destination[] = [
  { name: 'تهران', city: 'تهران، ایران', image: '/images/destinations/tehran.webp', description: 'شهر پرانرژی و مدرن ایران', color: '#244c91' },
  { name: 'مشهد', city: 'مشهد، ایران', image: '/images/destinations/mashhad.webp', description: 'سفر آرام به قلب خراسان', color: '#6558a6' },
  { name: 'شیراز', city: 'شیراز، ایران', image: '/images/destinations/shiraz.webp', description: 'عطر بهار و تاریخ در یک شهر', color: '#c56c4a' },
  { name: 'اصفهان', city: 'اصفهان، ایران', image: '/images/destinations/isfahan.webp', description: 'هنر، معماری و زاینده‌رود', color: '#308f8c' }
];

export const flights: Flight[] = [
  { id: 'iran-air-1', airline: 'ایران‌ایر', code: 'IR ۲۶۴', from: 'تهران', fromCode: 'THR', to: 'مشهد', toCode: 'MHD', depart: '۰۷:۱۵', arrive: '۰۸:۴۵', duration: '۱ ساعت و ۳۰ دقیقه', stops: 'مستقیم', className: 'اکونومی', baggage: '۲۰ کیلوگرم بار', price: 2450000, accent: '#1976d2' },
  { id: 'mahan-1', airline: 'هواپیمایی ماهان', code: 'W۵۰۱', from: 'تهران', fromCode: 'THR', to: 'مشهد', toCode: 'MHD', depart: '۱۰:۳۰', arrive: '۱۲:۰۵', duration: '۱ ساعت و ۳۵ دقیقه', stops: 'مستقیم', className: 'اکونومی', baggage: '۲۵ کیلوگرم بار', price: 2890000, accent: '#ec6c45' },
  { id: 'ata-1', airline: 'آتا', code: 'I۵۳۲', from: 'تهران', fromCode: 'THR', to: 'مشهد', toCode: 'MHD', depart: '۱۳:۴۰', arrive: '۱۵:۲۰', duration: '۱ ساعت و ۴۰ دقیقه', stops: 'مستقیم', className: 'اکونومی', baggage: '۲۰ کیلوگرم بار', price: 1980000, accent: '#24a693' },
  { id: 'fly-persia-1', airline: 'فلای پرشیا', code: '۷۰۳۲', from: 'تهران', fromCode: 'THR', to: 'مشهد', toCode: 'MHD', depart: '۱۸:۲۰', arrive: '۲۰:۰۰', duration: '۱ ساعت و ۴۰ دقیقه', stops: 'مستقیم', className: 'اکونومی', baggage: '۲۰ کیلوگرم بار', price: 2160000, accent: '#8b5cf6' },
  { id: 'qeshm-1', airline: 'قشم‌ایر', code: 'QB۱۲۰', from: 'تهران', fromCode: 'THR', to: 'مشهد', toCode: 'MHD', depart: '۲۱:۴۵', arrive: '۲۳:۲۵', duration: '۱ ساعت و ۴۰ دقیقه', stops: 'مستقیم', className: 'اکونومی', baggage: '۲۰ کیلوگرم بار', price: 2320000, accent: '#dfad2d' }
];

export const formatPrice = (price: number) => new Intl.NumberFormat('fa-IR').format(price) + ' تومان';
