**[Queues]{.ul}**

Similar to a Stack, A Queue is a linear data structure (uses an Array or
Linked List) that instead follows a different set of rules known as FIFO
or first in first out

[Operations]{.ul}

-   Enqueue

    -   Adds an item to the end of the queue

    -   Full is queue overflow

-   Dequeue

    -   Removes an item from the front of the queue

    -   Empty is queue underflow

-   Front

    -   Retrieve item from front of queue (next item to be removed)

-   Rear

    -   Retrieve item from the end of the queue (last item that was
        added to the queue)

[Applications]{.ul}

-   Useful when the items in the queue don't need to be processed
    immediately but need to be processed in a particular order

    -   particularly useful when a resource is shared among many
        consumers

    -   When data is transferred asynchronously

-   Implementing with an array can be easier than implementing with a
    linked list but both are possible, but the size would be fixed, and
    we would need a circular queue to avoid issues with a large number
    of operations
