import {useOverlay} from "./useOverlay";

export function useDialog() {
  const {open, close, overlayStack, topOverlay, isOpen} = useOverlay();

  function openDialog(
    component: any,
    props: Record<string, any> = {},
    dialogProps: Record<string, any> = {},
    listeners: Record<string, (payload?: any) => void> = {}
  ) {
    open(
      component,
      {
        props,
        listeners: {
          ...listeners,
          close
        },
        type: "dialog",
      },
      dialogProps
    );
  }

  return {
    isOpen,
    overlayStack,
    topOverlay,
    open: openDialog,
    close,
  };
}
