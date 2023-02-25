import { Modal } from "antd";
import React from "react";

type IProps = {
  children: React.ReactNode;
  onCancel: () => void;
  open: boolean;
  footer: React.ReactNode | null;
  title: React.ReactNode | null;
};

const Modals = ({ children, footer, open, title, onCancel }: IProps) => {
  return (
    <Modal
      destroyOnClose
      open={open}
      footer={footer}
      title={title}
      onCancel={onCancel}
      width={"40%"}
      className="h-[50%]"
    >
      {children}
    </Modal>
  );
};

export default Modals;
