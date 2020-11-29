class Model {
  constructor() {
    this.Redturn = true;
    this.gamedata = [];
    this.arrayOfID = [];
    this.UniquePosDatas = [];
  }

  horizontalWin(noOrderRed) {
    //TODO: horizontal one
    const Win2 = [];
    const attempt2 = [];
    noOrderRed.map((data) => {
      if (
        Math.abs(data.position - noOrderRed[noOrderRed.length - 1].position) %
          10 ===
        0
      ) {
        attempt2.push(data);
      }
    });

    const attempt2Array1 = [];
    const attempt2Array2 = [];
    const attempt2Array3 = [];
    const attempt2Array4 = [];
    const attempt2Array5 = [];
    const attempt2Array6 = [];
    const attempt2Array7 = [];
    attempt2.map((data) => {
      if (data.id === 1) {
        attempt2Array1.push(data);
      } else if (data.id === 2) {
        attempt2Array2.push(data);
      } else if (data.id === 3) {
        attempt2Array3.push(data);
      } else if (data.id === 4) {
        attempt2Array4.push(data);
      } else if (data.id === 5) {
        attempt2Array5.push(data);
      } else if (data.id === 6) {
        attempt2Array6.push(data);
      } else if (data.id === 7) {
        attempt2Array7.push(data);
      }
    });

    const attempt2Ordered = [
      ...attempt2Array1,
      ...attempt2Array2,
      ...attempt2Array3,
      ...attempt2Array4,
      ...attempt2Array5,
      ...attempt2Array6,
      ...attempt2Array7,
    ];
    if (attempt2Ordered.length >= 4) {
      for (var i = 0; i < attempt2Ordered.length - 3; i++) {
        if (
          attempt2Ordered[i].position ===
            attempt2Ordered[i + 1].position - 10 &&
          attempt2Ordered[i].position ===
            attempt2Ordered[i + 2].position - 20 &&
          attempt2Ordered[i].position === attempt2Ordered[i + 3].position - 30
        ) {
          Win2.push(30);
        }
      }
    }

    return Win2;
  }
  blueHorizontalWin(noOrderBlue) {
    const Win2Blue = [];
    const attempt2Blue = [];
    noOrderBlue.map((data) => {
      if (
        Math.abs(data.position - noOrderBlue[noOrderBlue.length - 1].position) %
          10 ===
        0
      ) {
        attempt2Blue.push(data);
      }
    });

    const attempt2Array1Blue = [];
    const attempt2Array2Blue = [];
    const attempt2Array3Blue = [];
    const attempt2Array4Blue = [];
    const attempt2Array5Blue = [];
    const attempt2Array6Blue = [];
    const attempt2Array7Blue = [];
    attempt2Blue.map((data) => {
      if (data.id === 1) {
        attempt2Array1Blue.push(data);
      } else if (data.id === 2) {
        attempt2Array2Blue.push(data);
      } else if (data.id === 3) {
        attempt2Array3Blue.push(data);
      } else if (data.id === 4) {
        attempt2Array4Blue.push(data);
      } else if (data.id === 5) {
        attempt2Array5Blue.push(data);
      } else if (data.id === 6) {
        attempt2Array6Blue.push(data);
      } else if (data.id === 7) {
        attempt2Array7Blue.push(data);
      }
    });

    const attempt2OrderedBlue = [
      ...attempt2Array1Blue,
      ...attempt2Array2Blue,
      ...attempt2Array3Blue,
      ...attempt2Array4Blue,
      ...attempt2Array5Blue,
      ...attempt2Array6Blue,
      ...attempt2Array7Blue,
    ];
    if (attempt2OrderedBlue.length >= 4) {
      for (var i = 0; i < attempt2OrderedBlue.length - 3; i++) {
        if (
          attempt2OrderedBlue[i].position ===
            attempt2OrderedBlue[i + 1].position - 10 &&
          attempt2OrderedBlue[i].position ===
            attempt2OrderedBlue[i + 2].position - 20 &&
          attempt2OrderedBlue[i].position ===
            attempt2OrderedBlue[i + 3].position - 30
        ) {
          Win2Blue.push(30);
        }
      }
    }
    return Win2Blue;
  }
  verticalWin(noOrderRed) {
    const Win3 = [];
    const attempt3 = [];
    noOrderRed.map((data) => {
      if (data.id === noOrderRed[noOrderRed.length - 1].id) {
        attempt3.push(data);
      }
    });
    if (
      attempt3.length >= 4 &&
      attempt3[attempt3.length - 1].position ===
        attempt3[attempt3.length - 2].position + 1 &&
      attempt3[attempt3.length - 1].position ===
        attempt3[attempt3.length - 3].position + 2 &&
      attempt3[attempt3.length - 1].position ===
        attempt3[attempt3.length - 4].position + 3
    ) {
      Win3.push(
        attempt3[attempt3.length - 4].position ===
          attempt3[attempt3.length - 1].position - 3
      );
    }
    return Win3;
  }
  blueVerticalWin(noOrderBlue) {
    const Win3Blue = [];
    const attempt3Blue = [];
    noOrderBlue.map((data) => {
      if (data.id === noOrderBlue[noOrderBlue.length - 1].id) {
        attempt3Blue.push(data);
      }
    });
    if (
      attempt3Blue.length >= 4 &&
      attempt3Blue[attempt3Blue.length - 1].position ===
        attempt3Blue[attempt3Blue.length - 2].position + 1 &&
      attempt3Blue[attempt3Blue.length - 1].position ===
        attempt3Blue[attempt3Blue.length - 3].position + 2 &&
      attempt3Blue[attempt3Blue.length - 1].position ===
        attempt3Blue[attempt3Blue.length - 4].position + 3
    ) {
      Win3Blue.push(
        attempt3Blue[attempt3Blue.length - 4].position ===
          attempt3Blue[attempt3Blue.length - 1].position - 3
      );
    }
    return Win3Blue;
  }
  diagonalWin(noOrderRed) {
    const Win = [];
    const attempt1 = [];
    const array1 = [];
    const array2 = [];
    const array3 = [];
    const array4 = [];
    const array5 = [];
    const array6 = [];
    const array7 = [];
    noOrderRed.map((data) => {
      if (
        Math.abs(data.position - noOrderRed[noOrderRed.length - 1].position) %
          11 ===
        0
      ) {
        attempt1.push(data);
      }
    });

    attempt1.map((data) => {
      if (data.id === 1) {
        array1.push(data);
      } else if (data.id === 2) {
        array2.push(data);
      } else if (data.id === 3) {
        array3.push(data);
      } else if (data.id === 4) {
        array4.push(data);
      } else if (data.id === 5) {
        array5.push(data);
      } else if (data.id === 6) {
        array6.push(data);
      } else if (data.id === 7) {
        array7.push(data);
      }
    });

    const attempt1Ordered = [
      ...array1,
      ...array2,
      ...array3,
      ...array4,
      ...array5,
      ...array6,
      ...array7,
    ];

    if (
      attempt1Ordered.length >= 4 &&
      attempt1Ordered[attempt1Ordered.length - 1].position ===
        attempt1Ordered[attempt1Ordered.length - 2].position + 11 &&
      attempt1Ordered[attempt1Ordered.length - 1].position ===
        attempt1Ordered[attempt1Ordered.length - 3].position + 22 &&
      attempt1Ordered[attempt1Ordered.length - 1].position ===
        attempt1Ordered[attempt1Ordered.length - 4].position + 33
    ) {
      Win.push(
        attempt1Ordered[attempt1Ordered.length - 4].position ===
          attempt1Ordered[attempt1Ordered.length - 1].position - 33
      );
    }

    const attempt4 = [];
    const array11 = [];
    const array22 = [];
    const array33 = [];
    const array44 = [];
    const array55 = [];
    const array66 = [];
    const array77 = [];
    noOrderRed.map((data) => {
      if (
        Math.abs(data.position - noOrderRed[noOrderRed.length - 1].position) %
          9 ===
        0
      ) {
        attempt4.push(data);
      }
    });
    attempt4.map((data) => {
      if (data.id === 1) {
        array11.push(data);
      } else if (data.id === 2) {
        array22.push(data);
      } else if (data.id === 3) {
        array33.push(data);
      } else if (data.id === 4) {
        array44.push(data);
      } else if (data.id === 5) {
        array55.push(data);
      } else if (data.id === 6) {
        array66.push(data);
      } else if (data.id === 7) {
        array77.push(data);
      }
    });

    const attempt4Ordered = [
      ...array11,
      ...array22,
      ...array33,
      ...array44,
      ...array55,
      ...array66,
      ...array77,
    ];
    if (
      attempt4Ordered.length >= 4 &&
      attempt4Ordered[attempt4Ordered.length - 1].position ===
        attempt4Ordered[attempt4Ordered.length - 2].position + 9 &&
      attempt4Ordered[attempt4Ordered.length - 1].position ===
        attempt4Ordered[attempt4Ordered.length - 3].position + 18 &&
      attempt4Ordered[attempt4Ordered.length - 1].position ===
        attempt4Ordered[attempt4Ordered.length - 4].position + 27
    ) {
      Win.push(
        attempt4Ordered[attempt4Ordered.length - 4].position ===
          attempt4Ordered[attempt4Ordered.length - 1].position - 27
      );
    }
    return Win;
  }
  blueDiagonalWin(noOrderBlue) {
    const WinBlue = [];
    const attempt1Blue = [];
    const array1 = [];
    const array2 = [];
    const array3 = [];
    const array4 = [];
    const array5 = [];
    const array6 = [];
    const array7 = [];
    noOrderBlue.map((data) => {
      if (
        Math.abs(data.position - noOrderBlue[noOrderBlue.length - 1].position) %
          11 ===
        0
      ) {
        attempt1Blue.push(data);
      }
    });

    attempt1Blue.map((data) => {
      if (data.id === 1) {
        array1.push(data);
      } else if (data.id === 2) {
        array2.push(data);
      } else if (data.id === 3) {
        array3.push(data);
      } else if (data.id === 4) {
        array4.push(data);
      } else if (data.id === 5) {
        array5.push(data);
      } else if (data.id === 6) {
        array6.push(data);
      } else if (data.id === 7) {
        array7.push(data);
      }
    });

    const attempt1BlueOrdered = [
      ...array1,
      ...array2,
      ...array3,
      ...array4,
      ...array5,
      ...array6,
      ...array7,
    ];

    if (
      attempt1BlueOrdered.length >= 4 &&
      attempt1BlueOrdered[attempt1BlueOrdered.length - 1].position ===
        attempt1BlueOrdered[attempt1BlueOrdered.length - 2].position + 11 &&
      attempt1BlueOrdered[attempt1BlueOrdered.length - 1].position ===
        attempt1BlueOrdered[attempt1BlueOrdered.length - 3].position + 22 &&
      attempt1BlueOrdered[attempt1BlueOrdered.length - 1].position ===
        attempt1BlueOrdered[attempt1BlueOrdered.length - 4].position + 33
    ) {
      WinBlue.push(
        attempt1BlueOrdered[attempt1BlueOrdered.length - 4].position ===
          attempt1BlueOrdered[attempt1BlueOrdered.length - 1].position - 33
      );
    }

    const attempt4 = [];
    const array11 = [];
    const array22 = [];
    const array33 = [];
    const array44 = [];
    const array55 = [];
    const array66 = [];
    const array77 = [];
    noOrderBlue.map((data) => {
      if (
        Math.abs(data.position - noOrderBlue[noOrderBlue.length - 1].position) %
          9 ===
        0
      ) {
        attempt4.push(data);
      }
    });
    attempt4.map((data) => {
      if (data.id === 1) {
        array11.push(data);
      } else if (data.id === 2) {
        array22.push(data);
      } else if (data.id === 3) {
        array33.push(data);
      } else if (data.id === 4) {
        array44.push(data);
      } else if (data.id === 5) {
        array55.push(data);
      } else if (data.id === 6) {
        array66.push(data);
      } else if (data.id === 7) {
        array77.push(data);
      }
    });

    const attempt4Ordered = [
      ...array11,
      ...array22,
      ...array33,
      ...array44,
      ...array55,
      ...array66,
      ...array77,
    ];
    if (
      attempt4Ordered.length >= 4 &&
      attempt4Ordered[attempt4Ordered.length - 1].position ===
        attempt4Ordered[attempt4Ordered.length - 2].position + 9 &&
      attempt4Ordered[attempt4Ordered.length - 1].position ===
        attempt4Ordered[attempt4Ordered.length - 3].position + 18 &&
      attempt4Ordered[attempt4Ordered.length - 1].position ===
        attempt4Ordered[attempt4Ordered.length - 4].position + 27
    ) {
      WinBlue.push(
        attempt4Ordered[attempt4Ordered.length - 4].position ===
          attempt4Ordered[attempt4Ordered.length - 1].position - 27
      );
    }
    return WinBlue;
  }

  winCondition() {
    const array1 = [];
    const array2 = [];
    const array3 = [];
    const array4 = [];
    const array5 = [];
    const array6 = [];
    const array7 = [];
    const red = [];
    const blue = [];
    const noOrderBlue = [];
    const noOrderRed = [];

    this.UniquePosDatas.map((data) => {
      if (data.id === 1) {
        array1.push(data);
      } else if (data.id === 2) {
        array2.push(data);
      } else if (data.id === 3) {
        array3.push(data);
      } else if (data.id === 4) {
        array4.push(data);
      } else if (data.id === 5) {
        array5.push(data);
      } else if (data.id === 6) {
        array6.push(data);
      } else if (data.id === 7) {
        array7.push(data);
      }
    });

    const orderedArray = [
      ...array1,
      ...array2,
      ...array3,
      ...array4,
      ...array5,
      ...array6,
      ...array7,
    ];

    orderedArray.map((data) => {
      if (data.red) {
        red.push(data);
      } else {
        blue.push(data);
      }
    });

    this.UniquePosDatas.map((data) => {
      if (data.red) {
        noOrderRed.push(data);
      } else {
        noOrderBlue.push(data);
      }
    });
    //! Conditionals

    console.log(this.horizontalWin(noOrderRed));

    if (this.gamedata.length >= 4) {
      if (
        this.verticalWin(noOrderRed)[0] === true ||
        this.horizontalWin(noOrderRed)[0] === 30 ||
        this.diagonalWin(noOrderRed)[0] === true
      ) {
        return "Red";
      } else if (
        this.blueVerticalWin(noOrderBlue)[0] === true ||
        this.blueHorizontalWin(noOrderBlue)[0] === 30 ||
        this.blueDiagonalWin(noOrderBlue)[0] === true
      ) {
        return "Blue";
      }
    }
  }

  disableCondition() {
    const id = [];
    this.UniquePosDatas.map((data) => {
      const dataPosInList = data.position.toString().split("");
      if (parseInt(dataPosInList[1]) === 6) {
        id.push(parseInt(dataPosInList[0]));
      }
    });
    return id;
  }

  bindData(handler) {
    handler(this.Redturn);
  }
  showPos() {
    return this.gamedata[this.gamedata.length - 1].position;
  }
  changeTurns() {
    //! Must only be run once, or else the data will be messed up

    if (this.gamedata.length === 0) {
      this.Redturn = true;
    } else {
      if (this.Redturn === true) {
        this.Redturn = false;
      } else {
        this.Redturn = true;
      }
    }
  }
  idChecker(id) {
    //! Must only be run once, or else the data will be messed up
    this.arrayOfID.push(id);
    const currentID = [];
    for (var i = 0; i < this.arrayOfID.length; i++) {
      if (this.arrayOfID[i] === id) {
        currentID.push(id);
      }
    }
    return currentID.length;
  }
  addData(id, pos, handler, handleReset, handleDisable) {
    const UniquePos1 = [id, pos].toString().slice(0, 1);
    const UniquePos2 = [id, pos].toString().slice(2, 3);
    const UniquePos = UniquePos1 + UniquePos2;
    const newData = {
      id: id,
      red: this.Redturn,
      position: pos,
    };
    const UniquePosData = {
      id: id,
      red: this.Redturn,
      position: parseInt(UniquePos),
    };
    this.UniquePosDatas.push(UniquePosData);
    this.gamedata.push(newData);
    this.changeTurns();
    this.bindData(handler);
    handleReset(this.winCondition());
    handleDisable(this.disableCondition());
    // if (this.winCondition() === "Red" || this.winCondition() === "Blue") {
    //   handler3();
    // }
  }

  dataReset() {
    this.gamedata = [];
    this.Redturn = true;
    this.arrayOfID = [];
    this.UniquePosDatas = [];
  }
}
class View {
  constructor() {
    this.hover1 = document.querySelector(".hoversection1");
    this.hover2 = document.querySelector(".hoversection2");
    this.hover3 = document.querySelector(".hoversection3");
    this.hover4 = document.querySelector(".hoversection4");
    this.hover5 = document.querySelector(".hoversection5");
    this.hover6 = document.querySelector(".hoversection6");
    this.hover7 = document.querySelector(".hoversection7");
    this.text = document.querySelector(".text");
  }
  eventHandler(handler, e) {
    if ((handler, e)) {
      const targetList = e.target.classList.value.split("");
      handler(parseInt(targetList[targetList.length - 1]));
    }
  }
  bindDisplayShapes(handler) {
    this.hover1.addEventListener("click", (e) => {
      this.eventHandler(handler, e);
    });
    this.hover2.addEventListener("click", (e) => {
      this.eventHandler(handler, e);
    });
    this.hover3.addEventListener("click", (e) => {
      this.eventHandler(handler, e);
    });
    this.hover4.addEventListener("click", (e) => {
      this.eventHandler(handler, e);
    });
    this.hover5.addEventListener("click", (e) => {
      this.eventHandler(handler, e);
    });
    this.hover6.addEventListener("click", (e) => {
      this.eventHandler(handler, e);
    });
    this.hover7.addEventListener("click", (e) => {
      this.eventHandler(handler, e);
    });
  }

