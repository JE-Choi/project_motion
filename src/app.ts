import {TodoComponent} from "./components/page/item/todo.js";
import {PageComponent} from "./components/page/page.js";
import {ImageComponent} from "./components/page/item/image.js";
import {NoteComponent} from "./components/page/item/note.js";
import {VideoComponent} from "./components/page/item/video.js";
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
    const video = new VideoComponent("Video Title", "https://youtu.be/K3-jG52XwuQ");
    this.page.addChild(video);
  }
}

new App(document.querySelector(".document")! as HTMLElement);
