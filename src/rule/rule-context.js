// LICENSE : MIT
'use strict';
const RuleError = require('./rule-error');
function RuleContext(ruleId, textLint, textLintConfig) {
    Object.defineProperty(this, 'id', {value: ruleId});
    Object.defineProperty(this, 'config', {value: textLintConfig});
    /**
     *
     * @param {TxtNode} node
     * @param {RuleError} error
     */
    this.report = function (node, error) {
        textLint.pushReport(ruleId, node, error);
    };
    // Const Values
    Object.defineProperty(this, 'Syntax', {
        get(){
            return textLint.getSyntax();
        }
    });
    /** {@link textLint.getSource} */
    this.getSource = textLint.getSource.bind(textLint);
    // CustomError object
    this.RuleError = RuleError;
}
module.exports = RuleContext;