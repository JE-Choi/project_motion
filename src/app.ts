import { TodoComponent } from "./components/page/item/todo.js";
import { PageComponent } from "./components/page/page.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
class App {
  private readonly image: ImageComponent;
  private readonly page: PageComponent;
  private readonly note: NoteComponent;
  private readonly todo: TodoComponent;

  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);
    this.image = new ImageComponent(
      "Image Title",
      "https://picsum.photos/600/300"
    );
    this.image.attachTo(appRoot, "beforeend");
    this.note = new NoteComponent("title", "noteBody");
    this.note.attachTo(appRoot, "beforeend");
    this.todo = new TodoComponent("todoTitle", "todoBody");
    this.todo.attachTo(appRoot, "beforeend");
  }
}

new App(document.querySelector(".document")! as HTMLElement);
