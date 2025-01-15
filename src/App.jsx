import React, { useState } from "react";
import Modal from "./Modal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Sample Modal"
      >
        <p>This is a reusable modal component!</p>
      </Modal>
    </div>
  );
};

export default App;
