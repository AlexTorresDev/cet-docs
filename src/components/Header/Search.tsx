/** @jsxImportSource react */
import { useState, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';

import * as docSearchReact from '@docsearch/react';
import '@docsearch/css';
import { ALGOLIA } from '../../consts';

/** FIXME: This is still kinda nasty, but DocSearch is not ESM ready. */
const DocSearchModal =
	docSearchReact.DocSearchModal || (docSearchReact as any).default.DocSearchModal;
const useDocSearchKeyboardEvents =
	docSearchReact.useDocSearchKeyboardEvents ||
	(docSearchReact as any).default.useDocSearchKeyboardEvents;

export default function Search({ isMobile = false }) {
	const [isOpen, setIsOpen] = useState(false);
	const searchButtonRef = useRef<HTMLButtonElement>(null);
	const [initialQuery, setInitialQuery] = useState('');

	const onOpen = useCallback(() => {
		setIsOpen(true);
	}, [setIsOpen]);

	const onClose = useCallback(() => {
		setIsOpen(false);
	}, [setIsOpen]);

	const onInput = useCallback(
		(e) => {
			setIsOpen(true);
			setInitialQuery(e.key);
		},
		[setIsOpen, setInitialQuery]
	);

	useDocSearchKeyboardEvents({
		isOpen,
		onOpen,
		onClose,
		onInput,
		searchButtonRef,
	});

	return (
		<>
			<button type="button" ref={searchButtonRef} onClick={onOpen} className={`items-center gap-3 input h-10 p-2 w-60 ${isMobile ? 'flex md:hidden bg-base-100 m-auto' : 'hidden md:flex bg-base-200'} focus:outline-none`}>
				<span>🔍</span>
				<span className='flex-1 text-left'>Search</span>
				<span>
					<span className="sr-only">Press </span>
					<kbd className="kbd min-h-min min-w-min">/</kbd>
					<span className="sr-only"> to search</span>
				</span>
			</button>

			{isOpen &&
				createPortal(
					<DocSearchModal
						initialQuery={initialQuery}
						initialScrollY={window.scrollY}
						onClose={onClose}
						indexName={ALGOLIA.indexName}
						appId={ALGOLIA.appId}
						apiKey={ALGOLIA.apiKey}
						transformItems={(items) => {
							return items.map((item) => {
								// We transform the absolute URL into a relative URL to
								// work better on localhost, preview URLS.
								const a = document.createElement('a');
								a.href = item.url;
								const hash = a.hash === '#overview' ? '' : a.hash;
								return {
									...item,
									url: `${a.pathname}${hash}`,
								};
							});
						}}
					/>,
					document.body
				)}
		</>
	);
}
