"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import axios from "axios";
import AppHeader from '../_components/AppHeader';
import { AppSidebar } from '../_components/AppSidebar';

function DashboardProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <SidebarProvider>
            <AppSidebar />
            <main className='w-full '>
                <AppHeader />
                {/* <SidebarTrigger /> */}
                <div className='lg:p-5 px-2 '>{children}</div>
            </main>
        </SidebarProvider>

    )
}

export default DashboardProvider