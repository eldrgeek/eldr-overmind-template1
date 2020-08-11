// eslint-disable-next-line
import { CurrentModule, React, useApp } from "./CurrentModule";
type JSXValue =
    | undefined
    | string
    | number
    | Array<any>
    | Object;
type JSXParam = {
    value: JSXValue
}
export default function JSX(p: JSXParam): any {
    const { value } = p
    // console.log("JSX",value)
    switch (typeof value) {
        case "string":
            return `'${value}'`;
        case "number":
            return String(value);
        default:
            if (value === undefined) return "undefined";
            if (value === null) return "null";
            if (typeof value === 'string') return value
            if (Array.isArray(value)) {
                const list = value.map((val, index) => {
                    return (
                        <div className="pl-2" key={index}>
                            {index}: {JSX(val)}
                        </div>
                    );
                });
                return list;
            }
            const list = Object.keys(value).map(key => {
                return (
                    <div className="pl-2" key={key}>
                        {" "}
                        {key}: {JSX(value[key])}{" "}
                    </div>
                );
            });
            return list;
    }
}
CurrentModule(JSX);
