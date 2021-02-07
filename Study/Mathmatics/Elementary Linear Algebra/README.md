# book
Elementary Linear Algebra by Howard Anton
https://amzn.to/3m6RSMa

# chapter 1 
1. Systems of Linear Equations and Matrices (page 1)
  - contents
    - 1.1 - Introduction to Systems of Linear Equations
    - 1.2 - Gaussian Elimination
    - 1.3 - Matrices and Matrix Operations
    - 1.4 - Inverses; Rules of Matrix Operations
    - 1.5 - Elementary Matrices and a Method for finding
    - 1.6 - Further Results on Systems of Equations and Invertibility
    - 1.7 - Diagonal, Triangular, and Symmetric Matrices
  - Introduction (Chapter Introduction)
    - data in science and math is sometimes formed in matrices (describes them as rows and columns that form a rectangular array, or also like a table)
      - goes on to explain how matrices can arise from physical observations
        - ie. the representation of linear equations
          - like 5x + y = 3  and 2x - y = 4
          - as [[5, 1, 3], [2, 1, 4]] (basically, this is how id represent it with code idk look up a picture)
    - operations can be run on matrices that will change the resultings matrix
      - makes a note that this makes matrices useful in developing because arrays could be used as representations
    - ultimately matrices are useful mathematical objects with many applications
    - finishes with stating the chapter will be about matrices
  - Introduction to Systems of Linear Equations (Sub Chapter 1) (page 2)
    - big blue note at the beginning
      - "systems of linear algebraic equations and their solutions consitute one of the major topics studied in the course known as 'linear algebra'. in this first section we shall introduce some basic terminology and discuss a method for solving such systems"
    - Linear Equations (Sub Header)
      - "linear equation in the n variables" it says (a1x1 + a2x2 + ... + anxn = b)
        - where the a's and the b are constants (so like an actual number)
        - the x's are variables or unknowns
      - a line (ax + by = c) is a linear equation
      - "does not involve any products or roots of variables"
        - not 100% sure what is meant by products here, multiplication as apposed to addition subtraction
      - "all variables occur only to the first power and do not appear as arguments for trig, log, or exponential functions"
      - solution set
        - set of numbers matching the variables (x) that satisfy the equation
        - so for a1x1 + a2x2 = b, the solution set is [s1, s2] where s1 = x1 and s2 = x2 such that the equation resolves to b
    - Finding Solution Set (Sub Header)
      - Solution A (Sub Sub Header)
        - works for binomials
        - assign value to x, solve for y, or vice versa
        - assigned value is refered to as parameter
        - book gives an example (page 2)
          - 4x - 2y = 1
            - solve for y first, and then apply the parameter
            - y = 2x - 1/2, x = 3 gives y = 11/2
            - makes a note that the inverse would yield the same, ie solving for x and applying y = 11/2 would give x = 3
      - Solution B (Sub Sub Header)
        - trinomials
