class Sorter {
constructor(name) {
     this.arr = [];
     this.compareFunction =  function (a, b) {
            return a - b;
        }
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    indices.sort();
    var newarr = [];
    
    for (var i=0; i<indices.length; i++){
      newarr.push(this.arr[indices[i]])
    }
    
    newarr.sort(this.compareFunction);

    for (i=0; i<indices.length; i++){
      this.arr[indices[i]] = newarr[i];
    }
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;
