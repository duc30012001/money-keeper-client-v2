'use client';

import { PageContainer, ProCard } from '@ant-design/pro-components';
import { DatePicker } from 'antd';

export default function DashboardPage() {
    return (
        <PageContainer
            token={
                {
                    // paddingInlinePageContainerContent: 25,
                }
            }
            extra={[<DatePicker.RangePicker key={'1'} />]}
            title="Dashboard"
        >
            <ProCard>
                <div />
            </ProCard>
        </PageContainer>
    );
}
