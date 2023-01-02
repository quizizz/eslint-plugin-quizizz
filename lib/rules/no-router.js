module.exports = {
  meta: {
    type: 'problem',
    fixable: 'code',
    docs: {
      description: 'Disallow the use of nuxt\'s default router',
      category: 'Possible Errors'
    },
    schema: []
  },
  create(context) {
    return {
      TemplateLiteral(node) {
        if (node.parent.callee.property.name === '$router') {
          context.report({
            node,
            loc: node.loc,
            message: 'Use of nuxt router is not allowed, consider using $qRouter instead',
          });
        }
      }
    }
  }
};