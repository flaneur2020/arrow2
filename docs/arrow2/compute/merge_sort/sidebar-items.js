initSidebarItems({"fn":[["build_comparator","returns a comparison function between any two arrays of each pair of arrays, according to `SortOptions`."],["merge_sort","Combines two sorted [Array]s of the same [`crate::datatypes::DataType`] into a single sorted array. If the arrays are not sorted (which this function does not check), the result is wrong."],["merge_sort_slices","Given two iterators of slices representing two sets of sorted [`Array`]s, and a `comparator` bound to those [`Array`]s, returns a new iterator of slices denoting how to `take` slices from each of the arrays such that the resulting array is sorted according to `comparator`"],["slices","Returns a vector of slices from different sorted arrays that can be used to create sorted arrays. `pairs` is an array representing multiple sorted array sets. The expected format is"],["take_arrays","Takes N arrays together through `slices` under the assumption that the slices have a total coverage of the arrays. I.e. they are such that all elements on all arrays are picked (which is the case in sorting)."]],"struct":[["MergeSortSlices","An iterator adapter that merge-sorts two iterators of `MergeSlice` into a single `MergeSlice` such that the resulting `MergeSlice`s are ordered according to `comparator`."]],"type":[["MergeSlice","A slice denoting `(array_index, start, len)` representing a slice from one of N arrays. This is used to keep track of contiguous blocks of slots. An array of MergeSlice, `[MergeSlice]`, represents inter-leaved array slices. For example, `[(0, 0, 2), (1, 0, 1), (0, 2, 3)]` represents 2 arrays (a0 and a1) arranged as follows: `[a0[0..2], a1[0..1], a0[2..3]]` This representation is useful when building arrays in memory as it allows to memcopy slices of arrays. This is particularly useful in merge-sort because sorted arrays (passed to the merge-sort) are more likely to have contiguous blocks of sorted elements (than by random)."]]});