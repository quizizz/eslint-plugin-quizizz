const utils = require('../utils');

module.exports = {
  meta: {
    type: 'problem',
    fixable: 'code',
    docs: {
      description: 'Disallow the use of the variable references inside of `<i18n />`.',
      category: 'Possible Errors',
    },
    schema: [],
    messages: {
      i18nVarError: 'Do not use variable references inside of <i18n />. Consider using injections instead. Example: <i18n :injections="getName">Hello, {$1}</i18n>',
    },
  },
  create(context) {
    return utils.defineTemplateBodyVisitor(context, {
      VExpressionContainer(node) {
        if (node.parent.name === 'i18n') {
          context.report({
            node,
            loc: node.loc,
            messageId: 'i18nVarError',
          });
        }
      },
    });
  },
};
