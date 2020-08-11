import { createHook } from "overmind-react";
import { state } from "./state";
import { onInitialize } from "./onInitialize";
import * as actions from "./actions";
import * as effects from "./effects";
import { IConfig } from "overmind";
import { createOvermind } from "overmind";
export const config = {
    onInitialize,
    state,
    actions,
    effects,
};
export const app = createOvermind(config, {
    devtools: navigator.userAgent.match(/ CrOS /)
        ? 'penguin.linux.test:3031'
        : 'localhost:3031',
});
export const useApp = createHook<typeof config>();
// @ts-ignore
app.eventHub.on('action:start', (execution) => { console.log("exec", execution) })
/*
namespacePath: Array[0]
actionId: "setMessage"
executionId: 38
actionName: "setMessage"
operatorId: 0
isRunning: true
parentExecution: undefined
path: Array[0]
emit: function bound () {}
send: function bound send() {}
trackEffects: function bound trackEffects() {}
getNextOperatorId: function () {}
flush: function () {}
getMutationTree: function () {}
getTrackStateTree: function getTrackStateTree() {}
onFlush: function onFlush() {}
scopeValue: function scopeValue() {}
type: "action"
value: "whatever"
*/
// @ts-ignore

app.eventHub.on('mutations', (executionAndMutations) => { console.log("execMutation", executionAndMutations) })
// @ts-ignore
app.eventHub.on('getter', (getterDetails) => { console.log("getter", getterDetails) })

declare module "overmind" {
    interface Config extends IConfig<typeof config> { }
}
