const coinData = {
    1921: {
      none: {
        good: 101.00,
        fine: 107.00,
        uncirculated: 456.00
      },
      D: {
        good: "No mint mark for this year. Invalid",
        fine: "No mint mark for this year. Invalid",
        uncirculated: "No mint mark for this year. Invalid"
      },
      S: {
        good: "No mint mark for this year. Invalid",
        fine: "No mint mark for this year. Invalid",
        uncirculated: "No mint mark for this year. Invalid"
      }
    },
    1922: {
      none: {
        good: 17.29,
        fine: 17.82,
        uncirculated: 23.20
      },
      D: {
        good: 17.29,
        fine: 20.73,
        uncirculated: 27.82
      },
      S: {
        good: 17.29,
        fine: 20.73,
        uncirculated: 27.82
       }
      },
      1923: {
        none: {
          good: 17.29,
          fine: 20.73,
          uncirculated: 23.20
        },
        D: {
          good: 17.29,
          fine: 17.82,
          uncirculated: 35.98
        },
        S: {
          good: 17.29,
          fine: 20.73,
          uncirculated: 27.82
        }
    },
      1924: {
        none: {
          good: 17.79,
          fine: 20.73,
          uncirculated: 23.20
        },
        D: {
          good: "No mint mark for this year. Invalid",
          fine: "No mint mark for this year. Invalid",
          uncirculated: "No mint mark for this year. Invalid"
        },
        S: {
          good: 17.29,
          fine: 26.72,
          uncirculated: 241.00
        }
    },
      1925: {
        none: {
          good: 17.29,
          fine: 20.73,
          uncirculated: 23.20
        },
        D: {
          good: "No mint mark for this year. Invalid",
          fine: "No mint mark for this year. Invalid",
          uncirculated: "No mint mark for this year. Invalid"
        },
        S: {
          good: 17.29,
          fine: 24.00,
          uncirculated: 51.72
        }
    },
      1926: {
        none: {
          good: 17.29,
          fine: 20.73,
          uncirculated: 29.30
        },
        D: {
          good: 17.29,
          fine: 24.00,
          uncirculated: 46.60
        },
        S: {
          good: 17.29,
          fine: 24.00,
          uncirculated: 31.46
        }
    },
      1927: {
        none: {
          good: 23.52,
          fine: 29.52,
          uncirculated: 44.83
        },
        D: {
          good: 23.52,
          fine: 29.52,
          uncirculated: 267.00
        },
        S: {
          good: 23.52,
          fine: 29.52,
          uncirculated: 306.00
        }
    },
      1928: {
        none: {
          good: 139.00,
          fine: 198.00,
          uncirculated: 384.00
        },
        D: {
          good: "No mint mark for this year. Invalid",
          fine: "No mint mark for this year. Invalid",
          uncirculated: "No mint mark for this year. Invalid"  
        },
        S: {
          good: 24.00,
          fine: 31.67,
          uncirculated: 278.00
        }
    },
      1934: {
        none: {
          good: 26.72,
          fine: 29.52,
          uncirculated: 160.00
        },
        D: {
          good: 26.72,
          fine: 29.52,
          uncirculated: 134.00
        },
        S: {
          good: 27.89,
          fine: 109.00,
          uncirculated: 2556.00
        }
    },
      1935: {
        none: {
          good: 26.72,
          fine: 29.52,
          uncirculated: 42.67
        },
        D: {
          good: "No mint mark for this year. Invalid",
          fine: "No mint mark for this year. Invalid",
          uncirculated: "No mint mark for this year. Invalid"
        },
        S: {
          good: 26.72,
          fine: 29.52,
          uncirculated: 261.00
        }
    }
};
  
  function calculateValue() {
    const year = document.getElementById("yearInput").value;
    const condition = document.getElementById("conditionInput").value;
    const mintMark = document.getElementById("mintMarkInput").value;
  
    if (!coinData[year]) {
      document.getElementById("resultDisplay").innerHTML = "Error: Invalid year.";
      return;
    }
  
    if (!coinData[year][mintMark]) {
      document.getElementById("resultDisplay").innerHTML = "Error: Invalid mint mark.";
      return;
    }
  
    if (!coinData[year][mintMark][condition]) {
      document.getElementById("resultDisplay").innerHTML = "Error: Invalid condition.";
      return;
    }
  
    const value = coinData[year][mintMark][condition];
    document.getElementById("resultDisplay").innerHTML = `The value of your Peace Dollar is $${value} dollars!`;
  }
  