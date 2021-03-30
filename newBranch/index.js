module.exports = async function (context, req) {

    if (! req.body) {
        context.res = {
            status: 404,
            body: "You must set the body"
        };
    }

    const branchName = req.body.branchName;

    if (! branchName) {
        context.res = {
            status: 404,
            body: "You must pick a branch name"
        };

        return;
    } 

    context.res = {
        body: "new branch " + branchName + " added!"
    };
}