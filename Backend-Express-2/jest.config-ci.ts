import type {Config} from 'jest';

export default async (): Promise<Config> => {
    return {
        testEnvironment: 'node',
        preset: 'ts-jest',
        verbose: true,
        setupFiles: [
            'dotenv/config'
        ],
        bail: 1,
        coverageDirectory: 'tests/coverage',
        coverageReporters: ['cobertura'],
        reporters: [
            ['jest-junit', {outputFile: 'tests/junit.xml'}]
        ]
    };
};
