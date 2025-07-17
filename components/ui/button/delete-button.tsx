import { Button, ButtonProps, Tooltip, TooltipProps } from 'antd';
import { Trash2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface Props extends ButtonProps {
    tooltipProps?: TooltipProps;
}

export function DeleteButton({ tooltipProps, ...props }: Props) {
    const messages = useTranslations();
    return (
        <Tooltip title={messages('common.delete')} {...tooltipProps}>
            <Button type="text" icon={<Trash2 />} {...props} />
        </Tooltip>
    );
}
