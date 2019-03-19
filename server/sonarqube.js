const scanner = require("sonarqube-scanner");
scanner(
    {
        // this example uses local instance of SQ
        serverUrl: "http://localhost:9000/",
        options: {
            "sonar.projectVersion": "1.1.0",
            "sonar.sources": "src",
            "sonar.tests": "test",
            "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
            "sonar.testExecutionReportPaths": "test-report.xml",
            "sonar.projectKey": "e03774595fc2c921545abf2c7cdcebde0ebd10da",
            "sonar.projectName": "nodeAppArticulos2.0",
        },
    },
    () => {
        // callback is required
    }
);
