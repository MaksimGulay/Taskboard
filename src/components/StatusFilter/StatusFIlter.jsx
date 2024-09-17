import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { setStatusFilter } from "../../redux/tasks/actions";
import { getStatusFilter } from "../../redux/filters/selectors";
import { statusFilters } from "../../redux/filters/constants";
import { ItemButton, StatusContainer } from "../../styles/taskPageStyle/TaskItem.style";



export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <StatusContainer >
      <ItemButton
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </ItemButton>
      <ItemButton
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </ItemButton>
      <ItemButton
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </ItemButton>
    </StatusContainer>
  );
};
