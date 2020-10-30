const dummy = require('../const/dummy');
module.exports = {
    description: 'Get recommended for client.',

    inputs: {

    },
    exits: require('../utils/ExitSignalsUtils').exitsignals,
    fn: async function (inputs, exits) {
        exits.success(dummy.tests);
    },
};
