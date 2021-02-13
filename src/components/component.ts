/**
 * 구현된 컴포넌트로 상호작용을 하기 보다는 인터페이스를 만들어서
 */
export interface Component {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
}

/**
 * 캡슐화: HTML Element creation
 * 외부에서는 어떻게 element 생성이 되는지 몰라도 됨.
 */
export class BaseComponent<T extends HTMLElement> implements Component {
  //요소 내부는 변경이 가능하지만, 요소 자체를 변경할 수는 없다.
  protected readonly element: T;

  constructor(htmlString: string) {
    const template = document.createElement("template");
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild! as T;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}
