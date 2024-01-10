import TrashIcon from "@assets/trash-icon.svg";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

import { useCartStore } from "@/store/cart.store";

export const CartItemDelete = ({ id }: { id: number }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const deleteItem = useCartStore((state) => state.deleteItem);

  return (
    <>
      <img
        src={TrashIcon}
        alt="delete"
        onClick={onOpen}
        className="cursor-pointer"
      />
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Are you sure?
              </ModalHeader>
              <ModalBody>
                <p>Are you sure you want to remove it from your cart?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={() => deleteItem(id)}>
                  Remove
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
