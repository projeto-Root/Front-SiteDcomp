import { IconButton } from "@chakra-ui/button";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import React from "react";
import { listTopics } from "../../utils/utils_topics";
import CardTopic from "./CardTopic";

const Forum = () => {

  return (
    <Box
      style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        style={{
          display: "flex",
          gap: "1rem",
          width: "100%",
          maxWidth: "50rem",
        }}
      >
        <Input placeholder="Busque por um tópico" />
        <IconButton title="Buscar" colorScheme="blue" icon={<SearchIcon />} />
        <IconButton
          title="Adicionar Discussão"
          colorScheme="blue"
          icon={<AddIcon />}
        />
      </Box>
      <Box
        style={{
          width: "100%",
          maxWidth: "50rem",
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {listTopics.map((elem, key) => {
          return (
            <CardTopic
              key={key}
              title={elem.title}
              numberComments={elem.numberComments}
              numberLikes={elem.numberLikes}
              userCreated={elem.userCreated}
              dateCreated={elem.dateCreated}
              id={elem.id}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Forum;
