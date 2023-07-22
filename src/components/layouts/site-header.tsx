import React from 'react';
import MainNav from './main-nav';
import LocalSelecter from '@/components/local-selector';
import { MobileNav } from './mobile-nav';

export default function SiteHeader() {
    return (
        <header className="bg-background border-b">
            <div className="container mx-auto flex items-center justify-between h-16 ">
                <div>
                    <MobileNav sidebarNavItems={[]} />
                    <MainNav items={[]} />
                </div>
                <LocalSelecter />
            </div>
        </header>
    );
}
