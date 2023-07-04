export const Library = {
  row: {
    "&.Library-ItemRow": {
      cursor: "pointer",

      "&.Library-SectionTitle": {
        " .Cirrus-mainColumn": {
          fontSize: "17px",
        }
      },

      "&.Library-SectionItem": {
        backgroundColor: "#f6f6f6",
        "&:hover": {
          opacity: .8
        }
      },
    },
  },
  cell: {
  },
  root: {
    "& .Library-Statistics-GivenAnswers": {
      "div": {
        display: "block",
        lineHeight: "23px",
      },
      "span": {
        width: "54px",
        display: "inline-block",
        whiteSpace: "nowrap",
        padding: "5px",
        marginLeft: "2px",
      },
    },
  }
}
