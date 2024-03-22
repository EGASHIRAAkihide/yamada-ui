import type { ComponentMultiStyle } from "@yamada-ui/core"

export const PieChart: ComponentMultiStyle = {
  baseStyle: {
    container: {},
    cell: {},
    tooltip: {
      border: "solid",
      borderWidth: 0.2,
      borderColor: ["blackAlpha.400", "whiteAlpha.400"],
      bgColor: ["white", "neutral.900"],
      rounded: 3,
      paddingX: 5,
      paddingY: 3,
    },
    tooltipTitle: {
      marginBottom: 2,
      fontSize: "md",
      fontWeight: 500,
    },
    tooltipLabel: {
      color: ["black", "gray.200"],
      fontSize: "md",
    },
    tooltipValue: {
      fontSize: "md",
    },
  },

  variants: {
    // subtle: ({ theme: t, colorMode: m, colorScheme: c = "primary" }) => ({}),
    // solid: ({ theme: t, colorMode: m, colorScheme: c = "primary" }) => ({}),
  },

  sizes: {
    sm: {
      container: {
        w: "xl",
        h: "xs",
      },
    },
    md: {
      container: {
        w: "3xl",
        h: "sm",
      },
    },
    lg: {
      container: {
        w: "5xl",
        h: "md",
      },
    },
  },

  defaultProps: {
    size: "md",
    variant: "solid",
    colorScheme: "primary",
  },
}