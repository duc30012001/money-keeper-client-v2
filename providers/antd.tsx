'use client';

import { Locale } from '@/enums/locale';
import { useLocale } from '@/hooks/use-locale';
import { ConfigProvider } from 'antd';
import enUS from 'antd/locale/en_US';
import viVN from 'antd/locale/vi_VN';
import { PropsWithChildren } from 'react';

function AntdProvider({ children }: PropsWithChildren) {
    const { locale } = useLocale();
    return (
        <ConfigProvider locale={locale === Locale.VI ? viVN : enUS}>
            {children}
        </ConfigProvider>
    );
}

export default AntdProvider;
