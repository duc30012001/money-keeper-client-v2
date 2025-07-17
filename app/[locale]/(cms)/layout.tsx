'use client';

import AppLocale from '@/components/app-locale';
import { appConfig } from '@/constants/app';
import { SIDEBAR_ITEMS } from '@/enums/routes';
import { Link, usePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { ProConfigProvider, ProLayout } from '@ant-design/pro-components';
import { Avatar, ConfigProvider, Dropdown } from 'antd';
import { AvatarProps } from 'antd/lib';
import { LogOut, PanelLeft } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { ReactNode, useState } from 'react';

export default function CMSLayout({ children }: { children: React.ReactNode }) {
    const [collapsed, setCollapsed] = useState(false);
    const messages = useTranslations();

    const { data: session } = useSession();
    const email = session?.user?.email || 'u';

    const items = SIDEBAR_ITEMS.map((item) => ({
        key: item.href,
        icon: <item.icon />,
        name: messages(item.name),
        path: item.href,
    }));

    const pathname = usePathname();

    const renderAvatar = (props: AvatarProps, dom: ReactNode) => (
        <Dropdown
            trigger={['click']}
            menu={{
                onClick: (info) => {
                    if (info.key === 'logout') {
                        signOut();
                    }
                },
                items: [
                    {
                        label: (
                            <div className="flex max-w-xs items-center text-base">
                                <Avatar
                                    size={40}
                                    className={cn(
                                        'flex-none cursor-pointer',
                                        props.className
                                    )}
                                >
                                    {props.icon}
                                </Avatar>
                                <div className="ml-3 truncate">
                                    <p className="truncate">{email}</p>
                                </div>
                            </div>
                        ),
                        key: '1',
                    },
                    {
                        type: 'divider',
                    },
                    {
                        key: 'logout',
                        icon: <LogOut />,
                        label: 'Logout',
                    },
                ],
            }}
        >
            {dom}
        </Dropdown>
    );

    return (
        <div id="antd-pro-layout" className="h-screen overflow-auto">
            <ProConfigProvider hashed={false}>
                <ConfigProvider
                    getTargetContainer={() => {
                        return (
                            document.getElementById('antd-pro-layout') ||
                            document.body
                        );
                    }}
                >
                    <ProLayout
                        layout="mix"
                        logo={appConfig.logo}
                        title={appConfig.title}
                        fixSiderbar
                        collapsed={collapsed}
                        onCollapse={setCollapsed}
                        collapsedButtonRender={false}
                        headerContentRender={() => {
                            return (
                                <div
                                    className="hidden w-fit cursor-pointer rounded-lg p-2 hover:bg-gray-100 md:block"
                                    onClick={() => setCollapsed(!collapsed)}
                                >
                                    <PanelLeft />
                                </div>
                            );
                        }}
                        location={{
                            pathname,
                        }}
                        route={{
                            routes: items,
                        }}
                        menuItemRender={(item, dom) => (
                            <Link href={item.path || '#'}>{dom}</Link>
                        )}
                        actionsRender={() => [
                            // <Button type="primary" key={'create-transaction'}>
                            //     {messages('transaction.create')}
                            // </Button>,
                            <AppLocale key="app-locale" />,
                        ]}
                        avatarProps={{
                            className: '!bg-orange-500',
                            icon: email[0].toUpperCase(),
                            render: renderAvatar,
                        }}
                    >
                        {children}
                    </ProLayout>
                </ConfigProvider>
            </ProConfigProvider>
        </div>
    );
}
