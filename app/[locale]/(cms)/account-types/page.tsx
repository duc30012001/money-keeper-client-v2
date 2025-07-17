'use client';

import { CreateButton } from '@/components/ui/button/create-button';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { useTranslations } from 'next-intl';

export default function AccountTypesPage() {
    const messages = useTranslations();

    return (
        <PageContainer
            extra={[<CreateButton key={'create'} />]}
            title={messages('accountType.title')}
        >
            <ProCard>
                <div />
            </ProCard>
        </PageContainer>
    );
}
