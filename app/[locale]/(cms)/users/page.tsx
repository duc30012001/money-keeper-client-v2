'use client';

import { CreateButton } from '@/components/ui/button/create-button';
import { EditButton } from '@/components/ui/button/edit-button';
import { Screen } from '@/enums/common';
import { formatDate, formatNumber } from '@/lib/format';
import { useUpdateUser, useUsersList } from '@/modules/user/hooks/use-users';
import { User } from '@/modules/user/types/user';
import {
    PageContainer,
    ProColumns,
    ProTable,
} from '@ant-design/pro-components';
import { Switch } from 'antd';
import { useTranslations } from 'next-intl';

export default function UsersPage() {
    const messages = useTranslations();

    const { data, isFetching, refetch } = useUsersList({});
    const updateMutation = useUpdateUser();

    const onActiveChange = (id: string, isActive: boolean) => {
        updateMutation.mutateAsync({
            id,
            data: {
                isActive,
            },
        });
    };

    const columns: ProColumns<User>[] = [
        {
            title: messages('user.email'),
            dataIndex: 'email',
            copyable: true,
            ellipsis: true,
            width: 350,
        },
        {
            title: messages('user.role.title'),
            dataIndex: 'role',
            width: 150,
        },
        {
            title: messages('status.title'),
            dataIndex: 'status',
            width: 150,
            render: (_, record) => (
                <Switch
                    checked={record.isActive}
                    onChange={(checked) => onActiveChange(record.id, checked)}
                />
            ),
        },
        {
            title: messages('common.createdAt'),
            dataIndex: 'createdAt',
            width: 150,
            render: (_, record) => formatDate(record.createdAt),
        },
        {
            title: messages('common.updatedAt'),
            dataIndex: 'updatedAt',
            width: 150,
            render: (_, record) => formatDate(record.updatedAt),
        },
        {
            dataIndex: 'action',
            width: 100,
            render: () => {
                return [<EditButton key={'edit'} />];
            },
        },
    ];

    return (
        <PageContainer
            token={{
                paddingBlockPageContainerContent: 10,
                paddingInlinePageContainerContent: 20,
            }}
        >
            <ProTable<User>
                search={false}
                columns={columns}
                columnsState={{
                    onChange(value) {
                        console.log('value: ', value);
                    },
                }}
                rowKey="id"
                toolbar={{
                    actions: [<CreateButton key={'create'} />],
                }}
                dataSource={data?.data}
                loading={isFetching}
                options={{
                    search: {
                        placeholder: messages('common.search'),
                    },
                    fullScreen: true,
                    reload: () => refetch(),
                }}
                scroll={{
                    x: Screen.XL,
                }}
                pagination={{
                    current: data?.meta?.page,
                    hideOnSinglePage: true,
                    pageSize: data?.meta?.pageSize,
                    total: data?.meta?.total,
                    showTotal: (total, [from, to]) =>
                        messages('table.showTotal', {
                            from: formatNumber(from),
                            to: formatNumber(to),
                            total: formatNumber(total),
                        }),
                }}
            />
        </PageContainer>
    );
}
