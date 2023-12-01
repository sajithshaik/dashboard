import React, { useState } from "react";
import {
  Image,
  SearchBox,
  Stack,
  Text,
  IconButton,
  TooltipHost,
  Persona,
  PersonaPresence,
  PersonaSize,
  Panel,
  PanelType,
} from "@fluentui/react";

const examplePersona = {
  imageUrl: "",
  imageInitials: "SS",
  text: "Sajith Shaik",
  secondaryText: "Software Engineer",
  tertiaryText: "In a meeting",
  optionalText: "Available at 4:00pm",
};

const microsoftLogo = {
  width: 40, 
  height: 40,
  marginRight: 8
};


const calloutProps = { gapSpace: 0 };

 const Header = () => {

  const [showPersonaPanel, setShowPersonaPanel] = useState(false);

  const onPersonaClick = () => {
    // Handle persona click logic here
    setShowPersonaPanel(true);
    // Additional logic can be added here
  };

  const onHidePersonaPanel = () => {
    setShowPersonaPanel(false);
  };

  return (
    <Stack
      disableShrink
      horizontal
      grow={1}
      verticalAlign="center"
      horizontalAlign="space-between"
      styles={{
        root: {
          backgroundColor: "#0078D4", // header blue
          height: "49px",
          maxHeight: "49px",
        },
      }}
    >
      <Stack.Item grow={3}>
          <Stack horizontal wrap={false} verticalAlign="center">
            <Image src={'https://cdn.icon-icons.com/icons2/2845/PNG/512/microsoft_logo_icon_181372.png'} alt="product logo" style={microsoftLogo} />
            <Text
              key="productName"
              variant={"large"}
              styles={{
                root: {
                  color: "white",
                },
              }}
              nowrap
              block
            >
              Microsoft 365 Health Reports
            </Text>
          </Stack>
      </Stack.Item>
      <Stack.Item grow={6}>
        <SearchBox
          placeholder="Search"
          onSearch={(newValue) => console.log("value is " + newValue)}
        />
      </Stack.Item>
      <Stack.Item
        grow={3}
        styles={{
          root: {
            display: "flex",
            justifyContent: "flex-end",
          },
        }}
      >
        <Stack
          horizontal
          tokens={{ childrenGap: 10 }}
          styles={{
            root: {
              paddingRight: 10,
            },
          }}
        >
          <TooltipHost
            content="Emoji"
            id={"tooltip1"}
            calloutProps={calloutProps}
          >
            <IconButton
              iconProps={{ iconName: "Ringer" }}
              title="Button ringer"
              ariaLabel="Button ringer"
              disabled={false}
              checked={false}
              styles={{
                root: {
                  color: "white",
                },
              }}
            />
          </TooltipHost>
          <IconButton
            iconProps={{ iconName: "Settings" }}
            title="Button settings"
            ariaLabel="Button settings"
            disabled={false}
            checked={false}
            styles={{
              root: {
                color: "white",
              },
            }}
          />
          <IconButton
            iconProps={{ iconName: "Help" }}
            title="Button help"
            ariaLabel="Button help"
            disabled={false}
            checked={false}
            styles={{
              root: {
                color: "white",
              },
            }}
          />
         <Persona
            {...examplePersona}
            size={PersonaSize.size32}
            hidePersonaDetails={true}
            presence={PersonaPresence.online}
            imageAlt="Sajith Shaik, status is busy"
            onClick={onPersonaClick}
          /> 
        </Stack>
      </Stack.Item>
      {/* Persona Panel */}
      <Panel
        isOpen={showPersonaPanel}
        type={PanelType.smallFixedFar}
        onDismiss={onHidePersonaPanel}
        headerText="Sajith Shaik"
        closeButtonAriaLabel="Close"
      >
        {/* Add persona details content here */}
        <Persona
          imageUrl=""
          imageInitials="SS"
          text="Sajith Shaik"
          secondaryText="Software Engineer"
          tertiaryText="In a meeting"
          optionalText="Available at 4:00 pm"
          size={PersonaSize.size100}
          presence={PersonaPresence.online}
          imageAlt="Sajith Shaik, status is busy"
        />
      </Panel>

    </Stack>
  );
};

export default Header;

