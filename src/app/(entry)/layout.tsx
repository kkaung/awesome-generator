import { PropsWithChildren } from 'react';

import SiteFooter from '@/components/layouts/site-footer';
import SiteHeader from '@/components/layouts/site-header';

export default function Layotu({ children }: PropsWithChildren) {
    return (
        <>
            <SiteHeader />
            <main className="container mx-auto">{children}</main>
            <SiteFooter />
        </>
    );
}
