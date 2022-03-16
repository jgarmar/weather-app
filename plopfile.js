module.exports = function (plop) {
    plop.setGenerator('component', {
        description: 'React component using Typescript',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Name: '
            },

        ],
        actions: [
            {
                type: 'addMany',
                destination: 'src/components/{{name}}',
                templateFiles: 'templates/component/*.hbs',
                base: 'templates/component',
            },
        ]
    });
};