import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;
  if (children.length <= limit) {
    return <Text>{children}</Text>;
  } else {
    const summary = expanded ? children : children.substring(0, limit) + "...";
    return (
      <Text>
        {summary}
        <Button
          marginLeft={1}
          size="sm"
          fontWeight="bold"
          colorScheme="yellow"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less" : "Show More"}
        </Button>
      </Text>
    );
  }
};

export default ExpandableText;
