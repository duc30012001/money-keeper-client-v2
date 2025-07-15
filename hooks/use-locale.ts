'use client';

import { Locale } from '@/enums/locale';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale as useLocaleIntl } from 'next-intl';
import { useQueryParams } from './use-query-params';

export const useLocale = () => {
    const locale = useLocaleIntl() as Locale;
    const router = useRouter();
    const pathname = usePathname();
    const queryParams = useQueryParams();

    const switchLocale = (value: Locale) => {
        router.replace({ pathname, query: queryParams }, { locale: value });
    };

    return {
        locale,
        switchLocale,
    };
};
