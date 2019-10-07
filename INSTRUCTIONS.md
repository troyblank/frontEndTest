# Zeconomy Frontend Coding Test

## Background

The `tree` command on Linux/MacOS gives ascii representation of a directory
tree like the following


    feather/
    ├── pom.xml
    └── src
        ├── main
        │   └── java
        │       └── org
        │           └── codejargon
        │               └── feather
        │                   ├── FeatherException.java
        │                   ├── Feather.java
        │                   ├── Key.java
        │                   └── Provides.java
        └── test
            └── java
                └── org
                    └── codejargon
                        └── feather
                            ├── AmbiguousModuleTest.java
                            ├── CircularDependencyTest.java
                            ├── DependencyTest.java
                            ├── FieldInjectionTest.java
                            ├── ModuleOverrideTest.java
                            ├── NamedDependencyTest.java
                            ├── PojoProvidedThroughModuleTest.java
                            ├── PolymorphicDependencyTest.java
                            ├── ProviderInjectionTest.java
                            ├── QualifiedDependencyTest.java
                            ├── SingletonTest.java
                            └── TransitiveDependencyTest.java


By passing the `-J` flag, you can get a JSON representation of the directory
tree like that included in [listing.json](./listing.json).  The data in the
JSON representation is a list of objects.  Each object has a `type` field that
can be either `directory` if that node is a directory, or `file` if the node is
a file.  All nodes have a `name` field that gives the name of the file or
directory.  Additionally, if the `type` is `directory`, then a `contents` field
is included containing a list of the files/directories in that directory.

For reference, the directory tree that is represented by
[listing.json](./listing.json) can be found as part of the open source library
[feather](https://github.com/zsoltherpai/feather/tree/master/feather).

## Task

Your task will be to create a simple single page application that loads
[listing.json](./listing.json), parses it, and displays the contents in a human
friendly format.  The exact format of how to display the directory is not
specified, but you can consider Windows File Explorer, Finder on Mac, or the
trivial [example.html](./example.html) included here as inspiration for how to
display the directory tree.  Feel free to make this is simple or involved as
you would like, but keep in mind that we don't expect more than a couple of
hours to be spent on it.

Additionally, the single page app should have a simple search box that allows
the user to search for a file.  If the filename the user types in is in the
directory listing, that file should be highlighted in some way (e.g. made bold,
background color changed, or the containing element moved into view).

## Rules

1. Your work must be your own.  While you can certainly use online resources
   and any references for help, copying complete solutions from elsewhere is
   not allowed. We will discuss your submission in person in the next stage of
   the interview process, so make sure you understand the code you submit.
2. You may use any third party libraries you want provided the third party
   library does not complete the entirety of this task.  E.g. if you find a
   library that parses and displays the output of `tree -J` that would not be
   allowed.  However, a generic tree react component would be acceptable.
3. Any third party libraries you use should be clearly marked as such, either
   by including them through a packaging system (e.g. packages.json), or
   through comments/documentation.
4. You may take as much time as you want, though we don't expect more than a
   few hours of effort.
5. Any instructions needed to run or build the application should be included
   as part of the submission.
6. While we will consider all aspects of your submission, we will prioritize
   functionality over design.  In other words, we would prefer to see an ugly
   functional submission that a beatiful pixel perfect non-functioning
   submission.
7. If you have any questions or uncertainty about what we want, feel free to
   reach out to us.
