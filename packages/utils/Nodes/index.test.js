import { LinkedListNode } from './index';

describe('Linked list node', () => {
  const node = new LinkedListNode(8);
  it('should initialize with the proper value', () => {
    expect(node.val).toBe(8);
  });
  it('should initialize with null next pointer', () => {
    expect(node.next).toBeNull();
  });
  it('should be able to assing next pointer', () => {
    const nextNode = new LinkedListNode(16);
    node.next = nextNode;
    expect(node.next).toBe(nextNode);
  });
});
