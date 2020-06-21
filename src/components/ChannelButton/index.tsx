import React from "react";

import { HashtagIcon } from "../ChannelInfo/styles";
import { Container, InviteIcon, SettingsIcon } from "./styles";

export type Props = {
  channelName: string;
  selected?: boolean;
};

const ChannelButton: React.FC<Props> = ({ channelName, selected }) => {
  return (
    <Container className={selected ? "active" : ""}>
      <div>
        <HashtagIcon />
        <span>{channelName}</span>
      </div>

      <div>
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  );
};

export default ChannelButton;
