import {TodoComponent} from "./components/page/item/todo.js";
import {PageComponent} from "./components/page/page.js";
import {ImageComponent} from "./components/page/item/image.js";
import {NoteComponent} from "./components/page/item/note.js";
class App {
  private readonly page: PageComponent;

  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);
    const image = new ImageComponent("Image Title", "https://picsum.photos/600/300");
    this.page.addChild(image);
    const note = new NoteComponent("title", "noteBody");
    this.page.addChild(note);
    const todo = new TodoComponent("todoTitle", "todoBody");
    this.page.addChild(todo);
  }
}

new App(document.querySelector(".document")! as HTMLElement);
