import React from "react";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";
import "./style.css";
import { FaLessThanEqual } from "react-icons/fa6";

export default function Projects({ openModal, setOpenModal }) {
  const [toggle, setToggle] = useState("all");
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)", // 👈 this centers it
    backgroundColor: "#ffffff",
    boxShadow: 24,
    padding: "16px",
    borderRadius: "8px",
    padding: "0px",
    borderRadius: "15px",
  };
  return (
    <Container id="projects">
      <Wrapper>
        <Title>
          {" "}
          <span className="titleSpan">My </span>Projects
        </Title>
        <Desc>
          I have worked on a wide range of projects and articles. Here are some
          of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "web app" ? (
            <ToggleButton
              active
              value="web app"
              onClick={() => setToggle("web app")}
            >
              WEB APP'S
            </ToggleButton>
          ) : (
            <ToggleButton value="web app" onClick={() => setToggle("web app")}>
              WEB APP'S
            </ToggleButton>
          )}
          <Divider />
          {toggle === "android app" ? (
            <ToggleButton
              active
              value="android app"
              onClick={() => setToggle("android app")}
            >
              DEVOPS
            </ToggleButton>
          ) : (
            <ToggleButton
              value="android app"
              onClick={() => setToggle("android app")}
            >
              DEVOPS
            </ToggleButton>
          )}
          <Divider />
          {toggle === "machine learning" ? (
            <ToggleButton
              active
              value="machine learning"
              onClick={() => setToggle("machine learning")}
            >
              MACHINE LEARNING
            </ToggleButton>
          ) : (
            <ToggleButton
              value="machine learning"
              onClick={() => setToggle("machine learning")}
            >
              MACHINE LEARNING
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
                handleOpen={handleOpen}
                setSelectedProject={setSelectedProject}
              />
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
                <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
                handleOpen={handleOpen}
                setSelectedProject={setSelectedProject}
              />
            ))}
        </CardContainer>
      </Wrapper>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: "60%", height: "70%" }}>
          <video
            width="100%"
            height="100%"
            controls
            style={{ borderRadius: "15px" }}
          >
            <source src={selectedProject?.demo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
      </Modal>
    </Container>
  );
}
