# Cypress Project

This is a Cypress project designed for end-to-end testing of web applications. Below are the details and instructions for setting up and using the project.

## Project Structure

```
CypressTests
├── cypress
│   ├── fixtures
│   │   └── example.json
│   ├── integration
│   │   └── github-profile.spec.js
│   ├── plugins
│   │   └── index.js
│   └── support
│       ├── commands.js
│       └── index.js
├── cypress.config.js
├── package.json
└── README.md
```

## Setup Instructions

1. **Install Node.js**: Ensure that Node.js is installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

2. **Clone the Repository**: Clone this repository to your local machine using:
   ```
   git clone <repository-url>
   ```

3. **Navigate to the Project Directory**: Change into the project directory:
   ```
   cd CypressTests
   ```

4. **Install Dependencies**: Run the following command to install the necessary dependencies:
   ```
   npm install
   ```

## Running Tests

You can run the tests in two ways:

### Headless Mode
To run tests in headless mode (CI-friendly):
```
npx cypress run --headless
```

### Interactive Mode
To open Cypress Test Runner:
```
npx cypress open
```

## Current Tests

The project currently includes the following tests:

- `github-profile.spec.js`: Tests GitHub profile navigation and repository validation

## Custom Commands

You can define custom commands in the `cypress/support/commands.js` file. These commands can be reused across your tests for better maintainability.

## Configuration

The `cypress.config.js` file contains configuration settings for your Cypress tests (Cypress 14.3.0). You can modify this file to set the base URL, viewport size, and other options.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.