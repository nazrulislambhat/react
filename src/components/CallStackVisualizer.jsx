// A browser-based Call Stack Visualizer using React + Tailwind + Framer Motion
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const stackVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

export default function CallStackVisualizer() {
  const [stack, setStack] = useState([]);
  const [id, setId] = useState(1);

  const push = (name) => {
    setStack((prev) => [...prev, { id, name }]);
    setId((prev) => prev + 1);
  };

  const pop = () => {
    setStack((prev) => prev.slice(0, -1));
  };

  const callFunctionA = () => {
    push('functionA()');
    setTimeout(() => {
      callFunctionB();
      setTimeout(() => {
        pop();
      }, 1000);
    }, 1000);
  };

  const callFunctionB = () => {
    push('functionB()');
    setTimeout(() => {
      callFunctionC();
      setTimeout(() => {
        pop();
      }, 1000);
    }, 1000);
  };

  const callFunctionC = () => {
    push('functionC()');
    setTimeout(() => {
      pop();
    }, 1000);
  };

  return (
    <div className="p-4 max-w-xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">Call Stack Visualizer</h1>
      <div className="space-x-2 mb-6">
        <a className="button" onClick={() => push('main()')}>
          Call main()
        </a>
        <a className="button" onClick={callFunctionA}>
          Call functionA()
        </a>
        <a className="button" onClick={pop}>
          Return
        </a>
      </div>

      <div className="bg-gray-100 border rounded-md p-4 h-96 overflow-y-auto flex flex-col-reverse">
        <AnimatePresence>
          {stack.map((item) => (
            <motion.div
              key={item.id}
              variants={stackVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              className="bg-white border rounded p-2 my-1 shadow-md"
            >
              {item.name}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
