import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import FishTable from "./FishTable";
import FishTableRow from "./FishTableRow";

Enzyme.configure({ adapter: new Adapter() });

var fishData = [
  {
    name: "Pufferfish",
    image: "http://tinyurl.com/kxd7cuu",
    description: "So puffy!"
  },
  {
    name: "Tuna",
    image: "http://tinyurl.com/zgs7z2s",
    description: "Why are these things so huge? THey're terrifying."
  },
  {
    name: "Goldfish",
    image: "http://tinyurl.com/n4vgcl5",
    description: "Everyone's first pet"
  }
];

describe("FishTable", () => {
  test("should render no `FishTableRow` when given zero fish ", () => {
    const fishTable = shallow(<FishTable fishes={[]} />);
    expect(fishTable.html().includes("Pufferfish")).toEqual(false);
  });

  test("should render one `FishTableRow` when given one fish ", () => {
    const fishTable = shallow(
      <FishTable
        fishes={[
          {
            name: "Goldfish",
            image: "http://tinyurl.com/n4vgcl5",
            description: "Everyone's first pet"
          }
        ]}
      />
    );
    expect(fishTable.html().includes("Goldfish")).toEqual(true);
    expect(fishTable.html().includes("http://tinyurl.com/n4vgcl5")).toEqual(
      true
    );
  });

  test("should render three `FishTableRow` when given three fish ", () => {
    const fishTable = shallow(<FishTable fishes={fishData} />);
    ["Tuna", "Pufferfish", "Goldfish"].forEach(item => {
      expect(fishTable.html().includes(item)).toEqual(true);
    });
  });
});
describe("FishTableRow", () => {
  test("should render a dynamic name", () => {
    const fishTableRow = shallow(
      <FishTableRow
        fish={{
          name: "codestates",
          description: "goot bootcamp",
          image: "https://codestates.com/images/logo_sub_b_simple.png"
        }}
      />
    );
    expect(fishTableRow.html().includes("codestates")).toBe(true);
  });

  test("should render a dynamic image", () => {
    const fishTableRow = shallow(
      <FishTableRow
        fish={{
          name: "codestates",
          description: "goot bootcamp",
          image: "https://codestates.com/images/logo_sub_b_simple.png"
        }}
      />
    );
    expect(
      fishTableRow
        .html()
        .includes("https://codestates.com/images/logo_sub_b_simple.png")
    ).toBe(true);

    expect(fishTableRow.html().includes("img")).toBe(true);
  });

  test("should render a dynamic description", () => {
    const fishTableRow = shallow(
      <FishTableRow
        fish={{
          name: "codestates",
          description: "goot bootcamp",
          image: "https://codestates.com/images/logo_sub_b_simple.png"
        }}
      />
    );
    fishTableRow.setState({ showDescription: true });
    expect(fishTableRow.html().includes("goot bootcamp")).toBe(true);
  });
});
