import m from 'mithril';

export default class Counter {
  constructor(count = 0) {
    this.initialCount = count;
    this.count = m.prop(count);
  }

  increment() {
    this.count(this.count() + 1);
  }

  decrement() {
    this.count(this.count() - 1);
  }

  reset() {
    this.count(this.initialCount);
  }
}
