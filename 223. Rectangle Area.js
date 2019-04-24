Find the total area covered by two rectilinear rectangles in a 2D plane.

Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.

Rectangle Area

Example:

Input: A = -3, B = 0, C = 3, D = 4, E = 0, F = -1, G = 9, H = 2
Output: 45
Note:

Assume that the total area is never beyond the maximum possible value of int.


var computeArea = function(A, B, C, D, E, F, G, H) {
    var rec1Area = (C - A) * (D - B);
    var rec2Area = (G - E) * (H - F);

    var sum = rec1Area + rec2Area;
    if (C <= E || B >= H || G <= A || F >= D) {
        return sum;
    }

    var sideX;
    if (G < C) {
        sideX = (E > A) ? (G - E) : (G - A);
    } else {
        sideX = (A > E) ? (C - A) : (C - E);
    }

    var sideY;
    if (H < D) {
        sideY = (F > B) ? (H - F) : (H - B);
    } else {
        sideY = (B > F) ? (D - B) : (D - F);
    }

    return sum - (sideX * sideY);
};
