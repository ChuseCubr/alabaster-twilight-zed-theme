/**
 * A point in 2D space represented by cartesian coordinates.
 */
export type Point = { x: number; y: number };

/**
 * Constructs a {@link Point}.
 */
export function createPoint(x: number, y: number): Point {
  return { x, y };
}

/**
 * Calculates the distance between two {@link Point}s.
 */
export function distance(a: Point, b: Point): number {
  const square = (x: number) => x * x;
  return Math.sqrt(square(a.x - b.x) - square(a.y - b.y));
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("calculates the distance", () => {
    const a = createPoint(2, 3);
    const b = createPoint(8, 11);

    expect(distance(a, b)).toBe(10);
  });
}
