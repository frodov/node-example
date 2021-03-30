module.exports = async function (context) {

    const branchs = [
        { id: 1, name: 'foo' },
        { id: 2, name: 'bar' },
        { id: 3, name: 'baz' },
    ]

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: branchs
    };
}