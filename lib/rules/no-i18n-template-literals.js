module.exports = {
	meta: {
    type: 'problem',
    fixable: 'code',
    docs: {
      description: 'Disallow the use of the template literals inside of `$i18n()`.',
      category: 'Possible Errors'
    },
    schema: []
  },
	create (context) {
		return { 
			TemplateLiteral(node) {
				if (node.parent.callee.property.name === '$i18n') {
					context.report({
						node,
						loc: node.loc,
						message: 'Do not use template literals inside $i18n calls',
					});
				}
			}
		}
	}
};
