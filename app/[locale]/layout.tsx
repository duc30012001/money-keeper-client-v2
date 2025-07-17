import { routing } from '@/i18n/routing';
import AntdProvider from '@/providers/antd';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    // Ensure that the incoming `locale` is valid
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider>
                    <AntdProvider>
                        <NuqsAdapter>{children}</NuqsAdapter>
                    </AntdProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
