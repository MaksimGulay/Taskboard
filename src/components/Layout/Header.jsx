import React from "react";
import {
  CreateButton,
  Form,
  HeaderContainer,
  Input,
  ItemsContainet,
  NotificationButton,
  ProfileButton,
} from "../../styles/layout/header";
import { Avatar } from "../../icons/Avatar";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/slices/tasksSlice";
// import { addTask } from "../../redux/tasks/actions";

export function Header() {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    // Викликаємо генератор екшену та передаємо текст завдання для поля payload
    // Відправляємо результат – екшен створення завдання
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };
  return (
    <HeaderContainer>
      <ItemsContainet>
        <Form onSubmit={handleSubmit}>
          <Input type="text" name="text" placeholder="Enter task text..." />
          <CreateButton type="submit">Create New Tast</CreateButton>
        </Form>
        <NotificationButton></NotificationButton>
        <ProfileButton>
          <Avatar />
        </ProfileButton>
      </ItemsContainet>
    </HeaderContainer>
  );
}
export default Header;
