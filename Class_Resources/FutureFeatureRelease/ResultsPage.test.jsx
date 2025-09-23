import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResultsPage from "./ResultsPage";

test("shows total count above the list for default catalog", () => {
    const mockItems = [
        { id: 1, name: "Widget A" },
        { id: 2, name: "Widget B" },
        { id: 3, name: "Widget C" },
    ];

    render(<ResultsPage initialItems={mockItems} />);

    // ✅ Acceptance: count appears when results load
    expect(screen.getByRole("status")).toHaveTextContent("3 items found");

    // and the items render underneath
    expect(screen.getByText("Widget A")).toBeInTheDocument();
});