import { useState, useEffect } from "react";

export default function ResultsPage({ initialItems }) {
    // Fallback to empty list if not provided:
    const [items, setItems] = useState(initialItems ?? []);

    // Imagine search updates "items" later; for now we simulate "loaded"
    useEffect(() => {
        // no-op in the mock phase
    }, []);

    const count = items.length;

    return (
        <main>
            {/* ✅ Acceptance: count appears above list */}
            <div aria-live="polite" role="status">
                {count} items found
            </div>

            <ul>
                {items.map((it) => (
                    <li key={it.id}>{it.name}</li>
                ))}
            </ul>
        </main>
    );
}