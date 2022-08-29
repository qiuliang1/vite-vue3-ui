import { defineComponent, PropType } from "vue";
import "uno.css";

export type IColor =
  | "black"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";
export const props = {
  size: {
    type: String as PropType<"small" | "medium" | "large">,
    default: "medium",
  },
  color: {
    type: String as PropType<IColor>,
    default: "blue",
  },
  icon: {
    type: String as PropType<string>,
    default: "",
  },
  round: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  plain: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
};
export default defineComponent({
  name: "SButton",
  props,
  setup(props, { slots }) {
    const size = {
      small: {
        x: "2",
        y: "1",
        text: "sm",
      },
      medium: {
        x: "3",
        y: "1.5",
        text: "base",
      },
      large: {
        x: "4",
        y: "2",
        text: "lg",
      },
    };

    return () => (
      <button
        class={`
      py-${size[props.size].y}
      px-${size[props.size].x}
      bg-${props.color}-${props.plain ? "100" : "500"} 
      hover:bg-${props.color}-400
      border-${props.color}-${props.plain ? "500" : "500"}
      border-1
      text-${props.plain ? props.color + "-500" : "white"} 
      ${props.round ? "rounded-full" : "rounded-lg"}
      text-${size[props.size].text}
      hover:text-white
      transition duration-300 ease-in-out transform hover:scale-105
      mx-1
      cursor-pointer 
      `}
      >
        {props.icon !== "" ? (
          <i class={`i-ic-baseline-${props.icon} p-3`}></i>
        ) : (
          ""
        )}
        {slots.default ? slots.default() : ""}
      </button>
    );
  },
});
