import React from 'react';
import { Printer,Clock,DollarSign } from 'lucide-react';


export const ServiceDetails:{id:number,title:string,description:string,icon:React.ReactElement<unknown>}[] = [
    {
        id:1,
        title:"Quality printing",
        description:"Our Quality Printing service ensures crisp, vibrant prints with professional-grade materials. We use advanced technology to deliver outstanding clarity and color accuracy, whether it's for business documents, marketing materials, or personal projects. Trust us to handle your printing needs with precision and care, providing results that exceed your expectations.",
        icon:<Printer className=' h-7 w-7 text-color-6' />
    },
    {
        id:2,
        title:"Timely Delivery",
        description:"Our Timely Delivery service ensures your orders arrive on schedule, every time. We understand the importance of punctuality, whether for personal needs or business deadlines. With a commitment to reliability and efficiency, we guarantee that your deliveries will be handled with the utmost care and precision, reaching you exactly when you need them.",
        icon:<Clock className=' h-7 w-7 text-color-6' />,
    },
    {
        id:3,
        title:"Quality",
        description:"Our Quality Printing service ensures crisp, vibrant prints with professional-grade materials. We use advanced technology to deliver outstanding clarity and color accuracy, whether it's for business documents, marketing materials, or personal projects. Trust us to handle your printing needs with precision and care, providing results that exceed your expectations.",
        icon:<Printer className=' h-7 w-7 text-color-6' />,
    },
    {
        id:4,
        title:"Money back guranteed",
        description:"Our Money Back Guaranteed service ensures your complete satisfaction with every purchase. If you're not fully satisfied with your order, we offer a hassle-free refund process. Your trust and peace of mind are our top priorities, and we stand behind our commitment to quality and customer satisfaction with a 100% money-back guarantee.",
        icon:<DollarSign className=' h-7 w-7 text-color-6' />,
    },
]