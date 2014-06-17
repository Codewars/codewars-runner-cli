module.exports = {
    testFramework: {
        defaults: {
            javascript: 'cw-2',
            coffeescript: 'cw-2',
            ruby: 'cw-2',
            python: 'unittest'
        }
    },
    timeouts: {
        javascript: 5000,
        coffeescript: 5000,
        ruby: 5000,
        python: 5000
    },
    snippets: {
        javascript: {
            requireCw2: "require('./frameworks/javascript/cw-2')\n",
            inlineTestFixture: {
                start: "(function() { var Test = this.Test, describe = this.describe, it = this.it, before = this.before, after = this.after;try{\n",
                end: '\n}catch(ex){Test.handleError(ex); throw ex;}})();'
            }
        }
    }
};