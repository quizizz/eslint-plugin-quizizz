const utils = require('../utils');

module.exports = {
  meta: {
    type: 'problem',
    fixable: 'code',
    docs: {
      description: 'Disallow the use of the variable references inside of `<nuxt-link />`.',
      category: 'Possible Errors'
    },
    schema: []
  },
  create(context) {
    return utils.defineTemplateBodyVisitor(context, {
      VExpressionContainer(node) {
        if (node.parent.name === 'nuxt-link') {
          context.report({
            node,
            loc: node.loc,
            message: 'Do not use nuxt-link. Consider using <QLink /> instead',
          });
        }
      }
    })
  },
}