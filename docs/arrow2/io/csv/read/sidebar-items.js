initSidebarItems({"fn":[["deserialize_batch","Deserializes rows [`ByteRecord`] into a [`RecordBatch`]. Note that this is a convenience function: column deserialization is trivially parallelizable (e.g. rayon)."],["deserialize_column","Deserializes `column` of `rows` into an [`Array`] of [`DataType`] `datatype`."],["infer","Infers [`DataType`] from `bytes`"],["infer_schema","Infer the schema of a CSV file by reading through the first n records up to `max_rows`."],["projected_schema","Returns a new [`Schema`] whereby the fields are selected based on `projection`."],["read_rows","Reads `len` rows from the CSV into Bytes, skiping `skip` This operation has minimal CPU work and is thus the fastest way to read through a CSV without deserializing the contents to arrow."]],"struct":[["ByteRecord","A single CSV record stored as raw bytes."],["Reader","A already configured CSV reader."],["ReaderBuilder","Builds a CSV reader with various configuration knobs."]]});