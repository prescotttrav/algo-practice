import numUniqueEmails from './index';

test('Test case 1', () => {
  expect(
    numUniqueEmails(['test.email+alex@abc.com', 'test.e.mail+bob.cathy@abc.com', 'testemail+david@a.bc.com']),
  ).toBe(2);
});
test('Test case 2', () => {
  expect(numUniqueEmails(['testemail@abc.com', 'test.email@abc.org', 'testemail+eight@abc.gov'])).toBe(3);
});
