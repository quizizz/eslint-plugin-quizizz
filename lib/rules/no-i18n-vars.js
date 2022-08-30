const utils = require('../utils');

module.exports = {
  meta: {
    type: 'problem',
    fixable: 'code',
    docs: {
      description: 'Disallow the use of the variable references inside of `<i18n />`.',
      category: 'Possible Errors'
    },
    schema: []
  },
  create (context) {
    return utils.defineTemplateBodyVisitor(context, {
         VExpressionContainer(node) {
        if (node.parent.name === 'i18n') {
          context.report({
            node,
            loc: node.loc,
            message: 'Do not use variable references inside i18n components',
          });
        }
      }
    })
  },
}