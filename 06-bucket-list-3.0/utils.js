module.exports.printList = function (items) {
  items.forEach(function (el) {
    console.log(`You want to ${el.item} ${el.times} time(s) every ${el.frequency}`);
  });
}