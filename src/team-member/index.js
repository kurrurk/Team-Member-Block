import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockType( 'create-block/team-member', {
	title: __( 'Team Member', 'team-member' ),
	description: __( 'A team member item', 'team-member' ),
	icon: 'admin-users',
	parent: [ 'create-block/team-members' ],
	edit: () => <p>Edit</p>,
	save: () => <p>Save</p>,
} );
