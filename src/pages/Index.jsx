import React, { useState } from "react";
import { Box, Button, Flex, Heading, Image, Input, Stack, Text } from "@chakra-ui/react";
import { FaPalette } from "react-icons/fa";

const ColoringPage = () => {
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [imageUrl, setImageUrl] = useState("https://images.unsplash.com/photo-1471666875520-c75081f42081?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsaW5lJTIwYXJ0JTIwZm9yJTIwY29sb3Jpbmd8ZW58MHx8fHwxNzEyODIyNjU3fDA&ixlib=rb-4.0.3&q=80&w=1080");

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setImageUrl(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Flex direction="column" align="center" p={8}>
      <Heading mb={8}>
        <FaPalette style={{ marginRight: "8px" }} />
        색칠 공부 사이트
      </Heading>
      <Stack spacing={4} direction={["column", "row"]} mb={8}>
        <Input type="color" value={selectedColor} onChange={handleColorChange} />
        <Input type="file" accept="image/*" onChange={handleImageUpload} />
      </Stack>
      <Box position="relative">
        <Image src={imageUrl} />
        <Box position="absolute" top={0} left={0} right={0} bottom={0} pointerEvents="none" style={{ mixBlendMode: "multiply" }} backgroundColor={selectedColor} opacity={0.5} />
      </Box>
      <Text mt={4}>색상을 선택하고 이미지 위에 마우스를 올려 색칠해 보세요!</Text>
    </Flex>
  );
};

export default ColoringPage;
