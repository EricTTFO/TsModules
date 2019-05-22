module Time {
  export class Test {
    element: HTMLElement;
    span: HTMLElement;
    timer: number;
    constructor(e: HTMLElement) {
      this.element = e;
      this.element.innerHTML = "現在時間是：";
      this.span = document.createElement("span");
      this.element.appendChild(this.span);
      this.span.innerHTML = new Date().toTimeString();
    }
    start() {
      this.timer = setInterval(
        () => (this.span.innerHTML = new Date().toTimeString()),
        500
      );
    }
    stop(){
        clearInterval(this.timer);
    }
  }
}
