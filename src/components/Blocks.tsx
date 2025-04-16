import {BlocksRenderer, GroupBlock} from '@headstartwp/core/react';
import React from 'react';
import type { HeadlessConfig } from '@headstartwp/core';
import { isBlockByName } from '@headstartwp/core';
import { ImageBlock, LinkBlock, queryAppSettings, TwitterBlock } from '@headstartwp/next/app';
import { PostList } from './Blocks/PostList';
import {MenuButton} from "./Blocks/MenuButton";

type BlocksRendererProps = {
	html: string;
	settings: HeadlessConfig;
};

const Blocks: React.FC<BlocksRendererProps> = async ({ html, settings }) => {
	const { data } = await queryAppSettings();

	return (
		<BlocksRenderer
			forwardBlockAttributes
			html={html}
			settings={settings}
			blockContext={{ themeJSON: data['theme.json'].settings }}
		>
			<ImageBlock />
			<PostList test={(node) => isBlockByName(node, 'core/query')} />
			<TwitterBlock />
			<LinkBlock />
			<MenuButton test={(node) => isBlockByName(node, 'shohag/menu-button')} />
		</BlocksRenderer>
	);
};

export default Blocks;
