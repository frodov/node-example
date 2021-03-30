module.exports = async function (context) {

    const branchs = [
        { id: 1, name: 'freddy', email: 'freddy@gmail.com' },
        { id: 2, name: 'maria', email: 'maria@gmail.com' },
        { id: 3, name: 'pepe', email: 'pepe@gmail.com' },
        { id: 4, name: 'francisco', email: 'francisco@gmail.com' },
    ]

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: branchs
    };
}