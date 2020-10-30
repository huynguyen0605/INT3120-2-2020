function createJson(status, errMsg, data, errCode) {
    if (errCode && errMsg) {
        return { s: status, errcode: errCode, errmsg: errMsg, d: data };
    } else if (errCode && !errMsg) {
        return { s: status, errcode: errCode, d: data };
    } else if (!errCode && errMsg) {
        return { s: status, errmsg: errMsg, d: data };
    } else {
        return { s: status, d: data };
    }
};
module.exports = {
    errWithCode: function (status, errmsg) {
        return createJson(status, status + '#' + errmsg);
    },
    errServer: function (err, errmsg = sails.__('serverError')) {
        return createJson("error", errmsg, err);
    },
    success: function (data) {
        return createJson("ok", null, data);
    },
    errBusiness: function (errcode, errmsg, data) {
        return createJson("error", errcode + '#' + errmsg, data, errcode);
    },
};
