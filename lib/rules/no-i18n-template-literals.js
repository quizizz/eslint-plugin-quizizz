module.exports = {
	meta: {
		type: 'problem',
		fixable: 'code',
		docs: {
			description: 'Disallow the use of the template literals inside of `$i18n()`.',
			category: 'Possible Errors'
		},
		messages: {
			i18nTemplateLiteralError: 'Do not use template literals inside of `$i18n()`. Use injections, for example: $i18n(\'Hello, ${1}\', this.name)'
		},
		schema: []
	},
	create(context) {
		return {
			CallExpression(node) {
				if (node.callee.type === 'MemberExpression' && node.callee.property.name === '$i18n') {
					if (node.arguments.length > 0 && node.arguments[0].type === "TemplateLiteral") {
						context.report({
							node: node.arguments[1],
							loc: node.loc,
							messageId: 'i18nTemplateLiteralError'
						});
					}
				}
			}
		};
	}
};
