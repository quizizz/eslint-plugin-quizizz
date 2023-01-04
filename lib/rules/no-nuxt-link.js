const utils = require('../utils');

module.exports = {
  meta: {
    type: 'problem',
    fixable: 'code',
    docs: {
      description: 'Disallow the use `nuxt-link` component.',
      category: 'Possible Errors',
    },
    schema: [],
    messages: {
      qLinkError: 'Do not use nuxt-link, use QLink instead',
    },
  },
  create(context) {
    return utils.defineTemplateBodyVisitor(context, {
      VElement(node) {
        if (node.type === 'VElement' && node.name === 'nuxt-link') {
          context.report({
            node,
            loc: node.loc,
            messageId: 'qLinkError',
          });
        }
      },
    });
  },
};
