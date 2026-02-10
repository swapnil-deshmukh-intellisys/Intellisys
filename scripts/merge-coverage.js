#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to merge coverage reports
function mergeCoverageReports() {
  const frontendCoveragePath = path.join(__dirname, '../intellisys/coverage/coverage-final.json');
  const backendCoveragePath = path.join(__dirname, '../ShraddhaBackend/coverage/coverage-final.json');
  const mergedCoveragePath = path.join(__dirname, '../coverage/coverage-final.json');

  let mergedCoverage = {
    files: {},
    total: {
      lines: { total: 0, covered: 0, percent: 0 },
      functions: { total: 0, covered: 0, percent: 0 },
      branches: { total: 0, covered: 0, percent: 0 },
      statements: { total: 0, covered: 0, percent: 0 }
    }
  };

  // Merge frontend coverage if exists
  if (fs.existsSync(frontendCoveragePath)) {
    try {
      const frontendCoverage = JSON.parse(fs.readFileSync(frontendCoveragePath, 'utf8'));
      Object.assign(mergedCoverage.files, frontendCoverage.files || {});
      console.log('✅ Frontend coverage merged');
    } catch (error) {
      console.warn('⚠️  Could not merge frontend coverage:', error.message);
    }
  }

  // Merge backend coverage if exists
  if (fs.existsSync(backendCoveragePath)) {
    try {
      const backendCoverage = JSON.parse(fs.readFileSync(backendCoveragePath, 'utf8'));
      Object.assign(mergedCoverage.files, backendCoverage.files || {});
      console.log('✅ Backend coverage merged');
    } catch (error) {
      console.warn('⚠️  Could not merge backend coverage:', error.message);
    }
  }

  // Create coverage directory if it doesn't exist
  const coverageDir = path.dirname(mergedCoveragePath);
  if (!fs.existsSync(coverageDir)) {
    fs.mkdirSync(coverageDir, { recursive: true });
  }

  // Write merged coverage
  fs.writeFileSync(mergedCoveragePath, JSON.stringify(mergedCoverage, null, 2));
  console.log('✅ Merged coverage report created at:', mergedCoveragePath);

  // Print summary
  const fileCount = Object.keys(mergedCoverage.files).length;
  console.log(`📊 Coverage Summary: ${fileCount} files covered`);
}

mergeCoverageReports();
