import React from "react";
import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  FormLabel,
  FormControl,
  Button,
  FormHelperText,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";

const ModalLogin = ({ isOpen, onOpen, onClose }) => {
  const [type, setType] = useState("login");

  return (
    <>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {" "}
            {type == "login" ? "Faça seu login" : "Faça seu cadastro"}{" "}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {type == "login" ? (
              <>
                <FormControl>
                  <FormLabel> Email: </FormLabel>
                  <Input type="email"></Input>
                  <FormLabel> Senha: </FormLabel>
                  <Input type="password"></Input>
                  <Button mt={4}> Entrar </Button>
                  <FormHelperText>
                    {" "}
                    Ainda não tem uma conta?{" "}
                    <span
                      onClick={() => setType("email")}
                      style={{
                        textDecoration: "underline",
                        color: "blue",
                        cursor: "pointer",
                      }}
                    >
                      {" "}
                      Clique aqui.{" "}
                    </span>{" "}
                  </FormHelperText>
                </FormControl>
              </>
            ) : (
              <>
                <FormControl>
                  <FormLabel> Email: </FormLabel>
                  <Input type="email"></Input>
                  <FormLabel> Senha: </FormLabel>
                  <Input type="password"></Input>
                  <FormLabel> Repita sua senha: </FormLabel>
                  <Input type="password"></Input>
                  <Button mt={4}> Registrar </Button>
                  <FormHelperText>
                    {" "}
                    Já tem uma conta?{" "}
                    <span
                      onClick={() => setType("login")}
                      style={{
                        textDecoration: "underline",
                        color: "blue",
                        cursor: "pointer",
                      }}
                    >
                      {" "}
                      Clique aqui.{" "}
                    </span>{" "}
                  </FormHelperText>
                </FormControl>
              </>
            )}
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalLogin;
