**[Hashing]{.ul}**

Data Structure designed to use a hash function to map a given value with
a particular key for faster access, efficiency depends on the efficiency
of the hash function

[Hash Function]{.ul}

-   Function that converts a given value to a integer that can be used
    as the index of a hash table

-   Should be:

    -   Efficient

    -   Should uniformly distribute the keys

[Hash Table]{.ul}

-   An Array (what about a BST?) storing data or pointers to data

[Collision Handling]{.ul}

-   When a newly added element maps to an already existing key

-   Can be handled in a few ways:

    -   Chaining

        -   Each element in the hash table points to a linked list of
            all matched values

    -   Open Addressing

        -   Every element is stored in the table, when searching for an
            element, check each table slot until the element is found
