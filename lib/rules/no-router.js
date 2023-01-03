module.exports = {
  meta: {
    type: 'problem',
    fixable: 'code',
    docs: {
      description: 'Unexpected use of "$router" method call',
      category: 'Possible Errors'
    },
    schema: [],
    messages: {
      routerError: 'Unexpected use of "$router" method call. Use "$qRouter" instead.',
    }
  },
  create(context) {
    return {
      CallExpression(node) {
        if (node.callee.type === 'MemberExpression' && node.callee.object && node.callee.object.type === 'MemberExpression' && node.callee.object.property && node.callee.object.property.name === '$router') {
          context.report({
            node,
            loc: node.loc,
            messageId: 'routerError',
          });
        }
      }
    }
  }
};