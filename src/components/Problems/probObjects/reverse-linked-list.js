class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  
    reverse() {
      let current = this;
      let prev = null;
      while (current !== null) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
      return prev;
    }
  }
  
  export const reverseLinkedListHandler = (fn) => {
    try {
      const tests = [[1, 2, 3, 4, 5], [5, 4, 3, 2, 1], [1, 2, 3], [1]];
      const answers = [[5, 4, 3, 2, 1], [1, 2, 3, 4, 5], [3, 2, 1], [1]];
      for (let i = 0; i < tests.length; i++) {
        const list = createLinkedList(tests[i]);
        const result = fn(list);
        assert.deepEqual(getListValues(result), answers[i]);
      }
      return true;
    } catch (error) {
      console.error("Error from reverseLinkedListHandler: ", error);
      throw new Error(error);
    }
  };
  
  export function createLinkedList(values) {
    const head = new LinkedList(values[0]);
    let current = head;
    for (let i = 1; i < values.length; i++) {
      const node = new LinkedList(values[i]);
      current.next = node;
      current = node;
    }
    return head;
  }
  
  export function getListValues(head) {
    const values = [];
    let current = head;
    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
  
  export const starterCodeReverseLinkedListJS = `
  /**
   * Definition for singly-linked list.
   * function ListNode(val, next) {
   *     this.val = (val===undefined ? 0 : val)
   *     this.next = (next===undefined ? null : next)
   * }
   */
  function reverseLinkedList(head) {
    // Write your code here
  };`;
  
  export const reverseLinkedList = {
    name: "reverse-linked-list",
    id: 2,
    difficulty: "Medium",
      acceptance: "70%",
    title: "2. Reverse Linked List",
    problemStatement: `<p class='mt-3'>Given the <code>head</code> of a singly linked list, reverse the list, and return <em>the reversed list</em>.</p>
      `,
    examples: [
      {
        id: 0,
        inputText: "head = [1,2,3,4,5]",
        outputText: "[5,4,3,2,1]",
        // img: example.src,
      },
      {
        id: 1,
        inputText: "head = [1,2,3]",
        outputText: "[3,2,1]",
      },
      {
        id: 2,
        inputText: "head = [1]",
        outputText: "[1]",
      },
    ],
    constraints: `<li class='mt-2'>The number of nodes in the list is the range <code>[0, 5000]</code>.</li>
  <li class='mt-2'><code>-5000 <= Node.val <= 5000</code></li>`,
    starterCode: starterCodeReverseLinkedListJS,
    handlerFunction: reverseLinkedListHandler,
    starterFunctionName: "function reverseLinkedList(",
    order: 2,
  };
  
  export default reverseLinkedList;
  