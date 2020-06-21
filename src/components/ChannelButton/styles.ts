import styled from "styled-components";
import { PersonAdd, Settings } from "styled-icons/material";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px 3px;
  border-radius: 5px;
  background: transparent;
  transition: background 0.2s;

  > div {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  > div span {
    font-size: 15px;
    color: var(--senary);
    margin-left: 5px;
  }

  div:last-child {
    display: none;
  }

  &.active,
  &:hover {
    background: var(--quinary);

    > div span {
      color: var(--white);
    }
    div:last-child {
      display: flex;
    }
  }
`;

export const InviteIcon = styled(PersonAdd)`
  width: 18px;
  height: 18px;
  color: var(--symbol);
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 18px;
  height: 18px;
  color: var(--symbol);
  cursor: pointer;
  transition: color 0.2s;
  margin-left: 4px;

  &:hover {
    color: var(--white);
  }
`;
