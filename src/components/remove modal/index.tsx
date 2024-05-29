import Button from "../ui/button";
import Modal from "../ui/modal";

interface IProps {
  handleSubmit: () => void;
  closeCard: () => void;
}

const RemoveModal = ({ handleSubmit, closeCard }: IProps) => {
  return (
    <Modal title="Are you sure you want to remove this Product from your store?">
      <p className="text-gray-400 text-sm">
        Deleteing this product will remove it permenantly from your inventory.
        Any associated data, sales history, and other related information will
        also be deleted. Please make sure this is the intended action.
      </p>
      <div className="flex flex-row gap-x-1 mt-4">
        <Button onClick={handleSubmit} className="text-white bg-red-700">
          Submit
        </Button>
        <Button onClick={closeCard} className="text-black bg-gray-100">
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default RemoveModal;