  changingColor(turn) {
    if (turn === false) {
      this.hover1.parentNode.classList.remove("hovervisual");
      this.hover1.parentNode.classList.add("hovervisual2");
    } else {
      this.hover1.parentNode.classList.remove("hovervisual2");
      this.hover1.parentNode.classList.add("hovervisual");
    }
  }
  addColor(id, pos, turn, handler, won) {
    const gameArea = this.hover1.parentElement.parentElement.childNodes[5]
      .childNodes[1];
    const target = gameArea.childNodes[2 * id - 1].childNodes[2 * pos - 1];
    turn === false
      ? (target.style.backgroundColor = "Red")
      : (target.style.backgroundColor = "aqua");

    if (won) {
      handler();
    }
  }
  disableButtons(idArray) {
    const id = idArray[idArray.length - 1];
    if (id === 1) {
      this.hover1.setAttribute("disabled", "disabled");
    } else if (id === 2) {
      this.hover2.setAttribute("disabled", "disabled");
    } else if (id === 3) {
      this.hover3.setAttribute("disabled", "disabled");
    } else if (id === 4) {
      this.hover4.setAttribute("disabled", "disabled");
    } else if (id === 5) {
      this.hover5.setAttribute("disabled", "disabled");
    } else if (id === 6) {
      this.hover6.setAttribute("disabled", "disabled");
    } else if (id === 7) {
      this.hover7.setAttribute("disabled", "disabled");
    }
  }

