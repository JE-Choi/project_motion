import { PageComponent } from "./components/page/page.js";
import { ImageComponent } from "./components/page/item/image.js";
class App {
  private readonly image: ImageComponent;
  private readonly page: PageComponent;

  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);
    this.image = new ImageComponent(
      "Image Title",
      "https://picsum.photos/600/300"
    );
    this.image.attachTo(appRoot, "beforeend");
  }
}

new App(document.querySelector(".document")! as HTMLElement);
