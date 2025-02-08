import {useOverlay} from "./useOverlay";
import DialogConfirmation from "@/components/ui/Overlay/Dialog/DialogConfirmation.vue";


export function useConfirmation() {
  const {open, close, overlayStack, topOverlay, isOpen} = useOverlay();

  function confirm(
    options: Record<string, any> = {}
  ): Promise<boolean> {
    return new Promise((resolve) => {
      const overlayId = open(
        DialogConfirmation,
        {
          props: options,
          listeners: {
            confirm: () => {
              resolve(true);
              close(overlayId); // Close on confirm
            },
            cancel: () => {
              resolve(false);
              close(overlayId); // Close on cancel
            },
          },
          type: "confirmation",
        },
      );
    });
  }

  return {
    isOpen,
    overlayStack,
    topOverlay,
    confirm,
    close,
  };
}
