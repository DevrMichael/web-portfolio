# Monorepo for Multiple Projects

This monorepo is designed to house multiple projects, providing a centralized location for development, testing, and deployment processes. Leveraging [Create React App](https://github.com/facebook/create-react-app) for React-based projects, it incorporates a suite of tools and libraries to ensure high-quality development standards and a streamlined setup.

## Monorepo Structure

Organized into subdirectories, each representing a standalone project, this repository simplifies dependency management, code sharing, and project orchestration.

### Projects Included

- `Krist`: Login pages for clothing store
- `Storybook`: Shared custom component library

![monorepo-readme](https://github.com/DevrMichael/web-portfolio/assets/88589247/ec4717cb-de54-48f7-a4f9-6291d3b5df72)
![monorepo-storybook](https://github.com/DevrMichael/web-portfolio/assets/88589247/9118cdb5-1efd-4c23-b39f-055c84d65e10)


## Key Technologies and Tools

- **[Lerna](https://lerna.js.org/)**: Used for managing JavaScript projects with multiple packages, simplifying the process of handling dependencies across these packages.
- **[Bootstrap](https://getbootstrap.com/)**: Integrated for responsive design and pre-styled components, enhancing UI development.
- **[Prettier](https://prettier.io/)**: An opinionated code formatter, ensuring consistent code style across all projects.
- **[ESLint](https://eslint.org/)**: Utilized for identifying and reporting on patterns found in ECMAScript/JavaScript code, helping to maintain code quality.
- **[Formik](https://formik.org/)**: Implemented for building forms in React, providing an easy way to manage form state.
- **[Yup](https://github.com/jquense/yup)**: Used in conjunction with Formik for object schema validation, enhancing form validation processes.
- **[Storybook](https://storybook.js.org/)**: A tool for developing UI components in isolation, making it easier to build and document component libraries.

## Getting Started

Clone the repository and navigate into the project directory of interest:

```bash
    git clone https://github.com/DevrMichael/web-portfolio.git
```
### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed to use `npm` commands.

### Common Commands

Below are commands available across all projects within the monorepo:

#### `npm start`

Runs the selected app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload with edits, and lint errors will be shown in the console.

#### `npm test`

Initiates the test runner in interactive watch mode. See the [running tests](https://facebook.github.io/create-react-app/docs/running-tests) documentation for more details.

#### `npm run build`

Builds the app for production to the `build` folder. It's optimized for performance, with minified builds and hashed filenames. Ready for deployment!

#### `npm run eject`

**Note: this is irreversible.** Ejects the build setup, copying all configuration files and dependencies into your project for full control.

### Deployment

For deployment strategies, refer to the [deployment documentation](https://facebook.github.io/create-react-app/docs/deployment).

## Learn More

For a deeper understanding of the technologies used:

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)

## Contributing

Contributions are welcome! Please read our contributing guidelines for our code of conduct and the process for submitting pull requests.

## License

Licensed under the MIT License - see the [LICENSE](https://opensource.org/license/mit) file for details.
