import type {BlockFC, BlockProps, IBlock, IBlockAttributes} from '@headstartwp/core/react';

import { useBlock} from "@headstartwp/core/react";
import {isBlockByName} from "@headstartwp/core";

export interface MenuButtonBlockProps extends IBlockAttributes {
    displaySecondaryButton: boolean;
    isOutlinePrimaryButton: boolean;
    primaryButtonText: string;
    primaryButtonUrl: string;
    secondaryButtonText: string;
    secondaryButtonUrl: string;
}

export interface IMenuButtonsBlock extends IBlock<MenuButtonBlockProps> {}

export const MenuButton = ({domNode: node , children,  }: Omit<IMenuButtonsBlock, 'component'>) => {
    const { name, className, attributes } = useBlock<MenuButtonBlockProps>(node);
    const {
        displaySecondaryButton = false,
        isOutlinePrimaryButton = false,
        primaryButtonText = '',
        primaryButtonUrl = '',
        secondaryButtonText = '',
        secondaryButtonUrl = '',
    } = attributes;

    return (
        <div className={className} >
            {displaySecondaryButton && (
                <a
                    href={secondaryButtonUrl}
                    className="secondary-button"
                    type="button"
                >
                    {secondaryButtonText}
                </a>
            )}
            <a
                href={primaryButtonUrl}
                className={
                    isOutlinePrimaryButton
                        ? 'outline-button'
                        : 'primary-button'
                }
                type="button"
            >
                {primaryButtonText}
            </a>
        </div>
    );
};

MenuButton.test = (node: any) => isBlockByName(node, 'shohag/menu-button');
