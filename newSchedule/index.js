module.exports = async function (context, req) {
    if (!req.body) {
        context.res = {
            status: 404,
            body: "You must set the body"
        };
    }

    const name = req.body.name;
    const email = req.body.email;
    const date = req.body.date;

    if (!name) {
        context.res = {
            status: 404,
            body: "You must pick a name"
        };

        return;
    }

    if (!email) {
        context.res = {
            status: 404,
            body: "You must pick a email"
        };

        return;
    }

    if (!date) {
        context.res = {
            status: 404,
            body: "You must pick date"
        };

        return;
    }

    context.res = {
        body: "new schedule " + name + " " + email + " " + date + " added!"
    };
}