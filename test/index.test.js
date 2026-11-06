const { capitalizeWords, filterActiveUsers, logAction } = require('../index');
describe('capitalizeWords', () => {
    test('returns an empty string when input is empty', () => {
        expect(capitalizeWords('')).toBe('');
    });

    test('handles words with mixed capitalization', () => {
        expect(capitalizeWords('hELLO wORLD')).toBe('HELLO WORLD');
    });

    test('capitalizes the first letter of each word', () => {
        expect(capitalizeWords('hello world')).toBe('Hello World');
    });

    test('capitalizes words separated by hyphens', () => {
        expect(capitalizeWords('hello-world')).toBe('Hello-World');
    });

    test('capitalizes a single word', () => {
        expect(capitalizeWords('javascript')).toBe('Javascript');
    });
});


describe('filterActiveUsers', () => {
    test('returns only active users', () => {
        const users = [
            { name: 'Alice', isActive: true },
            { name: 'Bob', isActive: false },
            { name: 'Carol', isActive: true }
        ];

        expect(filterActiveUsers(users)).toEqual([
            { name: 'Alice', isActive: true },
            { name: 'Carol', isActive: true }
        ]);
    });
});
describe('filterActiveUsers', () => {
    test('returns only active users', () => {
        const users = [
            { name: 'Alice', isActive: true },
            { name: 'Bob', isActive: false },
            { name: 'Carol', isActive: true }
        ];

        expect(filterActiveUsers(users)).toEqual([
            { name: 'Alice', isActive: true },
            { name: 'Carol', isActive: true }
        ]);
    });

    test('returns an empty array when there are no users', () => {
        expect(filterActiveUsers([])).toEqual([]);
    });

    test('returns an empty array when all users are inactive', () => {
        const users = [
            { name: 'Alice', isActive: false },
            { name: 'Bob', isActive: false }
        ];

        expect(filterActiveUsers(users)).toEqual([]);
    });
});


describe('logAction', () => {
    test('returns a message containing the username, action, and timestamp', () => {
        const result = logAction('login', 'Alice');

        expect(result).toMatch(
            /^User Alice performed login at \d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/
        );
    });

    test('uses the correct username and action', () => {
        const result = logAction('logout', 'Bob');

        expect(result).toMatch(/^User Bob performed logout at /);
    });
});

