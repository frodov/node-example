module.exports = async function (context) {
    const schedule = [
        { 
            id: 1, name: 'foo', email: "foo@gmail.com", scheduledDate: [
                { date: "2021-07-15", hour: "17:30" }
            ]
        },
        { 
            id: 2, name: 'bar', email: "jose@gmail.com", scheduledDate: [
                { date: "2021-01-11", hour: "15:30" }
            ] 
        },
        { 
            id: 3, name: 'baz', email: "sofia@gmail.com", scheduledDate: [
                { date: "2021-12-15", hour: "11:30" }
            ] 
        },
    ]

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: schedule
    };
}