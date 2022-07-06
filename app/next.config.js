const removeImports = require("next-remove-imports")();
module.exports = removeImports({
    experimental: { esmExternals: true },
    env: {
        REACT_APP_ALG_SERVER: process.env.REACT_APP_ALG_SERVER,
    },
});