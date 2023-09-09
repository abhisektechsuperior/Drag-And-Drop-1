import React from 'react';
import { ListItem } from "@chakra-ui/react";
import { useDrag } from "react-dnd";


const Player = ({ item, type, index, onDropPlayer }) => {

  const [{ isDragging }, dragRef] = useDrag({
    type: type,
    item: () => ({ ...item, index }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (dropResult && item) {
        onDropPlayer(item);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <ListItem p="2"
      borderRadius="md"
      boxShadow="md" mb="2"
      textAlign="center"
      ref={dragRef}
      bg={
        isDragging
          ? (type === "player"
            ? "yellow.500"
            : "teal.500")
          : "white"
      }
      color={isDragging ? "white" : "black"}

    >

      {item.name}
    </ListItem>
  );
};


export default Player;