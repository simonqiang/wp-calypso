/**
 * External dependencies
 */
import { fromJS } from 'immutable';
import mapValues from 'lodash/object/mapValues';
import pick from 'lodash/object/pick';

/**
 * Internal dependencies
 */
import { action as ActionTypes } from 'lib/invites/constants';
import { decodeEntities } from 'lib/formatting';

const initialState = fromJS( {
	list: {},
	errors: {}
} );

function filterObject( object ) {
	return mapValues( object, value => {
		if ( 'object' === typeof value ) {
			return filterObject( value );
		}

		return value ? decodeEntities( value ) : value;
	} );
}

function filterInvite( invite ) {
	return mapValues( pick( invite, [ 'invite', 'inviter', 'blog_details' ] ), filterObject );
}

const reducer = ( state = initialState, payload ) => {
	const { action } = payload;
	switch ( action.type ) {
		case ActionTypes.RECEIVE_INVITE:
			return state.setIn( [ 'list', action.siteId, action.inviteKey ], filterInvite( action.data ) );
		case ActionTypes.RECEIVE_INVITE_ERROR:
			return state.setIn( [ 'errors', action.siteId, action.inviteKey ], action.error );
	}
	return state;
 }

export { initialState, reducer };
