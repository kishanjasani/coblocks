/**
 * External dependencies
 */
import { registerCoreBlocks } from '@wordpress/block-library';
import { createBlock, switchToBlockType } from '@wordpress/blocks';

registerCoreBlocks();

/**
 * Internal dependencies.
 */
import * as helpers from '../../../../.dev/tests/jest/helpers';
import { name } from '../index';

describe( 'coblocks/gallery-collage transforms', () => {
	// Shared attributes
	const attributes = {
		images: [
			{ index: 0, url: 'https://s.w.org/images/core/5.3/Windbuchencom.jpg' },
			{ index: 1, url: 'https://s.w.org/images/core/5.3/Glacial_lakes,_Bhutan.jpg' },
		] };

	beforeAll( () => {
		// Register all gallery blocks.
		helpers.registerGalleryBlocks();
	} );

	it( 'should transform from coblocks/gallery-stacked block', () => {
		const galleryStacked = createBlock( 'coblocks/gallery-stacked',	attributes );
		const transformed = switchToBlockType( galleryStacked, name );

		expect( transformed[ 0 ].isValid ).toBe( true );
		for ( let i = 0; i < attributes.images.length; i++ ) {
			expect( transformed[ 0 ].attributes.images[ i ].index ).toBe( attributes.images[ i ].index );
			expect( transformed[ 0 ].attributes.images[ i ].url ).toBe( attributes.images[ i ].url );
		}
	} );

	it( 'should transform from coblocks/gallery-masonry block', () => {
		const galleryMasonry = createBlock( 'coblocks/gallery-masonry', attributes );
		const transformed = switchToBlockType( galleryMasonry, name );

		expect( transformed[ 0 ].isValid ).toBe( true );
		for ( let i = 0; i < attributes.images.length; i++ ) {
			expect( transformed[ 0 ].attributes.images[ i ].index ).toBe( attributes.images[ i ].index );
			expect( transformed[ 0 ].attributes.images[ i ].url ).toBe( attributes.images[ i ].url );
		}
	} );

	it( 'should transform from coblocks/gallery-offset block', () => {
		const galleryOffset = createBlock( 'coblocks/gallery-offset', attributes );
		const transformed = switchToBlockType( galleryOffset, name );

		expect( transformed[ 0 ].isValid ).toBe( true );
		for ( let i = 0; i < attributes.images.length; i++ ) {
			expect( transformed[ 0 ].attributes.images[ i ].index ).toBe( attributes.images[ i ].index );
			expect( transformed[ 0 ].attributes.images[ i ].url ).toBe( attributes.images[ i ].url );
		}
	} );

	it( 'should transform from coblocks/gallery-carousel block', () => {
		const galleryCollage = createBlock( 'coblocks/gallery-carousel', attributes );
		const transformed = switchToBlockType( galleryCollage, name );

		expect( transformed[ 0 ].isValid ).toBe( true );
		for ( let i = 0; i < attributes.images.length; i++ ) {
			expect( transformed[ 0 ].attributes.images[ i ].index ).toBe( attributes.images[ i ].index );
			expect( transformed[ 0 ].attributes.images[ i ].url ).toBe( attributes.images[ i ].url );
		}
	} );

	it( 'should transform from core/gallery block', () => {
		const coreGallery = createBlock( 'core/gallery', { images: attributes.images } );
		const transformed = switchToBlockType( coreGallery, name );

		expect( transformed[ 0 ].isValid ).toBe( true );
		for ( let i = 0; i < attributes.images.length; i++ ) {
			expect( transformed[ 0 ].attributes.images[ i ].index ).toBe( attributes.images[ i ].index );
			expect( transformed[ 0 ].attributes.images[ i ].url ).toBe( attributes.images[ i ].url );
		}
	} );

	it( 'should transform from core/image block', () => {
		const coreImage = createBlock( 'core/image', { id: attributes.images[ 0 ].index, url: attributes.images[ 0 ].url } );
		const transformed = switchToBlockType( coreImage, name );

		expect( transformed[ 0 ].isValid ).toBe( true );
		expect( transformed[ 0 ].attributes.images.length ).toBeGreaterThan( 0 );

		expect( transformed[ 0 ].attributes.images[ 0 ].index ).toBe( coreImage.attributes.id );
		expect( transformed[ 0 ].attributes.images[ 0 ].url ).toBe( coreImage.attributes.url );
	} );

	it( 'should transform to coblocks/gallery-stacked block', () => {
		const block = createBlock( name, attributes );
		const transformed = switchToBlockType( block, 'coblocks/gallery-stacked' );

		expect( transformed[ 0 ].isValid ).toBe( true );
		for ( let i = 0; i < attributes.images.length; i++ ) {
			expect( transformed[ 0 ].attributes.images[ i ].index ).toBe( attributes.images[ i ].index );
			expect( transformed[ 0 ].attributes.images[ i ].url ).toBe( attributes.images[ i ].url );
		}
	} );

	it( 'should transform to coblocks/gallery-masonry block', () => {
		const block = createBlock( name, attributes );
		const transformed = switchToBlockType( block, 'coblocks/gallery-masonry' );

		expect( transformed[ 0 ].isValid ).toBe( true );
		for ( let i = 0; i < attributes.images.length; i++ ) {
			expect( transformed[ 0 ].attributes.images[ i ].index ).toBe( attributes.images[ i ].index );
			expect( transformed[ 0 ].attributes.images[ i ].url ).toBe( attributes.images[ i ].url );
		}
	} );

	it( 'should transform to coblocks/gallery-offset block', () => {
		const block = createBlock( name, attributes );
		const transformed = switchToBlockType( block, 'coblocks/gallery-offset' );

		expect( transformed[ 0 ].isValid ).toBe( true );
		for ( let i = 0; i < attributes.images.length; i++ ) {
			expect( transformed[ 0 ].attributes.images[ i ].index ).toBe( attributes.images[ i ].index );
			expect( transformed[ 0 ].attributes.images[ i ].url ).toBe( attributes.images[ i ].url );
		}
	} );

	it( 'should transform to coblocks/gallery-carousel block', () => {
		const block = createBlock( name, attributes );
		const transformed = switchToBlockType( block, 'coblocks/gallery-carousel' );

		expect( transformed[ 0 ].isValid ).toBe( true );
		for ( let i = 0; i < attributes.images.length; i++ ) {
			expect( transformed[ 0 ].attributes.images[ i ].index ).toBe( attributes.images[ i ].index );
			expect( transformed[ 0 ].attributes.images[ i ].url ).toBe( attributes.images[ i ].url );
		}
	} );

	it( 'should transform to core/gallery block', () => {
		const block = createBlock( name, attributes );
		const transformed = switchToBlockType( block, 'core/gallery' );

		expect( transformed[ 0 ].isValid ).toBe( true );
		for ( let i = 0; i < attributes.images.length; i++ ) {
			expect( transformed[ 0 ].attributes.images[ i ].index ).toBe( attributes.images[ i ].index );
			expect( transformed[ 0 ].attributes.images[ i ].url ).toBe( attributes.images[ i ].url );
		}
	} );

	it( 'should transform when ":collage" prefix is seen', () => {
		const prefix = ':collage';
		const block = helpers.performPrefixTransformation( name, prefix, prefix );
		expect( block.isValid ).toBe( true );
		expect( block.name ).toBe( name );
	} );
} );
