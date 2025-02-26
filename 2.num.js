// TODO:  重新写，不支持join()
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  console.log(
    (parseInt(l1.join("")) + parseInt(l2.join("")))
      .toString()
      .split("")
      .reverse(),
  );
};

addTwoNumbers([2, 4, 3], [5, 6, 4]);
