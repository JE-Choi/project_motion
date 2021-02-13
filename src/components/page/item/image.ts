import {BaseComponent} from "./../../component.js";
/**
 * 나랑 다른 점: 난 innerHTML할때, 내부 데이터까지 넣었고
 * 엘리는 진짜, 템플릿만 만들고, 나중에 데이터를 넣었음.
 *
 * 사용자에게 전달받은 데이터를 바로, innerHTML로 설정하는 건 위험하다.
 * 아래처럼 필요한 부분만 접근해서 업데이트하는 것이 안전하다.
 */
export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="image">
              <div class="image__holder"><img class="image__thumbnail"></div>
              <p class="image__title"></p>
          </section>`);

    const imageElement = this.element.querySelector(".image__thumbnail")! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector(".image__title")! as HTMLParagraphElement;
    titleElement.textContent = title;
  }
}
