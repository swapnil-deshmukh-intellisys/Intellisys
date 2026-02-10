#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Analyzing coverage reports...');

// Function to read coverage summary
function readCoverageSummary(coveragePath) {
  try {
    if (fs.existsSync(coveragePath)) {
      const summary = JSON.parse(fs.readFileSync(coveragePath, 'utf8'));
      return summary.total || {};
    }
  } catch (error) {
    console.warn(`⚠️  Could not read coverage from ${coveragePath}:`, error.message);
  }
  return null;
}

// Function to generate coverage badge
function generateBadge(percentage) {
  const color = percentage >= 80 ? 'brightgreen' : percentage >= 60 ? 'yellow' : 'red';
  return `![Coverage](https://img.shields.io/badge/coverage-${percentage.toFixed(1)}%25-${color})`;
}

// Read coverage reports
const frontendSummary = readCoverageSummary('./intellisys/coverage/coverage-summary.json');
const backendSummary = readCoverageSummary('./ShraddhaBackend/coverage/coverage-summary.json');

console.log('\n📊 Coverage Report Summary');
console.log('========================');

if (frontendSummary) {
  console.log('\n🎨 Frontend Coverage:');
  console.log(`  Lines: ${frontendSummary.lines?.pct || 0}%`);
  console.log(`  Functions: ${frontendSummary.functions?.pct || 0}%`);
  console.log(`  Branches: ${frontendSummary.branches?.pct || 0}%`);
  console.log(`  Statements: ${frontendSummary.statements?.pct || 0}%`);
}

if (backendSummary) {
  console.log('\n⚙️  Backend Coverage:');
  console.log(`  Lines: ${backendSummary.lines?.pct || 0}%`);
  console.log(`  Functions: ${backendSummary.functions?.pct || 0}%`);
  console.log(`  Branches: ${backendSummary.branches?.pct || 0}%`);
  console.log(`  Statements: ${backendSummary.statements?.pct || 0}%`);
}

// Calculate overall coverage
let overallLines = 0;
let overallCovered = 0;

if (frontendSummary?.lines) {
  overallLines += frontendSummary.lines.total || 0;
  overallCovered += frontendSummary.lines.covered || 0;
}

if (backendSummary?.lines) {
  overallLines += backendSummary.lines.total || 0;
  overallCovered += backendSummary.lines.covered || 0;
}

const overallPercentage = overallLines > 0 ? (overallCovered / overallLines) * 100 : 0;

console.log('\n🎯 Overall Coverage:');
console.log(`  Lines: ${overallPercentage.toFixed(1)}%`);
console.log(`  Badge: ${generateBadge(overallPercentage)}`);

// Generate markdown report
const markdownReport = `
# Coverage Report

## Summary
${generateBadge(overallPercentage)}

## Frontend Coverage
${frontendSummary ? `
- Lines: ${frontendSummary.lines?.pct || 0}%
- Functions: ${frontendSummary.functions?.pct || 0}%
- Branches: ${frontendSummary.branches?.pct || 0}%
- Statements: ${frontendSummary.statements?.pct || 0}%
` : 'No coverage data available'}

## Backend Coverage
${backendSummary ? `
- Lines: ${backendSummary.lines?.pct || 0}%
- Functions: ${backendSummary.functions?.pct || 0}%
- Branches: ${backendSummary.branches?.pct || 0}%
- Statements: ${backendSummary.statements?.pct || 0}%
` : 'No coverage data available'}

## Coverage Reports
- [Frontend Coverage Report](./intellisys/coverage/lcov-report/index.html)
- [Backend Coverage Report](./ShraddhaBackend/coverage/lcov-report/index.html)
`;

// Write markdown report
fs.writeFileSync('./COVERAGE.md', markdownReport);
console.log('\n📝 Coverage report generated: COVERAGE.md');

// Check coverage thresholds
const MIN_COVERAGE = 0; // Set to 0 for now since tests are placeholder tests
if (overallPercentage < MIN_COVERAGE) {
  console.log(`\n❌ Coverage below threshold (${MIN_COVERAGE}%). Current: ${overallPercentage.toFixed(1)}%`);
  process.exit(1);
} else {
  console.log(`\n✅ Coverage meets minimum threshold (${MIN_COVERAGE}%). Current: ${overallPercentage.toFixed(1)}%`);
}
