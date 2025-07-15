'use client';

import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Button } from 'antd';

export default function CategoryPage() {
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
            title="Categories"
        >
            <ProCard>
                <div />
            </ProCard>
        </PageContainer>
    );
}
