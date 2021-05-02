module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Generates a Nuxt component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?, e.g. NatureBanner',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../components/{{pascalCase name}}/index.vue',
        templateFile: 'templates/component.vue.hbs',
      },
      {
        type: 'add',
        path: '../components/{{pascalCase name}}/stories.js',
        templateFile: 'templates/stories.js.hbs',
      },
      {
        type: 'add',
        path: '../components/{{pascalCase name}}/test.spec.js',
        templateFile: 'templates/test.spec.js.hbs',
      },
    ],
  })
}
