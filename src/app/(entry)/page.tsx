import React from 'react';

import Hero from '@/components/hero';
import FAQS from '@/components/faqs';
import CreditCardGeneratorForm from '@/components/forms/credit-card-generator-form';

export default function Page() {
    return (
        <div className="py-6 space-y-12">
            <Hero />
            <CreditCardGeneratorForm />
            <div>
                <h1 className="text-xl font-normal mb-3">
                    What is a Credit Card Generator?
                </h1>
                <p>
                    A Credit Card Generator is an online tool or software that
                    creates random credit card numbers for testing and
                    verification purposes. These generated numbers are not
                    linked to real bank accounts and are used to test payment
                    systems, validate online forms, and perform software testing
                    without using actual financial data.
                </p>
            </div>
            <FAQS />
        </div>
    );
}
