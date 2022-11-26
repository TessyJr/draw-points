const container = document.getElementById("container");
const undoButton = document.getElementById("undo-btn");
const redoButton = document.getElementById("redo-btn");
let undoArray = [];

function generatePoints(e) {
  undoButton.disabled = false;
  const positionX = e.clientX;
  const positionY = e.clientY;

  const point = document.createElement("div");
  point.classList.add("point");
  point.style.top = positionY - 7 + "px";
  point.style.left = positionX - 7 + "px";

  container.append(point);
}

function undo() {
  redoButton.disabled = false;

  if (container.childElementCount != 0) {
    undoArray.push(container.lastChild);
    container.lastChild.remove();
  }

  if (container.childElementCount == 0) {
    undoButton.disabled = true;
  }
}

function redo() {
  undoButton.disabled = false;

  if (undoArray.length != 0) {
    const redoPoint = undoArray.pop();
    container.append(redoPoint);
  }

  if (undoArray.length == 0) {
    redoButton.disabled = true;
  }
}
