**[Linked List]{.ul}**

A linked list is a linear data structure where the elements are linked
to the next element in the sequence (ie O-O-O-O)

[Why Linked Lists?]{.ul}

Arrays and linked lists are similar in that they can often represent
similar types of data, but there are key differences between the two

**Advantages over arrays**

-   the size is not fixed, can grow as much as the memory will allow it

-   adding and deleting items is much less expensive

**Disadvantages**

-   no random access, must traverse through list starting at first
    element each time

-   need additional memory for each additional element

-   worse cache locality than arrays

[Representation]{.ul}

-   the entire list is represented by a pointer to the first element in
    the list

    -   the first element is often referred to as the head

    -   if the list is empty the first element will be NULL

-   each element consists of at least:

    -   the data

    -   a pointer to the next element in the list

-   functions can be written to traverse the list and return one or more
    elements
