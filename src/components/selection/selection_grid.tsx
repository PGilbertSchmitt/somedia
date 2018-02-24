import React, { Component } from "react";

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
  children: Component[];
}

class SelectionGrid extends Component<ISelectionGridProps, {}> {
  constructor(props: ISelectionGridProps) {
    super(props);
  }

  render() {
    return (
      <div>
        grid stuff goes heres
      </div>
    );
  }
}

export default SelectionGrid;
