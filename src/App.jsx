import React, { useState } from "react";
import { Container, Stack, Flex, List, ListItem, Heading }

  from "@chakra-ui/react";
// import Player from "./components/player";
import Player from "./components/Player";
import { useDrop } from "react-dnd";


const App = () => {
  const [players, setPlayer] = useState([
    { name: "player 1" },
    { name: "player 2" },
    { name: "player 3" },
    { name: "player 4" },
    { name: "player 5" },
  ]);

  const [team, setTeam] = useState([]

  );

  const [{ isOver }, addToTeamRef] = useDrop({
    accept: "player",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),

  });
  const [{ isOver: isPlayerOver }, removeFromTeamRef] = useDrop({
    accept: "team",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),

  });

  const movePlayerToTeam = (item) => {
    console.log(item);
    setPlayer(prev => prev.filter((_, i) => i !== item.index));
    setTeam(prev => [...prev, item]);

  };
  const removePlayerFromTeam = (item) => {
    setTeam(prev => prev.filter((_, i) => i !== item.index));
    setPlayer(prev => [...prev, item]);

    console.log(item);
  };

  return (
    <body className="body">
      <Container maxW="800px">
        <Heading p="2" align="center" color="GrayText">
          React Drag & Drop
        </Heading>
        <Flex justify="space-between" height="90vh" align="center">
          <Stack width="300px">
            <Heading fontSize="3xl" color="yellow.800" textAlign="center">
              Players
            </Heading>
            <List p="4" minH="70vh" boxShadow="xl" borderRadius="md" ref={removeFromTeamRef}

              bgGradient={
                isPlayerOver
                  ? "linear(to-b, yellow.300,yellow.500)"
                  : "linear(to-b ,yellow.100,yellow.200)"
              }

            >
              {players.map((e, i) => (
                <Player
                  key={e.name}
                  item={e}
                  type="player"
                  index={i}
                  onDropPlayer={movePlayerToTeam} />
              ))}
            </List>
          </Stack>
          <Stack width="300px">
            <Heading fontSize="3xl" color="teal.800" textAlign="center">
              TEAM
            </Heading>
            <List p="4" minH="70vh" boxShadow="xl" borderRadius="md" ref={addToTeamRef}

              bgGradient={
                isOver
                  ? "linear(to-b, teal.300,teal.500)"
                  : "linear(to-b ,teal.100,teal.200)"
              }

            >

              {team.map((e, i) => (
                <Player
                  key={e.name}
                  item={e}
                  type="team"
                  index={i}
                  onDropPlayer={removePlayerFromTeam} />
              ))}

            </List>
          </Stack>
        </Flex>
      </Container>
    </body>

  );

};


export default App;
