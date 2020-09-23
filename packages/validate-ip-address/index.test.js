import validateIP from './index';

test('Test case 1', () => {
  expect(validateIP("192.0.0.1")).toBe("IPv4");
});
test('Test case 2', () => {
  expect(validateIP("2001:0db8:85a3:0000:0000:8a2e:0370:7334")).toBe("IPv6");
});
test('Test case 3', () => {
  expect(validateIP("2001:0db8:85a3::8A2E:037j:7334")).toBe("Neither");
});
test('Test case 4', () => {
  expect(validateIP("192.168.1.00")).toBe("Neither");
});
