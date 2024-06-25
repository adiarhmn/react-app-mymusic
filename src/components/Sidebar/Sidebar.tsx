import { NavLink } from "@mantine/core";
import { IconActivity, IconChevronRight } from "@tabler/icons-react";

export const Sidebar: React.FC = () => {
  return (
    <section>
      <NavLink
        href="#required-for-focus"
        label="Active filled"
        leftSection={<IconActivity size="1rem" stroke={1.5} />}
        rightSection={
          <IconChevronRight
            size="0.8rem"
            stroke={1.5}
            className="mantine-rotate-rtl"
          />
        }
        variant="filled"
        active
      />
    </section>
  );
};
