// import page from 'page';
import { Todo } from "./state";

import { Action } from "overmind";
export const storage = {
    saveTodos(todos: { [id: string]: Todo }) {
        localStorage.setItem("todos", JSON.stringify(todos));
    },
    getTodos(): { [id: string]: Todo } {
        return JSON.parse(localStorage.getItem("todos") || "{}");
    }
};
type Rooms = {
    actions: null | Array<Action>;
    initialize: Action<Array<Action>>;
    leave: Action<string, void>
    join: Action<string, void>
}
export const rooms: Rooms = {
    actions: null,
    initialize(context, actions: Array<Action>) {
        rooms.actions = actions;
    },
    leave(context, room: string) {
        // rooms.actions.server.leaveRoom(room);
    },
    join(context, room: string) {
        // rooms.actions.server.joinRoom(room);
    }
};

// export const router = {
//   initialize(routes: { [url: string]: (params: object) => void }) {
//     Object.keys(routes).forEach(url => {
//       page(url, ({ params }) => routes[url](params));
//     });
//     page.start();
//   },
//   goTo(url: string) {
//     page.show(url);
//   },
// };

export const ids = {
    create(): string {
        return Date.now().toString();
    }
};