  changeText(turn, won) {
    if (won === "Red") {
      this.text.textContent = "Red Won!";
    } else if (won === "Blue") {
      this.text.textContent = "Blue Won!";
    } else if (turn === true) {
      this.text.textContent = "Red's Turn";
    } else if (turn === false) {
      this.text.textContent = "Blue's Turn";
    }
  }
  visualReset() {
    this.hover1.setAttribute("disabled", "disabled");
    this.hover2.setAttribute("disabled", "disabled");
    this.hover3.setAttribute("disabled", "disabled");
    this.hover4.setAttribute("disabled", "disabled");
    this.hover5.setAttribute("disabled", "disabled");
    this.hover6.setAttribute("disabled", "disabled");
    this.hover7.setAttribute("disabled", "disabled");
  }
}
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.bindDisplayShapes(this.handleVisualizingData);
    this.view.bindDisplayShapes(this.handleAddingColor);
  }
  handleVisualizingData = (id) => {
    this.model.addData(
      id,
      this.model.idChecker(id),
      this.handleChangingColor,
      this.handleUpdatingTexts,
      this.handleDisablingButtons
    );
  };
  handleAddingColor = (id) => {
    this.view.addColor(
      id,
      this.model.showPos(),
      this.model.Redturn,
      this.handleResetting,
      this.model.winCondition()
    );
  };
  handleDisablingButtons = (id) => {
    this.view.disableButtons(id);
  };
  handleChangingColor = (turn) => {
    this.view.changingColor(turn);
  };
  handleUpdatingTexts = (won) => {
    this.view.changeText(this.model.Redturn, won);
  };
  handleResetting = () => {
    this.view.visualReset();
    this.model.dataReset();
  };
}

const app = new Controller(new Model(), new View());
