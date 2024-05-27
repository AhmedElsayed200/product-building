import Modal from "../ui/modal";

interface IProps {
  handleSubmit: () => void;
  closeCard: () => void;
}

const RemoveModal = ({ handleSubmit, closeCard }: IProps) => {
  return (
    <Modal
      handleSubmit={handleSubmit}
      closeCard={closeCard}
      title="Are you sure you want to remove this Product from your store?"
    >
      <p className="text-gray-400 text-sm">
        Deleteing this product will remove it permenantly from your inventory.
        Any associated data, sales history, and other related information will
        also be deleted. Please make sure this is the intended action.
      </p>
    </Modal>
  );
};

export default RemoveModal;
