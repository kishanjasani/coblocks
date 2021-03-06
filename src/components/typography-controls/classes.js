/**
 * Set inline CSS classes.
 *
 * @param {Object} props The passed props.
 * @return {Array} The classes.
 */
function TypograpyClasses( props ) {
	return [
		{ 'has-text-color': props.attributes.textColor || props.attributes.customTextColor },
	];
}

export default TypograpyClasses;
