'use client';

import React, { useTransition } from 'react';

import { creditCardSchema } from '@/lib/validations/credit-card';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';

type Inputs = z.infer<typeof creditCardSchema>;

export default function CreditCardGeneratorForm() {
    const [isPending, startTransition] = useTransition();

    const form = useForm<Inputs>({
        resolver: zodResolver(creditCardSchema),
        defaultValues: {},
    });

    const onSubmit = () => {
        startTransition(async () => {});
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="brand"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Brand</FormLabel>
                            <FormControl>
                                <Input type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={isPending}>
                    {isPending && (
                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Generate
                    <span className="sr-only">Generate</span>
                </Button>
            </form>
        </Form>
    );
}
