[**Binary Search Tree** (SHOULD HAVE PRIOR KNOWLEDGE OF BASIC BINARY
TREES)]{.ul}

Similar to a regular binary tree, but follows a few core principles

-   For each element

    -   The left child and the rest of the sub tree have keys lesser
        than the elements key

    -   The right child and the rest of the sub tree have keys greater
        than the elements key

[Advantages]{.ul}

-   Faster operations

    -   Search

    -   Minimum

    -   Maximum

[Search]{.ul}

-   Search works by utilizing binary search with the keys tree of
    connected elements

    -   starting with the root removing portions of the tree based on
        the search numbers relation to the elements key until the
        correct element is located

        -   if search value is lesser than the key, use the left sub
            tree; if the search value is greater than the key, use the
            right sub tree

-   Should be O(height of tree), worst case becomes O(n)

[Addition]{.ul}

-   New elements are always added at furthest leaf found, based on the
    key

-   Start searching from root based on the key, when an element is found
    without two children, add the new element

-   Should be O(height of tree), worst case becomes O(n)
