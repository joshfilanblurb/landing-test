import * as React from "react";
import type { ReactNode } from "react";
import { Dialog } from "@base-ui/react/dialog";
import styles from "./Modal.module.css";

export interface ModalRootProps
  extends React.ComponentProps<typeof Dialog.Root> {
  children: ReactNode;
}

/**
 * Modal Root component - wraps the entire modal including trigger
 */
export const Modal = ({ children, ...props }: ModalRootProps) => {
  return <Dialog.Root {...props}>{children}</Dialog.Root>;
};

Modal.displayName = "Modal";

export interface ModalContentProps {
  /**
   * Modal title
   */
  title?: string;
  /**
   * Modal Size
   */
  size?: "small" | "large";
  /**
   * Modal content
   */
  children: ReactNode;
}

export const ModalContent = React.forwardRef<HTMLDivElement, ModalContentProps>(
  ({ title, size = "large", children }, ref) => {
    return (
      <Dialog.Portal>
        <Dialog.Backdrop
          data-codex-component="modal-overlay"
          className={styles.backdrop}
        />
        <Dialog.Popup
          ref={ref}
          data-codex-component="modal"
          className={styles.content}
          data-size={size}
        >
          {title && (
            <Dialog.Title className={styles.title}>{title}</Dialog.Title>
          )}
          {children}
        </Dialog.Popup>
      </Dialog.Portal>
    );
  },
);

ModalContent.displayName = "ModalContent";

/**
 * Modal Trigger component - use this to open the modal
 */
export const ModalTrigger = Dialog.Trigger;

/**
 * Modal Close component - use this for custom close buttons
 */
export const ModalClose = Dialog.Close;
ModalClose.displayName = "ModalClose";

/**
 * Modal Description component - for accessible descriptions
 */
export const ModalDescription = Dialog.Description;
ModalDescription.displayName = "ModalDescription";
