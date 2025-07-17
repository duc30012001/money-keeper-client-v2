'use client';

import { CreateButton } from '@/components/ui/button/create-button';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { useTranslations } from 'next-intl';

export default function DashboardPage() {
    const messages = useTranslations();

    return (
        <PageContainer
            extra={[<CreateButton key={'create'} />]}
            title={messages('dashboard.title')}
        >
            <ProCard>
                <div />
            </ProCard>
        </PageContainer>
    );
}
