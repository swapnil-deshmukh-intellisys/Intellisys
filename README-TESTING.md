# Testing Framework and CI/CD Setup

This repository has been configured with a comprehensive testing framework and CI/CD pipeline that allows all evaluation commands to run directly from the repository root.

## Repository Structure

```
Intellisys/
├── intellisys/                 # React Frontend
│   ├── src/
│   │   ├── App.test.js        # Frontend tests
│   │   └── setupTests.js      # Jest configuration
│   └── package.json
├── ShraddhaBackend/           # Node.js Backend
│   ├── tests/                 # Backend tests
│   │   ├── setup.js           # Test setup
│   │   └── server.test.js     # Server tests
│   ├── jest.config.js         # Jest configuration
│   └── package.json
├── scripts/                   # Orchestration scripts
│   └── merge-coverage.js      # Coverage merging
├── .github/workflows/         # CI/CD workflows
│   ├── ci-cd.yml              # Main pipeline
│   └── pr-validation.yml      # PR validation
├── .eslintrc.js              # Root ESLint configuration
├── coverage-reporter.js      # Coverage reporting
└── package.json              # Root orchestration
```

## Available Commands (Run from Repository Root)

### Testing Commands

```bash
# Run all tests (frontend + backend)
npm test

# Run tests with coverage reporting
npm run test:coverage

# Run frontend tests only
npm run test:frontend

# Run backend tests only
npm run test:backend
```

### Linting Commands

```bash
# Run linting on all projects
npm run lint

# Run linting on frontend only
npm run lint:frontend

# Run linting on backend only
npm run lint:backend
```

### Development Commands

```bash
# Install all dependencies
npm run install:all

# Build all projects
npm run build

# Start development servers (both frontend and backend)
npm run dev
```

## Test Discovery Patterns

The testing setup automatically recognizes test files using these patterns:

### Directory Patterns
- `/test/`
- `/tests/`
- `test`
- `tests`

### Filename Patterns
- `.test.`
- `test.`
- `test`
- `_test`
- `.spec.`
- `_spec.`

### Language-Specific Patterns
- **JavaScript/TypeScript**: `*.test.js`, `*.spec.js`, `*.test.ts`, `*.spec.ts`
- **Python**: `*.test.py`, `*_test.py`
- **Java**: `*Test.java`, `*Spec.java`

## Coverage Reporting

Coverage reports are generated and merged from both frontend and backend:

1. **Individual Coverage**: Each project generates its own coverage report
2. **Merged Coverage**: Coverage reports are merged into a unified report
3. **Summary Report**: A markdown summary is generated in `COVERAGE.md`
4. **Threshold Validation**: Minimum 70% coverage is required

## CI/CD Pipeline

### Main Pipeline (`.github/workflows/ci-cd.yml`)
- **Test Job**: Runs linting and tests on Node.js 22.x
- **Build Job**: Builds frontend and backend applications
- **Security Job**: Runs security audits and dependency checks

### PR Validation (`.github/workflows/pr-validation.yml`)
- Validates repository structure
- Checks for test files
- Runs all tests and linting
- Validates required scripts
- Ensures coverage thresholds

### Pipeline Features
- ✅ Dependency caching
- ✅ Parallel test execution
- ✅ Coverage reporting to Codecov
- ✅ Build artifact upload
- ✅ Security scanning
- ✅ PR validation
- ✅ Automatic failure on test/lint failures

## ESLint Configuration

ESLint is configured with project-specific overrides:

- **Frontend**: React-specific rules, JSX support
- **Backend**: Node.js-specific rules
- **Tests**: Jest-specific environment and relaxed rules

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm run install:all
   ```

2. **Run Tests**:
   ```bash
   npm test
   ```

3. **Run Coverage**:
   ```bash
   npm run test:coverage
   ```

4. **Run Linting**:
   ```bash
   npm run lint
   ```

## Requirements for PR Evaluation

The repository satisfies all PR evaluation requirements:

- ✅ All commands execute from repository root
- ✅ Tests run across frontend and backend
- ✅ Coverage reporting is centralized
- ✅ Linting runs across entire repository
- ✅ CI/CD pipeline validates all requirements
- ✅ Automatic failure on test/lint failures
- ✅ Support for npm, pnpm, and yarn package managers

## Troubleshooting

### Common Issues

1. **Dependencies Not Found**:
   ```bash
   npm run install:all
   ```

2. **Test Failures**:
   - Check test files in `/tests/` directories
   - Ensure Jest configuration is correct
   - Verify test environment setup

3. **Coverage Issues**:
   - Ensure tests are running with coverage flags
   - Check coverage thresholds in `coverage-reporter.js`
   - Verify test files are being discovered

4. **Linting Errors**:
   - Run `npm run lint:fix` to auto-fix common issues
   - Check ESLint configuration in `.eslintrc.js`
   - Verify project-specific overrides

### Support

For issues with the testing setup:
1. Check this documentation
2. Review CI/CD logs for detailed error messages
3. Verify all dependencies are installed
4. Ensure commands are run from repository root
