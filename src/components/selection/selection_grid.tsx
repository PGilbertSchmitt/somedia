import { merge, last, isEqual } from "lodash";
import React, { Component } from "react";
import withStyle, { InjectedProps, InputSheet } from "react-typestyle-inline";

import Selectable, { ISelectableChild } from "./selectable";

/* SelectionGrid class for using arrow keys to navigate a grid of items and apply
 * special stylings to selected items
 * 
 * As this project only cares about selecting a single item and leaving the page, it
 * will only care about styling the active item. However, in the future, this can be
 * turned into a standalone component package that keeps track of those selected as
 * well as the active item, with a rool for toggling vs only having one selected at
 * a time (or even an queue mode).
 * 
 * Accepts props for the width of the grid by number of items, and items will simply
 * be added in a left-to-right order and moving to the next row at the limit. Care
 * must be taken, as the component will extend to the maximum size provided to it,
 * and adding too many items can cause some weird behavior. The other prop provided
 * is the list of children, each of which it will wrap into a selectable container.
 * 
 * This class overrides its the keyboard arrow events, as well as the enter and
 * space key. If I can figure out how to do that using props passed into the
 * component, that would be great for modularizing it.
 */

interface ISelectionGridProps {
  gridWidth: number;
  children: ISelectableChild[];
}

interface Coordinate {
  row: number;
  col: number;
}

type Row = ISelectableChild[];

type Grid = Row[];

interface ISelectionGridState {
  currentActive: Coordinate;
  grid: Grid;
}

class SelectionGrid extends Component<ISelectionGridProps, ISelectionGridState> {
  constructor(props: ISelectionGridProps) {
    super(props);
    this.setState({
      currentActive: undefined
    });

    this.moveUp = this.moveUp.bind(this);
    this.moveDown = this.moveDown.bind(this);
    this.moveRight = this.moveRight.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
    this.renderGrid = this.renderGrid.bind(this);
  }

  // This move logic can be cleaned up a bit, though many of the parts can be reused

  coordinate(row, col: number): Coordinate {
    return { row, col };
  }

  moveUp(): void {
    let { grid, currentActive: co } = this.state;
    let h = grid.length;

    if (this.firstRow(co.row)) {
      if (this.colInLastRow(grid, co)) {
        co = this.coordinate(h - 1, co.col);
      } else {
        co = this.coordinate(h - 2, co.col);
      }
    } else {
      co = this.coordinate(co.row - 1, co.col);
    }

    this.setState({ currentActive: co });
  }

  // This one is too difficult to do the if/else way, and looks cleaner. Might use
  // this one for inspiration to clean up the others. Feels wrong somehow, though...
  moveDown(): void {
    let { grid, currentActive: co } = this.state;
    let newCo = this.coordinate(co.row + 1, co.col);

    if (!grid[newCo.row][newCo.col]) {
      newCo.row = 0;
    }

    this.setState({ currentActive: newCo });
  }

  moveRight(): void {
    let { grid, currentActive: co } = this.state;

    if (this.lastInRow(grid, co)) {
      if (this.lastRow(grid, co)) {
        co = this.coordinate(0, 0);
      } else {
        co = this.coordinate(co.row + 1, 0);
      }
    } else {
      co = this.coordinate(co.row, co.col + 1);
    }

    this.setState({ currentActive: co });
  }

  moveLeft(): void {
    let { grid, currentActive: co } = this.state;
    let w = this.props.gridWidth;
    let h = grid.length;

    if (this.firstInRow(co.col)) {
      if (this.firstRow(co.row)) {
        co = this.coordinate(h - 1, last(grid).length - 1);
      } else {
        co = this.coordinate(co.row - 1, w - 1);
      }
    } else {
      co = this.coordinate(co.row, co.col - 1);
    }

    this.setState({ currentActive: co });
  }

  private renderRow(row: Row, rowNum: number, currentActive: Coordinate) {
    return row.map((child: ISelectableChild, idx: number) => {
      let currentCoordinate = { row: rowNum, col: idx };
      let active = isEqual(currentCoordinate, currentActive);
      return (
        <Selectable child={child} select={false} active={active} key={idx} />
      );
    });
  }

  private renderGrid() {
    let { grid, currentActive } = this.state;

    return grid.map((row: Row, idx: number) => {
      return (
        <div className="selection-row" key="row-${idx}">
          {this.renderRow(row, idx, currentActive)}
        </div>
      );
    });
  }

  render() {
    return (
      <div className="selection-grid">
        {this.renderGrid()}
      </div>
    );
  }

  private firstInRow(col: number): boolean {
    return col === 0;
  }

  private firstRow(row: number): boolean {
    return row === 0;
  }

  private lastInRow(grid: Grid, co: Coordinate): boolean {
    return co.col === grid[co.row].length - 1;
  }

  private lastRow(grid: Grid, co: Coordinate): boolean {
    return co.row === grid.length - 1;
  }

  private colInLastRow(grid: Grid, co: Coordinate): boolean {
    return co.col < last(grid).length;
  }
}

export default SelectionGrid;