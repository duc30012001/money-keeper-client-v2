'use client';

import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Button } from 'antd';

export default function AccountTypePage() {
    return (
        <PageContainer
            token={
                {
                    // paddingInlinePageContainerContent: 25,
                }
            }
            extra={[
                <Button key={'1'} type="primary">
                    Create
                </Button>,
            ]}
            title="Account Types"
        >
            <ProCard>
                <div />
            </ProCard>
        </PageContainer>
    );
}
