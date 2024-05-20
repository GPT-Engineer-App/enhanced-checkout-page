import { useState } from "react";
import { Container, FormControl, FormLabel, Input, Select, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure, VStack } from "@chakra-ui/react";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({
    name: "Marc Smith",
    email: "marcSmith@yahoo.com",
    amount: "2000",
    mobilenumber: "0909333322",
    address: "Manila ph",
    remarks: "remarks",
    pay_method: "pm-gcash",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const submitPayment = () => {
    onOpen();
    setTimeout(() => {
      window.location.href = "https://test-sources.paymongo.com/sources?id=src_LivTh3piFahXazhRjRAF7nRk";
    }, 3000); // Redirect after 3 seconds
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} as="form">
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" value={formData.name} onChange={handleChange} />
        </FormControl>

        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input type="email" value={formData.email} onChange={handleChange} />
        </FormControl>

        <FormControl id="amount">
          <FormLabel>Amount</FormLabel>
          <Input type="text" value={formData.amount} onChange={handleChange} />
        </FormControl>

        <FormControl id="mobilenumber">
          <FormLabel>Mobile Number</FormLabel>
          <Input type="tel" value={formData.mobilenumber} onChange={handleChange} />
        </FormControl>

        <FormControl id="address">
          <FormLabel>Address</FormLabel>
          <Input type="text" value={formData.address} onChange={handleChange} />
        </FormControl>

        <FormControl id="remarks">
          <FormLabel>Remarks</FormLabel>
          <Input type="text" value={formData.remarks} onChange={handleChange} />
        </FormControl>

        <FormControl id="pay_method">
          <FormLabel>Payment Method</FormLabel>
          <Select value={formData.pay_method} onChange={handleChange}>
            <option value="pm-gcash">Gcash</option>
            <option value="pm-paypal">PayPal</option>
            <option value="pm-banktransfer">Bank Transfer</option>
          </Select>
        </FormControl>

        <Button colorScheme="blue" onClick={submitPayment}>
          Pay
        </Button>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Processing Payment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>Redirecting to payment...</p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Index;
