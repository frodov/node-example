module.exports = async function (context, req) {
    if (!req.body) {
        context.res = {
            status: 404,
            body: "You must set the body"
        };
    }

    const employeeName = req.body.employeeName;
    const employeeEmail = req.body.employeeEmail;

    if (!employeeName) {
        context.res = {
            status: 404,
            body: "You must pick an employee name"
        };

        return;
    }

    if (!employeeEmail) {
        context.res = {
            status: 404,
            body: "You must pick an employee email"
        };

        return;
    }

    context.res = {
        body: "new employee " + employeeName + " " + employeeEmail + " added!"
    };
}