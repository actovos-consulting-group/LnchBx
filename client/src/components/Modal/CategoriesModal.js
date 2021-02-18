import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  Block,
  Button,
  Modal,
  ModalHeader,
  ModalContent,
  ModalFooter,
  Flex,
  Input,
  List,
  Clickable,
} from '@actovos-consulting-group/ui-core';
import {
  FaMinusCircle,
  FaPlusCircle,
} from '@actovos-consulting-group/ui-core/esm/Icons/fa';
import { differenceBy } from 'lodash';

const ListContainer = styled.div`
  max-height: 550px;
  overflow: scroll;
`;

const CategoriesModal = ({
  show,
  userCats = [],
  allCats,
  toggleCategoryModal,
}) => {
  const [categories, setCategories] = useState({
    available: [],
    user: [],
  });
  const [searchTerm, setSearchTerm] = useState({
    available: '',
    user: '',
  });

  const userCategories = userCats.map(item => {
    return { id: item.id, name: item.name };
  });

  const allCategories = allCats.map(item => {
    return { id: item.id, name: item.name };
  });

  const availableCategories = differenceBy(allCategories, userCategories, 'id');

  const updateAllCategories = () => {
    setCategories({
      available: availableCategories,
      user: userCategories,
    });
  };

  const filterItemsHandler = (e, name) => {
    const searchInput = e.target.value;

    setSearchTerm(prevState => {
      return {
        ...prevState,
        [name]: searchInput,
      };
    });

    if (searchInput.length === 0) {
      updateAllCategories();
    } else {
      const searchArray =
        name === 'user' ? userCategories : availableCategories;

      const newArray = searchArray.filter(item =>
        item.name.includes(searchInput),
      );

      setCategories(prevState => {
        return {
          ...prevState,
          [name]: newArray,
        };
      });
    }
  };

  const saveCategoryUpdates = () => {};

  const categoryItems = categories.user.map(item => {
    return (
      <List.Item divider>
        <List.ItemText primary={item.name} />
        <Clickable disabled>
          <FaMinusCircle />
        </Clickable>
      </List.Item>
    );
  });

  const appCategories = categories.available.map(item => {
    return (
      <List.Item divider>
        <List.ItemText primary={item.name} />
        <Clickable disabled>
          <FaPlusCircle />
        </Clickable>
      </List.Item>
    );
  });

  useEffect(() => {
    updateAllCategories();
  }, []);
  return (
    <Modal
      size="lg"
      show={show}
      onClose={toggleCategoryModal}
      closeOnBackdropClick={toggleCategoryModal}
    >
      <ModalHeader>
        <h3 style={{ textAlign: 'center' }}>Edit your categories</h3>
      </ModalHeader>
      <ModalContent style={{ height: '700px', width: '1000px' }}>
        <Flex p={40}>
          <Block mr={4} minWidth={400} maxWidth={500}>
            <h4 style={{ marginTop: 0 }}>Available Categories</h4>
            <Input
              label="Search Categories"
              name="categories"
              onChange={e => filterItemsHandler(e, 'available')}
              value={searchTerm.available}
            />
            <ListContainer>
              <List>{appCategories}</List>
            </ListContainer>
          </Block>
          <Block ml={4} minWidth={400} maxWidth={500}>
            <h4 style={{ marginTop: 0 }}>Your Categories</h4>
            <Input
              label="Search Categories"
              name="categories"
              onChange={e => filterItemsHandler(e, 'user')}
              value={searchTerm.user}
            />
            <ListContainer>
              <List>{categoryItems}</List>
            </ListContainer>
          </Block>
        </Flex>
      </ModalContent>
      <ModalFooter>
        <Block px={40}>
          <Button style={{ width: '100%' }} disabled>
            Save Categories
          </Button>
        </Block>
      </ModalFooter>
    </Modal>
  );
};

export default CategoriesModal;
