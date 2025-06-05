import { useState, useRef, useLayoutEffect, FunctionComponent } from "react";
import type { ComponentType, Component } from "@/_types";

import { useSdkComponents, useAttachEvent } from "@lib/hooks";

type Callback = (...args: unknown[]) => unknown;
type ComponentProps = {
  id?: string;
  className?: string;
  onMount?: Callback;
  onFocus?: Callback;
  onChange?: Callback;
  onBlur?: Callback;
  onEscape?: Callback;
};

const camelCase = (str: string) => str[0].toUpperCase() + str.slice(1);

export const createComponent = (
  type: ComponentType
): FunctionComponent<ComponentProps> => {
  const displayName = `${camelCase(type)}Component`;

  const Component: FunctionComponent<ComponentProps> = (props) => {
    const { id, className, onMount, onFocus, onChange, onBlur, onEscape } =
      props;

    const sdkComponents = useSdkComponents();

    const componentRef = useRef<Component | null>(null);
    const domNodeRef = useRef<HTMLDivElement | null>(null);

    const [component, setComponent] = useState<Component | null>(null);

    useLayoutEffect(() => {
      if (!sdkComponents) return;

      let component: Component;
      if (componentRef.current === null && domNodeRef !== null) {
        component = sdkComponents.createComponent(type);
        componentRef.current = component;

        if (domNodeRef.current) {
          component.mount(domNodeRef.current);
        }

        setComponent(component);
      }
    }, [sdkComponents]);

    useAttachEvent(component, "mount", onMount);
    useAttachEvent(component, "focus", onFocus);
    useAttachEvent(component, "change", onChange);
    useAttachEvent(component, "blur", onBlur);
    useAttachEvent(component, "escape", onEscape);

    return <div id={id} className={className} ref={domNodeRef} />;
  };

  Component.displayName = displayName;

  return Component;
};
