'use client';

import AppLocale from '@/components/app-locale';
import { appConfig } from '@/constants/app';
import { ICON_SIZE } from '@/constants/common';
import { SIDEBAR_ITEMS } from '@/enums/routes';
import { Link, usePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { ProConfigProvider, ProLayout } from '@ant-design/pro-components';
import { Avatar, ConfigProvider, Dropdown } from 'antd';
import { LogOut } from 'lucide-react';
import { useState } from 'react';

export default function CMSLayout({ children }: { children: React.ReactNode }) {
    const [collapsed, setCollapsed] = useState(false);

    const items = SIDEBAR_ITEMS.map((item) => ({
        key: item.href,
        icon: <item.icon size={ICON_SIZE} />,
        name: item.title,
        path: item.href,
    }));

    const pathname = usePathname();

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
                        location={{
                            pathname,
                        }}
                        route={{
                            routes: items,
                        }}
                        menuItemRender={(item, dom) => (
                            <Link href={item.path || '#'}>{dom}</Link>
                        )}
                        actionsRender={() => [<AppLocale key="app-locale" />]}
                        avatarProps={{
                            className: '!bg-orange-500',
                            icon: 'VD',
                            render: (props, dom) => {
                                return (
                                    <Dropdown
                                        trigger={['click']}
                                        menu={{
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
                                                                <p className="truncate">
                                                                    Viet Duc
                                                                </p>
                                                                <p className="truncate text-sm text-gray-400">
                                                                    nguyenvietduc3001@gmail.com
                                                                </p>
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
                                                    icon: (
                                                        <LogOut
                                                            size={ICON_SIZE}
                                                        />
                                                    ),
                                                    label: 'Logout',
                                                },
                                            ],
                                        }}
                                    >
                                        {dom}
                                    </Dropdown>
                                );
                            },
                        }}
                    >
                        {children}
                    </ProLayout>
                </ConfigProvider>
            </ProConfigProvider>
        </div>
    );
}
