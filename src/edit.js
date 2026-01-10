//import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<div { ...useBlockProps() }>
			<InnerBlocks
				allowedBlocks={ [ 'create-block/team-member' ] }
				template={ [
					[ 'create-block/team-member' ],
					[ 'create-block/team-member' ],
					[ 'create-block/team-member' ],
				] }
				templateLock="insert"
			/>
		</div>
	);
}
