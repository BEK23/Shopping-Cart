import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

interface SuccessModalProps extends Partial<ReturnType<typeof useDisclosure>> {
  title?: string;
  description?: string;
}

export const SuccessModal = ({
  isOpen,
  onOpenChange,
  onClose,
  title,
  description,
}: SuccessModalProps) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(close) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-success">
              {title}
            </ModalHeader>
            <ModalBody>{description}</ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onPress={() => {
                  onClose?.();
                  close();
                }}
              >
                Ok
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
