import React, { useState } from "react";
import { Text } from "react-native";

const ModalHeader = () => {
  const [state, setState] = useState(false);

  return (
    <Text>test</Text>
    // <AnimatePresence>
    //   <MotiView
    //     style={style.modal}
    //     from={{ opacity: 0, scale: 0.5 }}
    //     animate={{ opacity: 1, scale: 1 }}
    //     transition={{
    //       type: "timing",
    //       duration: 350,
    //     }}
    //   >
    //     <Text>Modal Teste</Text>
    //   </MotiView>
    // </AnimatePresence>
  );
};

export default ModalHeader;
